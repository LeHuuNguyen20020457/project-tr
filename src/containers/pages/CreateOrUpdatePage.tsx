import React, { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import clsx from 'clsx';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import { IBreadcrumbItem } from '../../models/employee';
import DynamicTab from '../common/dynamicTab/DynamicTab';
import PersonalInfo from '../components/PersonalInfo';
import { schemaCreateOrUpdate } from '../../untils/createOrUpdate';
import { IContractNameAndDate, ICreateOrUpdate } from '../../models/createOrUpdate';

import ContractInfo from '../components/ContractInfo';
import EmploymentDetails from '../components/EmploymentDetails';

import SalaryAndWages from '../components/SalaryAndWages';
import Others from '../components/Others';
import { API_URL } from '../../constrants/config';
import { ACCESS_TOKEN } from '../../constrants/localstore';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { CreateOrUpdatePageStyles } from '../../style/CreateOrUpdatePageStyles';

const keyUpdate: (keyof ICreateOrUpdate)[] = [
    'name',
    'gender',
    'mother_name',
    'dob',
    'pob',
    'ktp_no',
    'nc_id',
    'home_address_1',
    'home_address_2',
    'mobile_no',
    'tel_no',
    'marriage_id',
    'card_number',
    'bank_account_no',
    'bank_name',
    'family_card_number',
    'safety_insurance_no',
    'health_insurance_no',
    'contract_start_date',
    'type',
    'department_id',
    'position_id',
    'basic_salary',
    'audit_salary',
    'safety_insurance',
    'health_insurance',
    'meal_allowance',
    'grade_id',
    'benefits',
    'remark',
    'entitle_ot',
    'meal_allowance_paid',
    'operational_allowance_paid',
    'attendance_allowance_paid',
];

function CreateOrUpdatePage() {
    const [btnCurrent, setBtnCurrent] = useState<number>(1);
    const [btnPrev, setBtnPrev] = useState<number | null>(null);

    //1:xanh nhat  2:xanh dam  3:do nhat  4: do dam
    const [statusBtnOne, setStatusBtnOne] = useState<number>(1);
    const [statusBtnTwo, setStatusBtnTwo] = useState<number>(1);
    const [statusBtnThree, setStatusBtnThree] = useState<number>(1);
    const [statusBtnFour, setStatusBtnFour] = useState<number>(1);
    const [statusBtnFive, setStatusBtnFive] = useState<number>(1);
    const [btnAdd, setBtnAdd] = useState<number>(0);
    const [addFile, setAddFile] = React.useState<File[]>([]);
    const [contractNameAndDate, setContractNameAndDate] = React.useState<IContractNameAndDate[]>([]);

    const navigate = useNavigate();
    const [isUpdate, setIsUpdate] = useState<boolean>(false);

    let { id } = useParams();

    useEffect(() => {
        if (id) {
            setIsUpdate(true);
        }
    }, [id]);

    const {
        control,
        handleSubmit,
        watch,
        register,
        setValue,
        setError,
        reset,
        formState: { errors, touchedFields, isValid },
        getValues,
    } = useForm<ICreateOrUpdate>({
        // shouldFocusError: false,
        resolver: yupResolver(schemaCreateOrUpdate),
        defaultValues: {
            name: '',
            gender: 0,
            mother_name: '',
            dob: '',
            pob: '',
            home_address_1: '',
            home_address_2: '',
            marriage_id: 1,
            bank_name: '',
            basic_salary: 2200000,
            audit_salary: 2200000,
            safety_insurance: 66000,
            health_insurance: 132000,
            meal_allowance: 34000,
        },
        mode: 'onChange',
    });

    const breadcrumbItems: IBreadcrumbItem[] = isUpdate
        ? [
              { label: 'General' },
              { label: 'Employee Management', link: '/employee' },
              { label: 'Edit employee', active: true },
          ]
        : [
              { label: 'General' },
              { label: 'Employee Management', link: '/employee' },
              { label: 'Add new employee', active: true },
          ];

    const onSubmit: SubmitHandler<ICreateOrUpdate> = (data) => {
        console.log('vàoooooo');
        console.log('data, ', isUpdate, data);
        if (!isUpdate) {
            axios({
                method: 'POST',
                baseURL: API_URL,
                url: '/employee',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
                },
                data: data,
            })
                .then((res) => {
                    navigate('/employee');
                    toast('Record added');
                    console.log('Success');
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            axios({
                method: 'PUT',
                baseURL: API_URL,
                url: `/employee/${id}`,
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
                },
                data: data,
            })
                .then((res) => {
                    navigate('/employee');
                    toast('Change saved');
                    console.log('Success');
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        //upload file

        // const formData = new FormData();

        // for (let i = 0; i < addFile.length; i++) {
        //     formData.append('documents', addFile[i]);
        // }

        // console.log(formData);

        // const names = contractNameAndDate.map((contract) => contract.contract_name);
        // const contract_dates = contractNameAndDate.map((contract) => contract.contract_date);

        // axios({
        //     method: 'POST',
        //     baseURL: API_URL,
        //     url: '/contract/save-multiple',
        //     headers: {
        //         Authorization: 'Bearer' + localStorage.getItem(ACCESS_TOKEN),
        //         'Content-Type': 'multipart/form-data',
        //     },
        //     data: {
        //         employee_id: 5000,
        //         documents: addFile,
        //         names: names,
        //         contract_dates: contract_dates,
        //     },
        // })
        //     .then((res) => {
        //         console.log('upload success');
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    };

    // console.log('watch ', getValues('benefits'));
    // console.log(watch(['name', 'gender', 'dob', 'ktp_no', 'nc_id']));
    // console.log(watch(['contract_start_date', 'type']));
    // console.log(watch(['basic_salary', 'audit_salary', 'safety_insurance', 'meal_allowance']));

    //UPDATE

    const data = useSelector((state: any) => state.reduxglobal.employeeInfoId);
    useEffect(() => {
        if (data && isUpdate) {
            keyUpdate.map((key) => {
                setValue(key, data[key]);
            });
        } else {
            keyUpdate.map((key) => {
                reset();
            });
        }
    }, [data, isUpdate]);

    useEffect(() => {
        //lỗi mau do nhat khi out ra
        if (btnPrev === 1) {
            const value = watch(['name', 'gender', 'dob', 'ktp_no', 'nc_id']);
            if (value.some((item) => item === undefined || item === null || item === '')) {
                setStatusBtnOne(3);
            } else {
                setStatusBtnOne(1);
            }
        }
        if (btnPrev === 2) {
            const value = watch(['contract_start_date', 'type']);
            if (value.some((item) => item === undefined || item === null || item === '')) {
                setStatusBtnTwo(3);
            } else {
                setStatusBtnTwo(1);
            }
        }
        if (btnPrev === 4) {
            const value = watch(['basic_salary', 'audit_salary', 'safety_insurance', 'meal_allowance']);
            if (value.some((item) => item === undefined || item === null || (item as number | string) === '')) {
                setStatusBtnFour(3);
            } else {
                setStatusBtnFour(1);
            }
        }
        if (btnPrev === 3) {
            setStatusBtnThree(1);
        }
        if (btnPrev === 5) {
            setStatusBtnFive(1);
        }

        //lỗi màu đỏ đậm khi nhấn vào
        if (btnCurrent === 1) {
            const value = watch(['name', 'gender', 'dob', 'ktp_no', 'nc_id']);
            if (value.some((item) => item === undefined || item === null || item === '')) {
                setStatusBtnOne(4);
            } else {
                setStatusBtnOne(2);
            }
        }
        if (btnCurrent === 2) {
            const value = watch(['contract_start_date', 'type']);
            if (value.some((item) => item === undefined || item === null || item === '')) {
                setStatusBtnTwo(4);
            } else {
                setStatusBtnTwo(2);
            }
        }
        if (btnCurrent === 4) {
            const value = watch(['basic_salary', 'audit_salary', 'safety_insurance', 'meal_allowance']);
            if (value.some((item) => item === undefined || item === null || (item as number | string) === '')) {
                setStatusBtnFour(4);
            } else {
                setStatusBtnFour(2);
            }
        }

        // không lỗi mau xanh đậm cho nút 3 và 5
        if (btnCurrent === 3) {
            setStatusBtnThree(2);
        }
        if (btnCurrent === 5) {
            setStatusBtnFive(2);
        }
    }, [btnPrev, btnCurrent]);

    const handleClickBtnOne = () => {
        setBtnCurrent((prev) => {
            if (prev !== 1) {
                setBtnPrev(prev);
            }
            return 1;
        });
    };

    const handleClickBtnTwo = () => {
        setBtnCurrent((prev) => {
            if (prev !== 2) {
                setBtnPrev(prev);
            }
            return 2;
        });
    };
    const handleClickBtnThree = () => {
        setBtnCurrent((prev) => {
            if (prev !== 3) {
                setBtnPrev(prev);
            }
            return 3;
        });
    };
    const handleClickBtnFour = () => {
        setBtnCurrent((prev) => {
            if (prev !== 4) {
                setBtnPrev(prev);
            }
            return 4;
        });
    };
    const handleClickBtnFive = () => {
        setBtnCurrent((prev) => {
            if (prev !== 5) {
                setBtnPrev(prev);
            }
            return 5;
        });
    };

    const classNameBtnOne = clsx({
        'btn-light-blue': statusBtnOne === 1,
        'btn-blue': statusBtnOne === 2,
        'btn-light-red': statusBtnOne === 3,
        'btn-red': statusBtnOne === 4,
    });

    const classNameBtnTwo = clsx({
        'btn-light-blue': statusBtnTwo === 1,
        'btn-blue': statusBtnTwo === 2,
        'btn-light-red': statusBtnTwo === 3,
        'btn-red': statusBtnTwo === 4,
    });

    const classNameBtnThree = clsx({
        'btn-light-blue': statusBtnThree === 1,
        'btn-blue': statusBtnThree === 2,
    });

    const classNameBtnFour = clsx({
        'btn-light-blue': statusBtnFour === 1,
        'btn-blue': statusBtnFour === 2,
        'btn-light-red': statusBtnFour === 3,
        'btn-red': statusBtnFour === 4,
    });

    const classNameBtnFive = clsx({
        'btn-light-blue': statusBtnFive === 1,
        'btn-blue': statusBtnFive === 2,
    });

    const classNameBtnAdd = clsx('btn-add', {
        btnAddBlue: btnAdd,
    });

    useEffect(() => {
        if (isValid) {
            setBtnAdd(1);
        } else {
            setBtnAdd(0);
        }
    }, [isValid]);

    return (
        <CreateOrUpdatePageStyles>
            <Breadcrumb items={breadcrumbItems}></Breadcrumb>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="title-button">
                    <h3>Employee Management</h3>
                    {isUpdate ? (
                        <button className="btn-save-change" type="submit">
                            Save change
                        </button>
                    ) : (
                        <button className={classNameBtnAdd} type="submit">
                            Add
                        </button>
                    )}
                </div>
                <div className="btn-container">
                    <button className={classNameBtnOne} type="button" onClick={handleClickBtnOne}>
                        Employee Infomation
                    </button>

                    <button className={classNameBtnTwo} type="button" onClick={handleClickBtnTwo}>
                        Contract Infomation
                    </button>

                    <button className={classNameBtnThree} type="button" onClick={handleClickBtnThree}>
                        Employment Details
                    </button>

                    <button className={classNameBtnFour} type="button" onClick={handleClickBtnFour}>
                        Salary & Wages
                    </button>

                    <button className={classNameBtnFive} type="button" onClick={handleClickBtnFive}>
                        Other
                    </button>
                </div>
                {btnCurrent === 1 ? (
                    <DynamicTab title="Personal Information">
                        <PersonalInfo
                            control={control}
                            errors={errors}
                            setValue={setValue}
                            register={register}
                            getValues={getValues}
                        ></PersonalInfo>
                    </DynamicTab>
                ) : btnCurrent === 2 ? (
                    <DynamicTab title="Contract Information">
                        <ContractInfo
                            control={control}
                            errors={errors}
                            setValue={setValue}
                            register={register}
                            getValues={getValues}
                            addFile={addFile}
                            setAddFile={setAddFile}
                            contractNameAndDate={contractNameAndDate}
                            setContractNameAndDate={setContractNameAndDate}
                        ></ContractInfo>
                    </DynamicTab>
                ) : btnCurrent === 3 ? (
                    <DynamicTab title="Employment Details">
                        <EmploymentDetails
                            control={control}
                            errors={errors}
                            setValue={setValue}
                            register={register}
                            getValues={getValues}
                        ></EmploymentDetails>
                    </DynamicTab>
                ) : btnCurrent === 4 ? (
                    <DynamicTab title="Salary & Wages">
                        <SalaryAndWages
                            control={control}
                            errors={errors}
                            setValue={setValue}
                            watch={watch}
                        ></SalaryAndWages>
                    </DynamicTab>
                ) : (
                    <DynamicTab title="Others">
                        <Others register={register} setValue={setValue} getValues={getValues}></Others>
                    </DynamicTab>
                )}
            </form>
        </CreateOrUpdatePageStyles>
    );
}

export default CreateOrUpdatePage;
