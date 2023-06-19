import React, { useEffect, ChangeEvent } from 'react';
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

import { API_URL } from '../../constrants/config';
import { ACCESS_TOKEN } from '../../constrants/localstore';
import { OthersStyles } from '../../style/OthersStyles';

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
    }, [getValues('grade_id' as Path<T>) && gradeOption]);

    useEffect(() => {
        gradeSelected && setInputGrade(gradeSelected?.name as string);
    }, [gradeSelected]);

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
        if (getValues('benefits' as Path<T>).includes(Number(e.currentTarget.getAttribute('data-id')))) {
            const newArr = getValues('benefits' as Path<T>).filter(
                (item: number) => item !== Number(e.currentTarget.getAttribute('data-id')),
            );
            setValue('benefits', newArr);
            setBenefitArr(newArr);
        } else {
            const newArr = [...getValues('benefits' as Path<T>), Number(e.currentTarget.getAttribute('data-id'))];
            setValue('benefits', newArr);
            setBenefitArr(newArr);
        }
    };

    function truncateString(str: string): string {
        if (str && str.length > 8) {
            return str.substring(0, 8) + '...';
        }
        return str;
    }

    const handleDeleteAllBenefit = () => {
        setValue('benefits', []);
        setBenefitArr([]);
    };

    const handleDeleteItemBenefit = (e: React.MouseEvent<HTMLDivElement>) => {
        if (getValues('benefits' as Path<T>).includes(Number(e.currentTarget.getAttribute('data-id')))) {
            const newArr: number[] = getValues('benefits' as Path<T>).filter(
                (item: number) => item !== Number(e.currentTarget.getAttribute('data-id')),
            );
            setValue('benefits', newArr);
            setBenefitArr(newArr);
        } else {
            const newArr = [...getValues('benefits' as Path<T>), Number(e.currentTarget.getAttribute('data-id'))];
            setValue('benefits', newArr);
            setBenefitArr(newArr);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputBenefit(e.currentTarget.value);
    };

    useEffect(() => {
        if (getValues('benefits' as Path<T>).length > 0) {
            setBenefitArr(getValues('benefits' as Path<T>));
        }
    }, []);

    //kiểm tra mảng benefitArr có phải chứa các object hay không
    function isArrayContainsObjects(arr: any[]) {
        setBenefitArr([...arr.map((item) => item.id)]);
        setValue('benefits', [...arr.map((item) => item.id)]);
    }

    useEffect(() => {
        if (
            Array.isArray(getValues('benefits' as Path<T>)) &&
            getValues('benefits' as Path<T>).every((item: IBenefitOption) => typeof item === 'object')
        ) {
            isArrayContainsObjects(getValues('benefits' as Path<T>));
        }
    }, []);

    console.log(benefitArr);

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
                            {benefitArr &&
                                benefitArr.map((benefit: number, index: number) => {
                                    return (
                                        <div key={index} className="item-select">
                                            <span>
                                                {truncateString(
                                                    BenefitOptions.find((item) => item.id == Number(benefit))
                                                        ?.name as string,
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
                            {BenefitOptions &&
                                BenefitOptions.map((benefit, index) => {
                                    return (
                                        <div
                                            key={index}
                                            data-id={benefit.id}
                                            className="option"
                                            onClick={handleSelectOptionsBenefit}
                                            style={
                                                getValues('benefits' as Path<T>).includes(benefit.id)
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
