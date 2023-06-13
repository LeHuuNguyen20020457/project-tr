import React from 'react';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import { FormContainer } from '../common/formContainer';
import { Input } from '../common/input';
import { schemaChangePass } from '../../untils/changePass';
import { IChangePass } from '../../models/changePass';
import { Button } from '../common/button';
import { API_URL } from '../../constrants/config';
import { ACCESS_TOKEN } from '../../constrants/localstore';

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
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IChangePass> = (data) => {
        axios({
            method: 'POST',
            baseURL: API_URL,
            url: '/change-password',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
            },
            data: {
                password: data.password,
                password_confirmation: data.password_confirmation,
            },
        })
            .then(function (response) {
                toast('Đổi mật khẩu thành công');
                navigate('/auth/sign-in');
            })
            .catch(function (error) {
                toast('Đổi mật khẩu thất bại');
                console.log(error);
            });
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
                <div>
                    <Button title="Confirm" width="276px" type="submit"></Button>
                </div>
            </form>
        </FormContainer>
    );
}

export default ChangePassForm;
