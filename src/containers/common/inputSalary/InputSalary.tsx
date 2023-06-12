import React from 'react';
import styled from 'styled-components';
import { Controller, FieldValues, Path, Control, FieldErrors, UseFormWatch } from 'react-hook-form';
import { watch } from 'fs';
import { ICreateOrUpdate } from '../../../models/createOrUpdate';

interface IInputSalaryStyles {
    errormessage: number;
}

const InputSalaryStyles = styled.div<IInputSalaryStyles>`
    display: flex;
    width: 600px;
    justify-content: space-between;
    .label {
        display: block;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 4px;
        margin-top: 10px;
    }

    .input-container {
        .input-salary {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 8px 12px;
            gap: 10px;
            width: 334px;
            height: 46px;
            background-color: ${(props) => (props.errormessage ? 'rgb(255, 239, 239)' : props.theme.colorInput)};
            border: ${(props) => (props.errormessage ? '1px solid rgb(243, 174, 175)' : 'none')};
            border-radius: 6px;
            .Rp {
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                letter-spacing: -0.01em;
                color: #006adc;
            }
            input {
                width: 280px;
                height: 24px;
                font-family: 'SVN-Sofia Pro';
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 150%;
                letter-spacing: -0.01em;
                color: #11181c;
                border: none;
                margin-left: 14px;
                background-color: ${(props) => (props.errormessage ? 'rgb(255, 239, 239)' : props.theme.colorInput)};
            }
            .down-up {
                text-align: center;
                display: flex;
                height: 100%;
                flex-direction: column;

                > div {
                    width: 10px;
                    height: 10px;
                    gap: 20px;
                    cursor: pointer;
                }
            }
        }
    }

    .error-message {
        font-size: 12px;
        color: red;
    }
`;

interface TextInpuSalarytProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label?: string;
    errors?: FieldErrors<T>;
    required?: boolean;
    setValue: (
        name: keyof T,
        value: ReturnType<<T>() => T> | any,
        config?: Partial<{ shouldValidate: boolean; shouldDirty: boolean; shouldTouch: boolean }> | undefined,
    ) => void;
    watch: UseFormWatch<T>;
}

function InputSalary<T extends FieldValues>({
    name,
    control,
    label,
    errors,
    required,
    setValue,
    watch,
}: TextInpuSalarytProps<T>) {
    const errormessage = errors?.[name as string]?.message ? 1 : 0;
    const handleUpValue = () => {
        setValue(name, watch(name) + 1);
    };
    const handleDownValue = () => {
        setValue(name, watch(name) - 1);
    };
    return (
        <InputSalaryStyles errormessage={errormessage as number}>
            <label className="label">
                {label}
                {required ? <span style={{ color: 'red' }}>*</span> : ''}:
            </label>
            <div className="input-container">
                <div className="input-salary">
                    <div>
                        <p className="Rp">Rp</p>
                    </div>
                    <Controller
                        name={name as Path<T>}
                        control={control}
                        render={({ field }) => <input {...field}></input>}
                    ></Controller>
                    <div className="down-up">
                        <div onClick={handleUpValue}>
                            <i className="fa-solid fa-caret-up"></i>
                        </div>
                        <div onClick={handleDownValue}>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                </div>
                <p className="error-message">{errors && errors[name as string]?.message?.toString()}</p>
            </div>
        </InputSalaryStyles>
    );
}

export default InputSalary;
