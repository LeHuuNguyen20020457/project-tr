import React from 'react';
import { Control, FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import { Input } from '../common/input';
import { IOptions } from '../../models/login';
import { Select } from '../common/select';
import { ICreateOrUpdate } from '../../models/createOrUpdate';

const PersonalInfoStyles = styled.div`
    display: flex;
    justify-content: space-between;
`;

type IPersonalInfo<T extends FieldValues> = {
    control: Control<T>;
    errors?: FieldErrors<T>;
    register: UseFormRegister<ICreateOrUpdate>;
    setValue: (
        name: keyof T,
        value: ReturnType<<T>() => T> | any,
        config?: Partial<{ shouldValidate: boolean; shouldDirty: boolean; shouldTouch: boolean }> | undefined,
    ) => void;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const genderList: IOptions[] = [
    {
        option: 'Male',
        value: 0,
    },
    {
        option: 'Female',
        value: 1,
    },
];

const marriageStatus: IOptions[] = [
    {
        option: 'N/A',
        value: 0,
    },
    {
        option: 'Not Married',
        value: 7,
    },
    {
        option: 'Married with 3 kids',
        value: 5,
    },
    {
        option: 'Married with 2 kids',
        value: 4,
    },
    {
        option: 'Married with 1 kids',
        value: 3,
    },
    {
        option: 'Married',
        value: 2,
    },
    {
        option: 'Single',
        value: 1,
    },
];

function PersonalInfo<T extends FieldValues>({ control, errors, setValue, register }: IPersonalInfo<T>) {
    return (
        <PersonalInfoStyles>
            <div>
                <Input
                    name={'name' as Path<T>}
                    control={control}
                    label="Name"
                    errors={errors}
                    line={1}
                    required
                ></Input>
                <Select<ICreateOrUpdate>
                    name="gender"
                    setValue={setValue}
                    register={register}
                    errors={errors}
                    required
                    label="Gender"
                    options={genderList}
                    line={1}
                ></Select>
                <Input name={'mother_name' as Path<T>} control={control} label="Mother_name" line={1}></Input>
                <Input
                    name={'dob' as Path<T>}
                    control={control}
                    label="Date Of Birth"
                    type="date"
                    errors={errors}
                    line={1}
                    required
                ></Input>
                <Input name={'pob' as Path<T>} control={control} label="Place Of Birth" line={1}></Input>
                <Input
                    name={'ktp_no' as Path<T>}
                    control={control}
                    label="KTP No."
                    errors={errors}
                    line={1}
                    required
                ></Input>
                <Input
                    name={'nc_id' as Path<T>}
                    control={control}
                    label="National Card ID"
                    errors={errors}
                    line={1}
                    required
                ></Input>
                <Input name={'home_address_1' as Path<T>} control={control} label="Home Address 1" line={1}></Input>
                <Input name={'home_address_2' as Path<T>} control={control} label="Home Address 2" line={1}></Input>
            </div>
            <div>
                <Input name={'mobile_no' as Path<T>} control={control} label="Mobile No." line={1}></Input>
                <Input name={'tel_no' as Path<T>} control={control} label="Tel No." line={1}></Input>
                <Select<ICreateOrUpdate>
                    name="marriage_id"
                    setValue={setValue}
                    register={register}
                    label="Marriage Status"
                    options={marriageStatus}
                    line={1}
                ></Select>
                <Input name={'card_number' as Path<T>} control={control} label="Bank Card No." line={1}></Input>
                <Input name={'bank_account_no' as Path<T>} control={control} label="Bank Account No." line={1}></Input>
                <Input name={'bank_name' as Path<T>} control={control} label="Bank Name" line={1}></Input>
                <Input
                    name={'family_card_number' as Path<T>}
                    control={control}
                    label="Family Card Number"
                    line={1}
                ></Input>
                <Input
                    name={'safety_insurance_no' as Path<T>}
                    control={control}
                    label="Safety Insurance No."
                    line={1}
                ></Input>
                <Input
                    name={'health_insurance_no' as Path<T>}
                    control={control}
                    label="Health Insurance No."
                    line={1}
                ></Input>
            </div>
        </PersonalInfoStyles>
    );
}
export default PersonalInfo;
