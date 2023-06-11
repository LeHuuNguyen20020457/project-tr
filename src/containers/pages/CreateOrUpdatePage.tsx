import React from 'react';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import { IBreadcrumbItem } from '../../models/employee';
import DynamicTab from '../common/dynamicTab/DynamicTab';
import PersonalInfo from '../components/PersonalInfo';
import { schemaCreateOrUpdate } from '../../untils/createOrUpdate';
import { ICreateOrUpdate } from '../../models/createOrUpdate';
import { Input } from '../common/input';
import { Select } from '../common/select';
import ContractInfo from '../components/ContractInfo';
import EmploymentDetails from '../components/EmploymentDetails';

const CreateOrUpdatePageStyles = styled.div`
    .title-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
            font-weight: 600;
            line-height: 1.19444;
            font-size: 36px;
            letter-spacing: -0.03em;
            color: ${(props) => props.theme.typographyH3};
        }

        button {
            width: 78px;
            height: 48px;
            background: #c1c8cd;
            border-radius: 6px;
            flex: none;
            order: 1;
            flex-grow: 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            text-align: center;
            letter-spacing: -0.01em;
            color: ${(props) => props.theme.colorInput};
            border: none;
        }
    }
    .btn-container {
        display: flex;
        gap: 6px;
        margin-top: 23px;
        button {
            width: 180px;
            height: 42px;
            border-radius: 6px;
            border: none;
        }
    }
`;

function CreateOrUpdatePage() {
    const {
        control,
        handleSubmit,
        watch,
        register,
        setValue,
        setError,
        formState: { errors, touchedFields },
    } = useForm<ICreateOrUpdate>({
        resolver: yupResolver(schemaCreateOrUpdate),
        defaultValues: {
            name: '',
            gender: 0,
            mother_name: '',
            dob: '',
            pob: '',
            // ktp_no: null,
            // nc_id: null,
            home_address_1: '',
            home_address_2: '',
            // mobile_no: null,
            // tel_no: null,
            marriage_id: 1,
            // card_number: null,
            // bank_account_no: null,
            bank_name: '',
            // family_card_number: null,
            // safety_insurance_no: null,
            // health_insurance_no: null,
        },
        mode: 'onChange',
    });

    const breadcrumbItems: IBreadcrumbItem[] = [
        { label: 'General' },
        { label: 'Employee Management', link: '/employee' },
        { label: 'Add new employee', active: true },
    ];
    const onSubmit: SubmitHandler<ICreateOrUpdate> = (data) => {};
    return (
        <CreateOrUpdatePageStyles>
            <Breadcrumb items={breadcrumbItems}></Breadcrumb>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="title-button">
                    <h3>Employee Management</h3>
                    <button type="submit">Add</button>
                </div>
                <div className="btn-container">
                    <button type="button">Employee Infomation</button>
                    <button type="button">Contract Infomation</button>
                    <button type="button">Employment Details</button>
                    <button type="button">Salary & Wages</button>
                    <button type="button">Other</button>
                </div>
                <DynamicTab title="Personal Information">
                    {/* <PersonalInfo
                        control={control}
                        errors={errors}
                        setValue={setValue}
                        register={register}
                    ></PersonalInfo> */}

                    {/* <ContractInfo
                        control={control}
                        errors={errors}
                        setValue={setValue}
                        register={register}
                    ></ContractInfo> */}

                    {/* <EmploymentDetails
                        control={control}
                        errors={errors}
                        setValue={setValue}
                        register={register}
                    ></EmploymentDetails> */}
                </DynamicTab>
            </form>
        </CreateOrUpdatePageStyles>
    );
}

export default CreateOrUpdatePage;
