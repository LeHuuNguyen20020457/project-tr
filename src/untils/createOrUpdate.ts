import * as yup from 'yup';

export const schemaCreateOrUpdate = yup.object({
    name: yup.string().required('Please input Name'),
    gender: yup.number().oneOf([0, 1]).required('Please input Gender'),
    mother_name: yup.string(),
    dob: yup.string().required(),
    pob: yup.string(),
    ktp_no: yup.number().typeError('Please enter a valid number').required('Please input KTP No'),
    nc_id: yup.number().typeError('Please enter a valid number').required('Please input National Card ID'),
    home_address_1: yup.string(),
    home_address_2: yup.string(),
    mobile_no: yup.number(),
    tel_no: yup.number(),
    marriage_id: yup.number(),
    card_number: yup.number(),
    bank_account_no: yup.number(),
    bank_name: yup.string(),
    family_card_number: yup.number(),
    safety_insurance_no: yup.number(),
    health_insurance_no: yup.number(),
    contract_start_date: yup.string().required('Please input date start'),
    type: yup.number().typeError('').required('Please input Gender'),
    department_id: yup.number(),
    position_id: yup.number(),
    basic_salary: yup
        .number()
        .typeError('Please enter a valid number')
        .min(0, 'Value must be greater than 0')
        .required('Please input salary'),
    audit_salary: yup
        .number()
        .typeError('Please enter a valid number')
        .min(0, 'Value must be greater than 0')
        .required('Please input Salary (Audit)'),
    safety_insurance: yup
        .number()
        .typeError('Please enter a valid number')
        .min(0, 'Value must be greater than 0')
        .required('Please input Safety Insurance Amount'),
    health_insurance: yup.number().typeError('Please enter a valid number').min(0, 'Value must be greater than 0'),
    meal_allowance: yup
        .number()
        .typeError('Please enter a valid number')
        .min(0, 'Value must be greater than 0')
        .required('Please input Meal Allowance'),
    grade_id: yup.number(),

    //những trường của contract
    contract_date: yup.string(),
    contract_name: yup.string(),
});
