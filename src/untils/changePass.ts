import * as yup from 'yup';

export const schemaChangePass = yup
    .object({
        password: yup.string().required('Please enter a new password'),
        password_confirmation: yup.string().required('Please enter a new password'),
    })
    .required();
