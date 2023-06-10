import * as yup from 'yup';

export const schema = yup
    .object({
        username: yup.string().required('Please enter username'),
        password: yup.string().required('Please enter password'),
        company_id: yup.number().oneOf([1, 2], 'Please choose factory').required('Please choose factory'),
    })
    .required();
