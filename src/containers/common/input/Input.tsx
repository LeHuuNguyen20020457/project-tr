import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';

import { TextInputProps } from '../../../models/login';
import { InputStyles } from '../../../style/InputStyles';

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
                            <input className="input-text" {...field} type={type} value={field.value || ''}></input>
                        )
                    }
                ></Controller>
                <p className="error-message">{errors && errors[name as string]?.message?.toString()}</p>
            </div>
        </InputStyles>
    );
}

export default Input;
