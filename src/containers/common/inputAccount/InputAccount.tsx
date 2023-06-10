import React from 'react';
import { FieldValues } from 'react-hook-form';
import styled from 'styled-components';
import { Input } from '../input';
import { TextInputProps } from '../../../models/login';

const InputAccountStyles = styled.div`
    label {
        display: block;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 4px;
        margin-top: 10px;
    }
`;

function InputAccount<T extends FieldValues>({ name, control, label }: TextInputProps<T>) {
    return (
        <InputAccountStyles>
            <label>{label}: </label>
            <Input name={name} control={control}></Input>
        </InputAccountStyles>
    );
}

export default InputAccount;
