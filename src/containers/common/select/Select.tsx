import React from 'react';

import {
    UseFormRegister,
    Path,
    SetValueConfig,
    FieldErrors,
    FieldValue,
    FieldValues,
    UseFormGetValues,
} from 'react-hook-form';
import { IOptions } from '../../../models/login';
import { IconStyles, SelectStyles } from '../../../style/SelectStyles';

export type SelectProps<T extends FieldValues> = {
    name: Path<T>;
    register: UseFormRegister<T>;
    required?: boolean;
    setValue: (
        name: keyof T,
        value: ReturnType<<T>() => T> | any,
        config?: Partial<{ shouldValidate: boolean; shouldDirty: boolean; shouldTouch: boolean }> | undefined,
    ) => void;
    errors?: FieldErrors<T>;
    options: IOptions[];
    label?: string;
    line?: number;
    getValues?: UseFormGetValues<T>;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function Select<T extends FieldValues>({
    name,
    register,
    required,
    setValue,
    errors,
    options,
    label,
    line,
    getValues,
}: SelectProps<T>) {
    const [isAnimating, setIsAnimating] = React.useState<number>(0);
    const [hiddenoption, setHiddenoption] = React.useState<number>(1);
    const [selectOption, setSelectOption] = React.useState<string | null>(null);

    const errormessage = errors?.[name as string]?.message ? 1 : 0;

    const handleRotate = () => {
        if (isAnimating) {
            setIsAnimating(0);
            setHiddenoption(1);
        } else {
            setIsAnimating(1);
            setHiddenoption(0);
        }
    };

    const handleSelectOption = (e: React.MouseEvent<HTMLDivElement>) => {
        setValue(name, e.currentTarget.getAttribute('data-value'));
        setSelectOption(e.currentTarget.getAttribute('data-option'));
        handleRotate();
    };

    React.useEffect(() => {
        if (getValues && getValues(name)) {
            const option = options.find((item) => item.value == getValues(name));
            setSelectOption(option ? option.option : '');
        }
    }, [options]);

    return (
        <SelectStyles hiddenoption={hiddenoption} errormessage={errormessage} line={line as number}>
            <p className="p-label">
                {label}
                {required ? <span style={{ color: 'red' }}>*</span> : ''}:{' '}
            </p>
            <div>
                <div className="selectOption" onClick={handleRotate}>
                    <p>{selectOption ? selectOption : label}</p>
                    <IconStyles
                        className="fa-solid fa-angle-down"
                        onClick={handleRotate}
                        animate={isAnimating}
                    ></IconStyles>
                </div>
                <div className="options" {...register(name, { required })}>
                    {options.map((option, index): React.ReactNode => {
                        return (
                            <div
                                key={index}
                                data-option={option.option}
                                data-value={option.value}
                                onClick={handleSelectOption}
                            >
                                <p>{option.option}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <p className="error-message">{errors && errors[name]?.message?.toString()}</p>
        </SelectStyles>
    );
}

export default Select;
