import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import { FormContainer } from '../common/formContainer';
import { ILoginForm, IOptions } from '../../models/login';
import { Select } from '../common/select';
import { Button } from '../common/button';
import { schema } from '../../untils/login';
import { Input } from '../common/input';
import axios from 'axios';
import { API_URL } from '../../constrants/config';
import { ACCESS_TOKEN } from '../../constrants/localstore';

const NavLinkStyles = styled.div`
    color: blue;
    width: 276px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    margin-top: 24px;
    margin-bottom: 24px;
`;

const factoryList: IOptions[] = [
    {
        option: 'SBM',
        value: 1,
    },
    {
        option: 'DMF',
        value: 2,
    },
];

function LoginForm(): JSX.Element {
    const {
        control,
        handleSubmit,
        watch,
        register,
        setValue,
        setError,
        formState: { errors, touchedFields },
    } = useForm<ILoginForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            username: '',
            password: '',
            company_id: 0,
        },
        mode: 'onChange',
    });
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<ILoginForm> = (data) => {
        axios({
            method: 'POST',
            baseURL: API_URL,
            url: '/login',
            data: {
                username: data.username,
                password: data.password,
                company_id: +data.company_id,
            },
        })
            .then((res) => {
                localStorage.setItem(ACCESS_TOKEN, res.data.data.token);

                axios({
                    method: 'GET',
                    baseURL: API_URL,
                    url: '/user/detail',
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
                    },
                })
                    .then(function (response) {})
                    .catch(function (error) {
                        console.log(error);
                    });

                navigate('/employee');
            })
            .catch((err) => {
                toast('Đăng nhập thất bại');
            });
    };

    // console.log(touchedFields);
    // console.log(watch(['username', 'password', 'company_id']));

    // React.useEffect(() => {
    //     console.log('vào');
    //     if (touchedFields.username === true && watch('username') === '') {
    //         setError('username', { message: 'hihihi' });
    //     }
    // }, [touchedFields.username]);

    return (
        <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="username" control={control} label="Username" errors={errors}></Input>
                <Input name="password" control={control} label="Password" errors={errors} type="password"></Input>
                <Select<ILoginForm>
                    name="company_id"
                    setValue={setValue}
                    register={register}
                    errors={errors}
                    required
                    options={factoryList}
                    label="Factory"
                ></Select>
                <Button title="Sign In" width="276px" type="submit"></Button>
            </form>
            <NavLinkStyles>
                <NavLink to={'/auth/forgot-password'}>Forgot Your Password</NavLink>
            </NavLinkStyles>
        </FormContainer>
    );
}

export default LoginForm;
