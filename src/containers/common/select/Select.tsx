import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { UseFormRegister, Path, SetValueConfig, FieldErrors, FieldValue, FieldValues } from 'react-hook-form';
import { IAnimate, ILoginForm, ISelectStyles, IOptions } from '../../../models/login';

const rotateUp = keyframes`
  to {
    transform: rotate(180deg);
  }
`;

const rotateDown = keyframes`
    from {
        transform: rotate(180deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const IconStyles = styled.i<IAnimate>`
    padding: 12px;
    cursor: pointer;
    ${({ animate }) => {
        return animate
            ? css`
                  animation: ${rotateUp} 0.2s linear forwards;
              `
            : css`
                  animation: ${rotateDown} 0.2s linear forwards;
              `;
    }}
`;

const SelectStyles = styled.div<ISelectStyles>`
    .p-label {
        display: block;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 4px;
        margin-top: 10px;
    }
    .selectOption {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 276px;
        height: 48px;
        background-color: ${(props) => (props.errormessage ? 'rgb(255, 239, 239)' : props.theme.colorInput)};
        border: ${(props) => (props.errormessage ? '1px solid rgb(243, 174, 175)' : 'none')};
        border-radius: 6px;
        cursor: pointer;
        p {
            font-size: 16px;
            letter-spacing: -0.01em;
            font-weight: 400;
            color: rgb(104, 112, 118);
            margin-left: 12px;
        }
    }
    .options {
        background-color: ${(props) => props.theme.colorInput};
        width: 276px;
        height: 100px;
        margin-top: 4px;
        border-radius: 6px;
        display: ${(props) => (props.hiddenoption ? 'none' : 'flex')};
        grid-template-columns: auto;
        gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: absolute;
        div {
            width: 250px;
            height: 40px;
            display: flex;
            align-items: center;
            border-radius: 6px;

            &:hover {
                background-color: rgb(233, 249, 238);
                color: rgb(48, 164, 108);
            }
            p {
                margin-left: 20px;
            }
        }
    }
    .error-message {
        font-size: 12px;
        color: red;
    }
`;

export type SelectProps<T extends FieldValues> = {
    name: Path<T>;
    register: UseFormRegister<T>;
    required: boolean;
    setValue: (
        name: keyof T,
        value: ReturnType<<T>() => T> | any,
        config?: Partial<{ shouldValidate: boolean; shouldDirty: boolean; shouldTouch: boolean }> | undefined,
    ) => void;
    errors: FieldErrors<T>;
    options: IOptions[];
    label?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function Select<T extends FieldValues>({ name, register, required, setValue, errors, options, label }: SelectProps<T>) {
    const [isAnimating, setIsAnimating] = React.useState<number>(0);
    const [hiddenoption, setHiddenoption] = React.useState<number>(1);
    const [selectOption, setSelectOption] = React.useState<string | null>(null);

    const errormessage = errors?.[name as string]?.message ? 1 : 0;
    console.log(errormessage);

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

    return (
        <SelectStyles hiddenoption={hiddenoption} errormessage={errormessage}>
            <p className="p-label">{label}: </p>
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
            <p className="error-message">{errors[name]?.message?.toString()}</p>
        </SelectStyles>
    );
}

export default Select;
