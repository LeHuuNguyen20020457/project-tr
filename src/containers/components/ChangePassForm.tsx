import React from 'react';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import { FormContainer } from '../common/formContainer';
import { Input } from '../common/input';
import { schemaChangePass } from '../../untils/changePass';
import { IChangePass } from '../../models/changePass';
import { Button } from '../common/button';

function ChangePassForm() {
    const {
        control,
        handleSubmit,
        watch,
        register,
        setValue,
        formState: { errors },
    } = useForm<IChangePass>({
        resolver: yupResolver(schemaChangePass),
        defaultValues: {
            password: '',
            password_confirmation: '',
        },
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<IChangePass> = (data) => {
        console.log(data);
    };
    return (
        <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="password" control={control} label="New Password" errors={errors} type="password"></Input>
                <Input
                    name="password_confirmation"
                    control={control}
                    label="Confirm Password"
                    errors={errors}
                    type="password"
                ></Input>
                <Button title="Confirm" width="276px" type="submit"></Button>
            </form>
        </FormContainer>
    );
}

export default ChangePassForm;
