import * as yup from 'yup';

export const schemaForgotPass = yup
    .object({
        email: yup.string().email('Invalid email address').required('Please enter your email'),
    })
    .required();
