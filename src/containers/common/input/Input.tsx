import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import styled from 'styled-components';

import { TextInputProps } from '../../../models/login';

interface IErrorMessage {
    errormessage: number;
}

const InputStyles = styled.div<IErrorMessage>`
    > label {
        display: block;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 4px;
        margin-top: 10px;
    }
    > input {
        width: 276px;
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

function Input<T extends FieldValues>({ name, control, label, errors, type }: TextInputProps<T>) {
    const [changeType, setChangeType] = React.useState<string>(type as string);

    const handleToggleEye = () => {
        setChangeType(changeType === 'password' ? 'text' : 'password');
    };

    const errormessage = errors?.[name as string]?.message ? 1 : 0;

    return (
        <InputStyles errormessage={errormessage as number}>
            <label>{label}: </label>
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
                        <input {...field} type={type}></input>
                    )
                }
            ></Controller>
            <p className="error-message">{errors && errors[name as string]?.message?.toString()}</p>
        </InputStyles>
    );
}

export default Input;
