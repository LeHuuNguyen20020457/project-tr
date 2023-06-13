import React, { useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';
import {
    UseFormRegister,
    Path,
    SetValueConfig,
    FieldErrors,
    FieldValue,
    FieldValues,
    UseFormGetValues,
} from 'react-hook-form';
import axios from 'axios';

import { IOptions } from '../../models/login';
import { API_URL } from '../../constrants/config';
import { ACCESS_TOKEN } from '../../constrants/localstore';
import { number } from 'yup';

const OthersStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .container-input-grade {
        display: flex;
        align-items: center;
        width: 600px;
        justify-content: space-between;
        margin-top: 10px;
        .label {
        }
        .input-select {
            position: relative;
        }
        .input-grade {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 8px 12px;
            gap: 10px;

            width: 362px;
            height: 46px;

            background: #f1f3f5;
            border-radius: 6px;

            input {
                background: #f1f3f5;
                border: none;
                width: 360px;
            }
        }
        .grade-selected-item {
            min-width: 100px;
            max-width: 180px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            background-color: #f1f3f5;
            padding: 4px 0;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 400px;
        }
        .grade-selected-container {
            display: flex;
            flex-wrap: wrap;
            max-width: 372px;
            gap: 10px;
            margin-top: 10px;
        }
    }
    .option-grade,
    .option-benefit {
        width: 362px;
        height: 120px;
        position: absolute;
        overflow-y: auto;
        top: 10;
        right: 0;
        background: #f1f3f5;
        border-radius: 6px;
        margin-top: 10px;
        position: absolute;
        z-index: 10;
        .option {
            width: 100%;
            height: 40px;
            display: flex;
            /* justify-content: center; */
            align-items: center;
            text-align: center;
            cursor: pointer;
            &:hover {
                background-color: rgb(233, 249, 238);
            }
            p {
                margin-left: 20px;
                font-size: 16px;
                font-weight: 500;
            }
        }
    }

    /* benefit */
    .container-input-benefit {
        display: flex;
        align-items: center;
        width: 600px;
        justify-content: space-between;
        .input-select {
            position: relative;
            .input-container {
                display: flex;
                background: #f1f3f5;
                border-radius: 6px;
                min-height: 46px;
                .icon {
                    width: 62px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                }
            }
        }
        .input-benefit {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            padding: 8px 12px;
            gap: 10px;

            width: 300px;

            input {
                background: #f1f3f5;
                border: none;
                max-width: 360px;
            }

            .item-select {
                width: 132px;
                color: rgb(0, 145, 255);
                font-size: 14px;
                font-weight: 500;
                display: flex;
                justify-content: space-around;
                align-items: center;
                gap: 10px;
                background-color: #fff;
                border-radius: 6px;
                padding: 4px 0;
            }
        }
    }
    i {
        cursor: pointer;
    }

    .remark-container {
        display: flex;
        justify-content: space-between;
        width: 600px;
        text-align: center;

        textarea {
            border-radius: 6px;
            border: none;
            background-color: ${(props) => props.theme.colorInput};
            line-height: 1.4375em;
            font-size: 16px;
            padding: 8px 12px;
        }
    }

    .HRMUC-container {
        display: flex;
        width: 600px;
        justify-content: space-between;
        align-items: center;
        .input-HRM {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 8px 12px;
            gap: 10px;
            width: 362px;
            height: 46px;
            background: rgba(0, 0, 0, 0.12);
            border-radius: 6px;
            input {
                background: rgba(0, 0, 0, 0.005);
                border: none;
                width: 360px;
            }
        }
    }

    .upload-file-container {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        border-radius: 6px;
        border: 1px solid rgb(223, 227, 230);
        gap: 20px;

        .upload-file-title {
            display: flex;
            width: 100px;
            margin-left: 20px;
            margin-top: 20px;
            .upload-file {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 0px 16px 0px 6px;
                gap: 10px;
                margin-left: 162px;
                width: 120px;
                height: 32px;

                background: #edf6ff;
                border: 1px dashed #0091ff;
                border-radius: 6px;

                flex: none;
                order: 0;
                flex-grow: 1;
                color: #0091ff;
                cursor: pointer;
                span {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 19px;
                }
            }
        }
        .table-container {
            width: 993px;
            height: 225px;
            overflow-y: scroll;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
            thead {
                position: sticky;
                top: 0;
                z-index: 20;
            }

            thead tr {
                line-height: 1.5rem;
                font-size: 14px;
                font-weight: 600;
                vertical-align: inherit;
                text-align: left;
                color: rgb(17, 24, 28);
                background-color: rgb(236, 238, 240) !important;
            }
            tbody tr {
                color: inherit;
                display: table-row;
                vertical-align: middle;
                outline: 0px;
                background-color: rgb(248, 249, 250);
                opacity: 1;
                text-align: left;
            }

            thead th {
                line-height: 1.5rem;
                font-size: 14px;
            }
            tbody th {
                line-height: 1.5;
                font-size: 12px;
                font-weight: 400;
            }

            th,
            td {
                padding: 3px 10px !important;
                height: 32px !important;
                .download-trash {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                    span {
                        width: 20px;
                        height: 20px;
                    }
                    .icon-download {
                        background: #e9f9ee;
                        color: green;
                        cursor: pointer;
                    }
                    .icon-trash {
                        background: #ffefef;
                        color: red;
                        cursor: pointer;
                    }
                }
            }
            thead th:nth-child(1),
            tbody th:nth-child(1) {
                min-width: 51px;
                text-align: center;
            }
            thead th:nth-child(2),
            tbody th:nth-child(2) {
                min-width: 300px;
                text-align: center;
            }
            thead th:nth-child(3),
            tbody th:nth-child(3) {
                min-width: 300px;
                text-align: center;
            }
            thead th:nth-child(4),
            tbody th:nth-child(4) {
                min-width: 300px;
                text-align: center;
            }
        }
    }
`;

// const GradeOptions: IOptions[] = [
//     {
//         option: 'longnguyen',
//         value: 27,
//     },
//     {
//         option: 'thu',
//         value: 9,
//     },

//     {
//         option: 'Employee Grading 3',
//         value: 7,
//     },
//     {
//         option: 'Employee Grading 7',
//         value: 6,
//     },
//     {
//         option: 'Employee Grading 5',
//         value: 5,
//     },
//     {
//         option: 'Employee Grading 4',
//         value: 4,
//     },
//     {
//         option: 'Employee Grading 2',
//         value: 3,
//     },
//     {
//         option: 'Employee Grading 1',
//         value: 1,
//     },
// ];

// const BenefitOptions: IOptions[] = [
//     {
//         option: 'HAHAH',
//         value: 20,
//     },
//     {
//         option: 'Canteen Service',
//         value: 3,
//     },
//     {
//         option: 'Medical Allowance',
//         value: 2,
//     },
//     {
//         option: 'Transportation Allowance',
//         value: 1,
//     },
// ];

interface IGradeOption {
    id: number;
    name: string;
    benefits: IBenefitOption[];
}

interface IBenefitOption {
    id: number;
    name: string;
}

interface ISelectOthers<T extends FieldValues> {
    register: UseFormRegister<T>;
    setValue: (
        name: keyof T,
        value: ReturnType<<T>() => T> | any,
        config?: Partial<{ shouldValidate: boolean; shouldDirty: boolean; shouldTouch: boolean }> | undefined,
    ) => void;
    getValues: UseFormGetValues<T>;
}

function Others<T extends FieldValues>({ register, setValue, getValues }: ISelectOthers<T>) {
    const [toggleIconDrade, setToggleIconDrade] = React.useState<boolean>(false);
    const [toggleIconBenefit, setToggleIconBenefit] = React.useState<boolean>(false);
    const [gradeOption, setGradeOption] = React.useState<IGradeOption[]>([]);
    const [gradeSelected, setGradeSelected] = React.useState<IGradeOption | null>(null);
    const [inputGrade, setInputGrade] = React.useState<string>('');
    const [BenefitOptions, setBenefitOptions] = React.useState<IBenefitOption[]>([]);
    const [benefitArr, setBenefitArr] = React.useState<number[]>([]);
    const [inputBenefit, setInputBenefit] = React.useState<string>('');
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

    // callApi
    useEffect(() => {
        axios({
            method: 'GET',
            baseURL: API_URL,
            url: '/grade',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
            },
        })
            .then((res) => {
                setGradeOption(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });

        axios({
            method: 'GET',
            baseURL: API_URL,
            url: '/benefit',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
            },
        })
            .then((res) => {
                setBenefitOptions(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // Grade
    const handleToggleIconDrade = () => {
        setToggleIconDrade(!toggleIconDrade);
    };

    const handleSelectOptionsGrade = (e: React.MouseEvent<HTMLDivElement>) => {
        setValue('grade_id', Number(e.currentTarget.getAttribute('data-id')));
        setInputGrade(e.currentTarget.textContent as string);
        setToggleIconDrade(!toggleIconDrade);
    };

    const handleCloseGrade = () => {
        setValue('grade_id', null);
        setInputGrade('');
        setGradeSelected(null);
    };

    React.useEffect(() => {
        for (let i = 0; i < gradeOption.length; i++) {
            if (gradeOption[i].id == Number(getValues('grade_id' as Path<T>))) {
                setGradeSelected(gradeOption[i]);
                return;
            }
        }
    }, [getValues('grade_id' as Path<T>)]);

    // BỎ ĐI CÁC BENEFIT MÀ GRADE ĐÃ CHỌN CÓ SẴN
    React.useEffect(() => {
        if (gradeSelected && BenefitOptions) {
            const gradeSelectedId: number[] = [];
            for (let i = 0; i < gradeSelected.benefits.length; i++) {
                gradeSelectedId.push(gradeSelected.benefits[i].id);
            }
            const newBenefitOptions = BenefitOptions.filter((benefitItem) => !gradeSelectedId.includes(benefitItem.id));
            setBenefitOptions(newBenefitOptions);
        }
    }, [gradeSelected]);

    //Benefit
    const handleToggleIconBenefit = () => {
        setToggleIconBenefit(!toggleIconBenefit);
    };

    const handleSelectOptionsBenefit = (e: React.MouseEvent<HTMLDivElement>) => {
        if (benefitArr.includes(Number(e.currentTarget.getAttribute('data-id')))) {
            setBenefitArr(benefitArr.filter((item) => item !== Number(e.currentTarget.getAttribute('data-id'))));
        } else {
            setBenefitArr([...benefitArr, Number(e.currentTarget.getAttribute('data-id'))]);
        }
    };

    function truncateString(str: string): string {
        if (str.length > 8) {
            return str.substring(0, 8) + '...';
        }
        return str;
    }

    const handleDeleteAllBenefit = () => {
        setBenefitArr([]);
    };

    const handleDeleteItemBenefit = (e: React.MouseEvent<HTMLDivElement>) => {
        if (benefitArr.includes(Number(e.currentTarget.getAttribute('data-id')))) {
            setBenefitArr(benefitArr.filter((item) => item !== Number(e.currentTarget.getAttribute('data-id'))));
        } else {
            setBenefitArr([...benefitArr, Number(e.currentTarget.getAttribute('data-id'))]);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputBenefit(e.currentTarget.value);
    };

    useEffect(() => {
        setValue('benefits', benefitArr as number[]);
    }, [benefitArr]);

    //upload-file
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        console.log(file);
    };
    return (
        <OthersStyles>
            <div className="container-input-grade">
                <label>Grade</label>
                <div className="input-select">
                    <div className="input-grade" {...register('grade_id' as Path<T>)}>
                        <input type="text" value={inputGrade} onChange={() => {}} />
                        <i className="fa-solid fa-xmark" onClick={handleCloseGrade}></i>
                        <div onClick={handleToggleIconDrade}>
                            {toggleIconDrade ? (
                                <i className="fa-solid fa-chevron-up"></i>
                            ) : (
                                <i className="fa-solid fa-chevron-down"></i>
                            )}
                        </div>
                    </div>
                    {toggleIconDrade && (
                        <div className="option-grade">
                            {gradeOption &&
                                gradeOption.map((grade, index) => {
                                    return (
                                        <div
                                            key={index}
                                            data-id={grade.id}
                                            className="option"
                                            onClick={handleSelectOptionsGrade}
                                        >
                                            <p>{grade.name}</p>
                                        </div>
                                    );
                                })}
                        </div>
                    )}
                    <div className="grade-selected-container">
                        {gradeSelected &&
                            gradeSelected.benefits.map((benefit, index) => {
                                return (
                                    <div key={index} className="grade-selected-item">
                                        <p>{benefit.name}</p>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
            <div className="container-input-benefit">
                <label>Benefit</label>
                <div className="input-select">
                    <div className="input-container">
                        <div className="input-benefit">
                            {benefitArr.map((benefit, index) => {
                                return (
                                    <div key={index} className="item-select">
                                        <span>
                                            {truncateString(
                                                BenefitOptions.find((item) => item.id === benefit)?.name as string,
                                            )}
                                        </span>
                                        <div data-id={benefit} onClick={handleDeleteItemBenefit}>
                                            <i className="fa-solid fa-xmark"></i>
                                        </div>
                                    </div>
                                );
                            })}
                            <input
                                type="text"
                                {...register('benefits' as Path<T>)}
                                value={inputBenefit}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="icon">
                            <i className="fa-solid fa-xmark" onClick={handleDeleteAllBenefit}></i>
                            <div onClick={handleToggleIconBenefit}>
                                {toggleIconBenefit ? (
                                    <i className="fa-solid fa-chevron-up"></i>
                                ) : (
                                    <i className="fa-solid fa-chevron-down"></i>
                                )}
                            </div>
                        </div>
                    </div>
                    {toggleIconBenefit && (
                        <div className="option-benefit">
                            {BenefitOptions.map((benefit, index) => {
                                return (
                                    <div
                                        key={index}
                                        data-id={benefit.id}
                                        className="option"
                                        onClick={handleSelectOptionsBenefit}
                                        style={
                                            benefitArr.includes(benefit.id)
                                                ? { backgroundColor: 'rgb(233, 249, 238)' }
                                                : {}
                                        }
                                    >
                                        <p>{benefit.name}</p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="remark-container">
                <label>Remark</label>
                <div className="textarea">
                    <textarea name="remark" id="" cols={40} rows={3}></textarea>
                </div>
            </div>
            <div className="HRMUC-container">
                <label>HRM User Account</label>
                <div className="input-HRM">
                    <input type="text" disabled />
                    <div>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            <div className="upload-file-container">
                <div className="upload-file-title">
                    <label>Document: </label>
                    <label className="upload-file">
                        <span>
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg-fill-all"
                                style={{ fill: 'currentcolor' }}
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.81825 1.18191C7.64251 1.00618 7.35759 1.00618 7.18185 1.18191L4.18185 4.18191C4.00611 4.35765 4.00611 4.64257 4.18185 4.81831C4.35759 4.99404 4.64251 4.99404 4.81825 4.81831L7.05005 2.58651V9.49999C7.05005 9.74852 7.25152 9.94999 7.50005 9.94999C7.74858 9.94999 7.95005 9.74852 7.95005 9.49999V2.58651L10.1819 4.81831C10.3576 4.99404 10.6425 4.99404 10.8182 4.81831C10.994 4.64257 10.994 4.35765 10.8182 4.18191L7.81825 1.18191ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                                    fill="#0091ff"
                                ></path>
                            </svg>
                            Upload file
                        </span>
                        <input type="file" hidden accept="image/*,.pdf,.csv,.xlsx,.docx" onChange={handleFileChange} />
                    </label>
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Document Name</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>No</th>
                                <th>Contact Name</th>
                                <th>Sign Date</th>
                                <th>
                                    <div className="download-trash">
                                        <span className="icon-download">
                                            <i className="fa-solid fa-download"></i>
                                        </span>
                                        <span className="icon-trash">
                                            <i className="fa-regular fa-trash-can"></i>
                                        </span>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </OthersStyles>
    );
}

export default Others;
