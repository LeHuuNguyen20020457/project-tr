import React from 'react';
import { Control, FieldErrors, FieldValues, UseFormRegister, Path } from 'react-hook-form';
import { styled } from 'styled-components';

import { ICreateOrUpdate } from '../../models/createOrUpdate';
import { Input } from '../common/input';
import { Select } from '../common/select';
import { IOptions } from '../../models/login';
import axios from 'axios';
import { API_URL } from '../../constrants/config';
import { ACCESS_TOKEN } from '../../constrants/localstore';

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

// const DepartmentOptions: IOptions[] = [
//     {
//         option: 'N/A',
//         value: 0,
//     },
//     {
//         option: '456789kmnbg',
//         value: 37,
//     },
//     {
//         option: '1234546654',
//         value: 36,
//     },
//     {
//         option: 'Accounting',
//         value: 18,
//     },
//     {
//         option: 'Research and Development again',
//         value: 14,
//     },
//     {
//         option: 'QA',
//         value: 12,
//     },
//     {
//         option: 'Product Management',
//         value: 11,
//     },
//     {
//         option: 'Traning',
//         value: 10,
//     },
// ];

// const PositionOptions: IOptions[] = [
//     {
//         option: 'N/A',
//         value: 0,
//     },
//     {
//         option: 'Development',
//         value: 7,
//     },
//     {
//         option: 'Employee',
//         value: 3,
//     },
//     {
//         option: 'Manager Edit',
//         value: 1,
//     },
// ];

// interface IEmploymentDetails{
//     id: number;
//     name: string;
// }

function EmploymentDetails<T extends FieldValues>({ control, errors, setValue, register }: IPersonalInfo<T>) {
    const [DepartmentOptions, setDepartmentOptions] = React.useState<IOptions[]>([]);
    const [PositionOptions, setPositionOptions] = React.useState<IOptions[]>([]);

    React.useEffect(() => {
        axios({
            method: 'GET',
            baseURL: API_URL,
            url: '/department',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
            },
        })
            .then((res) => {
                const newDepartmentOptions: IOptions[] = [];
                for (let i = 0; i < res.data.data.length; i++) {
                    newDepartmentOptions.push({
                        option: res.data.data[i].name,
                        value: res.data.data[i].id,
                    });
                }
                setDepartmentOptions(newDepartmentOptions);
            })
            .catch((err) => {
                console.log(err);
            });
        axios({
            method: 'GET',
            baseURL: API_URL,
            url: '/position',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
            },
        })
            .then((res) => {
                const newPositionOptions: IOptions[] = [];
                for (let i = 0; i < res.data.data.length; i++) {
                    newPositionOptions.push({
                        option: res.data.data[i].name,
                        value: res.data.data[i].id,
                    });
                }
                setPositionOptions(newPositionOptions);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
