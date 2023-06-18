import React from 'react';

import { Controller, FieldValues, Path, Control, FieldErrors, UseFormWatch } from 'react-hook-form';
import { InputSalaryStyles } from '../../../style/InputSalaryStyles';

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
