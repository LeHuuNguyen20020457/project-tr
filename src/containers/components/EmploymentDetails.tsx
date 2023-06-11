import React from 'react';
import { Control, FieldErrors, FieldValues, UseFormRegister, Path } from 'react-hook-form';
import { styled } from 'styled-components';

import { ICreateOrUpdate } from '../../models/createOrUpdate';
import { Input } from '../common/input';
import { Select } from '../common/select';
import { IOptions } from '../../models/login';

const EmploymentDetailsStyles = styled.div`
    display: grid;
    gap: 10px;
    .input-checkbox {
        display: flex;
        width: 300px;
        justify-content: left;
        align-items: center;
        gap: 10px;
        .input-checkbox-1 {
            padding: 0px;
            width: 20px;
            height: 20px;
            border: 1px solid #dfe3e6;
            border-radius: 4px;
            accent-color: #30a46c;
        }
        .input-checkbox-2 {
            padding: 0px;
            width: 20px;
            height: 20px;
            border: 1px solid #dfe3e6;
            border-radius: 4px;

            accent-color: rgba(193, 200, 205, 0.8);
        }
    }
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

const DepartmentOptions: IOptions[] = [
    {
        option: 'N/A',
        value: 0,
    },
    {
        option: '456789kmnbg',
        value: 37,
    },
    {
        option: '1234546654',
        value: 36,
    },
    {
        option: 'Accounting',
        value: 18,
    },
    {
        option: 'Research and Development again',
        value: 14,
    },
    {
        option: 'QA',
        value: 12,
    },
    {
        option: 'Product Management',
        value: 11,
    },
    {
        option: 'Traning',
        value: 10,
    },
];

const PositionOptions: IOptions[] = [
    {
        option: 'N/A',
        value: 0,
    },
    {
        option: 'Development',
        value: 7,
    },
    {
        option: 'Employee',
        value: 3,
    },
    {
        option: 'Manager Edit',
        value: 1,
    },
];
function EmploymentDetails<T extends FieldValues>({ control, errors, setValue, register }: IPersonalInfo<T>) {
    return (
        <div>
            <Select<ICreateOrUpdate>
                name="department_id"
                setValue={setValue}
                register={register}
                line={1}
                label="Department"
                options={DepartmentOptions}
            ></Select>
            <Select<ICreateOrUpdate>
                name="position_id"
                setValue={setValue}
                register={register}
                line={1}
                label="Position"
                options={PositionOptions}
            ></Select>
            <EmploymentDetailsStyles>
                <div className="input-checkbox">
                    <input type="checkbox" className="input-checkbox-1" />
                    <span>Entitled OT</span>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" className="input-checkbox-1" />
                    <span>Meal Allowance Paid</span>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" className="input-checkbox-2" />
                    <span>Operational Allowance Paid</span>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" className="input-checkbox-2" />
                    <span>Attendance Allowance Paid</span>
                </div>
            </EmploymentDetailsStyles>
        </div>
    );
}

export default EmploymentDetails;
