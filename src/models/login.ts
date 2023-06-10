import { Control, FieldValues, Path, FieldErrors, UseFormRegister } from 'react-hook-form';

export interface ILoginForm {
    username: string;
    password: string;
    company_id: number;
}

export interface IOptions {
    option: string;
    value: number;
}

export interface TextInputProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label?: string;
    errors?: FieldErrors<T>;
    type?: string;
}

export interface IAnimate {
    animate: number;
}
export interface ISelectStyles {
    hiddenoption: number;
    errormessage: number;
}
