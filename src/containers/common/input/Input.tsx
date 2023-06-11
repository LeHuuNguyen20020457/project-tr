import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import styled, { css } from 'styled-components';

import { TextInputProps } from '../../../models/login';

interface IErrorMessage {
    errormessage: number;
    line?: number;
    required?: boolean;
    width?: string;
}

const InputStyles = styled.div<IErrorMessage>`
    ${(props) =>
        props.line
            ? css`
                  display: flex;
                  margin: 20px 0;
                  .label {
                      width: 162px;
                  }
              `
            : ''};
    .label {
        display: block;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 4px;
        margin-top: 10px;
    }
    .input-text {
        width: ${(props) => props.width || '276px'};
        padding: 12px;
        border-radius: 6px;
        background-color: ${(props) => (props.errormessage ? 'rgb(255, 239, 239)' : props.theme.colorInput)};
        border: ${(props) => (props.errormessage ? '1px solid rgb(243, 174, 175)' : 'none')};
    }

    .inputPassword {
        width: 276px;
        height: 48px;
        border-radius: 6px;
        display: flex;
        background-color: ${(props) => (props.errormessage ? 'rgb(255, 239, 239)' : props.theme.colorInput)};
        border: ${(props) => (props.errormessage ? '1px solid rgb(243, 174, 175)' : 'none')};
        input {
            border: none;
            background-color: ${(props) => (props.errormessage ? 'rgb(255, 239, 239)' : props.theme.colorInput)};
            width: 220px;
            margin-left: 12px;
        }
        div {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
    .error-message {
        font-size: 12px;
        color: red;
    }
`;

function Input<T extends FieldValues>({
    name,
    control,
    label,
    errors,
    type,
    line,
    required,
    width,
}: TextInputProps<T>) {
    const [changeType, setChangeType] = React.useState<string>(type as string);

    const handleToggleEye = () => {
        setChangeType(changeType === 'password' ? 'text' : 'password');
    };

    const errormessage = errors?.[name as string]?.message ? 1 : 0;

    return (
        <InputStyles errormessage={errormessage as number} line={line as number} width={width}>
            <label className="label">
                {label}
                {required ? <span style={{ color: 'red' }}>*</span> : ''}:
            </label>
            <div>
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) =>
                        type === 'password' ? (
                            <div className="inputPassword">
                                <input {...field} type={changeType}></input>
                                <div onClick={handleToggleEye}>
                                    {changeType === 'password' ? (
                                        <i className="fa-regular fa-eye"></i>
                                    ) : (
                                        <i className="fa-regular fa-eye-slash"></i>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <input className="input-text" {...field} type={type}></input>
                        )
                    }
                ></Controller>
                <p className="error-message">{errors && errors[name as string]?.message?.toString()}</p>
            </div>
        </InputStyles>
    );
}

export default Input;
