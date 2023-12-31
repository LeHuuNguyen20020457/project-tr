import React from 'react';
import { NavLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import nodemailer from 'nodemailer';

import { FormContainer } from '../common/formContainer';
import { Input } from '../common/input';
import { IForgotPass } from '../../models/forgotPass';
import { schemaForgotPass } from '../../untils/forgotPass';
import { Button } from '../common/button';

const NavLinkStyles = styled.div`
    color: blue;
    width: 276px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    margin-top: 24px;
    margin-bottom: 24px;
`;

function ForgotPasswordForm() {
    const {
        control,
        handleSubmit,
        watch,
        register,
        setValue,
        formState: { errors },
    } = useForm<IForgotPass>({
        resolver: yupResolver(schemaForgotPass),
        defaultValues: {
            email: '',
        },
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<IForgotPass> = (data) => {
        // Gọi hàm để gửi email
        // sendEmail(data.email);
    };

    // const sendEmail = async (email: string) => {
    //     try {
    //         // Tạo transporter
    //         const transporter = nodemailer.createTransport({
    //             service: 'gmail',
    //             auth: {
    //                 user: 'nguyenlhc2ts42020@gmail.com',
    //                 pass: 'le9876543',
    //             },
    //         });

    //         // Tạo nội dung email
    //         const mailOptions = {
    //             from: 'nguyenlhc2ts42020@gmail.com',
    //             to: `${email}`,
    //             subject: 'OTP Verification',
    //             text: 'Your OTP code is 123456', // Thay đổi OTP code tùy thuộc vào mã bạn muốn gửi
    //         };

    //         // Gửi email
    //         const result = await transporter.sendMail(mailOptions);
    //         console.log('Email sent:', result.response);
    //     } catch (error) {
    //         console.error('Error sending email:', error);
    //     }
    // };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="email" control={control} label="Your work email" errors={errors}></Input>
                <Button title="Confirm & Send OTP" width="276px" type="submit"></Button>
            </form>
            <NavLinkStyles>
                <NavLink to={'/auth/sign-in'}>Back to Sign In</NavLink>
            </NavLinkStyles>
        </FormContainer>
    );
}

export default ForgotPasswordForm;
