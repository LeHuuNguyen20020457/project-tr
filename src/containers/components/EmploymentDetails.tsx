import React, { useEffect } from 'react';
import { Control, FieldErrors, FieldValues, UseFormRegister, Path, UseFormGetValues } from 'react-hook-form';

import { ICreateOrUpdate } from '../../models/createOrUpdate';
import { Input } from '../common/input';
import { Select } from '../common/select';
import { IOptions } from '../../models/login';
import axios from 'axios';
import { API_URL } from '../../constrants/config';
import { ACCESS_TOKEN } from '../../constrants/localstore';
import { EmploymentDetailsStyles } from '../../style/EmploymentDetailsStyles';

type IPersonalInfo<T extends FieldValues> = {
    control: Control<T>;
    errors?: FieldErrors<T>;
    register: UseFormRegister<ICreateOrUpdate>;
    setValue: (
        name: keyof T,
        value: ReturnType<<T>() => T> | any,
        config?: Partial<{ shouldValidate: boolean; shouldDirty: boolean; shouldTouch: boolean }> | undefined,
    ) => void;
    getValues: UseFormGetValues<ICreateOrUpdate>;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function EmploymentDetails<T extends FieldValues>({
    control,
    errors,
    setValue,
    register,
    getValues,
}: IPersonalInfo<T>) {
    const [DepartmentOptions, setDepartmentOptions] = React.useState<IOptions[]>([]);
    const [PositionOptions, setPositionOptions] = React.useState<IOptions[]>([]);

    const [checkEntitledOT, setCheckEntitledOT] = React.useState<boolean>(getValues('entitle_ot') ? true : false);
    const [checkMAP, setCheckMAP] = React.useState<boolean>(getValues('meal_allowance_paid') ? true : false);

    const handleChangeEntitledOT = () => {
        setCheckEntitledOT(!checkEntitledOT);
    };

    const handleChangeMAP = () => {
        setCheckMAP(!checkMAP);
    };

    useEffect(() => {
        if (checkEntitledOT) {
            setValue('entitle_ot', 'yes');
            setValue('operational_allowance_paid', '');
            setValue('attendance_allowance_paid', '');
        } else {
            setValue('entitle_ot', '');
            setValue('operational_allowance_paid', 'yes');
            setValue('attendance_allowance_paid', 'yes');
        }
    }, [checkEntitledOT]);

    useEffect(() => {
        if (checkMAP) {
            setValue('meal_allowance_paid', 'yes');
        } else {
            setValue('meal_allowance_paid', '');
        }
    }, [checkMAP]);

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
                getValues={getValues}
            ></Select>
            <Select<ICreateOrUpdate>
                name="position_id"
                setValue={setValue}
                register={register}
                line={1}
                label="Position"
                options={PositionOptions}
                getValues={getValues}
            ></Select>
            <EmploymentDetailsStyles checkentitledot={checkEntitledOT ? 1 : 0}>
                <div className="input-checkbox">
                    <input
                        type="checkbox"
                        className="input-checkbox-1"
                        checked={checkEntitledOT}
                        {...register('entitle_ot')}
                        onChange={handleChangeEntitledOT}
                    />
                    <span>Entitled OT</span>
                </div>
                <div className="input-checkbox">
                    <input
                        type="checkbox"
                        className="input-checkbox-1"
                        {...register('meal_allowance_paid')}
                        checked={checkMAP}
                        onChange={handleChangeMAP}
                    />
                    <span>Meal Allowance Paid</span>
                </div>
                <div className="input-checkbox">
                    <input
                        type="checkbox"
                        className="input-checkbox-2"
                        checked={!checkEntitledOT}
                        {...register('operational_allowance_paid')}
                        onChange={() => {}}
                    />
                    <span>Operational Allowance Paid</span>
                </div>
                <div className="input-checkbox">
                    <input
                        type="checkbox"
                        className="input-checkbox-2"
                        checked={!checkEntitledOT}
                        {...register('attendance_allowance_paid')}
                        onChange={() => {}}
                    />
                    <span>Attendance Allowance Paid</span>
                </div>
            </EmploymentDetailsStyles>
        </div>
    );
}

export default EmploymentDetails;
