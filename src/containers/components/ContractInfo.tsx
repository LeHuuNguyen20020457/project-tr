import React from 'react';
import { Control, FieldErrors, FieldValues, UseFormRegister, Path, UseFormGetValues } from 'react-hook-form';
import { styled } from 'styled-components';

import { ICreateOrUpdate } from '../../models/createOrUpdate';
import { Input } from '../common/input';
import { Select } from '../common/select';
import { IOptions } from '../../models/login';
import { Button } from '../common/button';

const ContractInfoStyles = styled.div`
    .title-span {
        height: 28px;
        height: 28px;
        width: 100%;
        display: block;
        background: #f1f3f5;
        border-radius: 12px 12px 0px 0px;
        font-weight: 600;
        font-size: 12px;
        line-height: 27px;
        color: #11181c;
        p {
            margin-left: 20px;
        }
    }
    .attention-p {
        font-weight: 400;
        color: rgb(104, 112, 118);
        padding: 10px 20px;
    }
    .body-contract {
        display: flex;
        .upload-file {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0px 16px 0px 6px;
            gap: 10px;

            width: 195px;
            height: 48px;

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
            }
        }

        .table-container {
            margin-left: 70px;
            margin-top: 20px;
            width: 644px;
            height: 255px;
            overflow-x: hidden;
            overflow-y: hidden;
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
            }
            thead th:nth-child(1),
            tbody th:nth-child(1) {
                min-width: 51px;
                text-align: center;
            }
            thead th:nth-child(2),
            tbody th:nth-child(2) {
                min-width: 150px;
                text-align: center;
            }
            thead th:nth-child(3),
            tbody th:nth-child(3) {
                min-width: 150px;
                text-align: center;
            }
            thead th:nth-child(4),
            tbody th:nth-child(4) {
                min-width: 294px;
                text-align: center;
            }
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
    getValues: UseFormGetValues<ICreateOrUpdate>;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const TypeOptions: IOptions[] = [
    {
        option: 'Permanent',
        value: 0,
    },
    {
        option: 'Part-time',
        value: 1,
    },
    {
        option: 'Contract',
        value: 2,
    },
];

function ContractInfo<T extends FieldValues>({ control, errors, setValue, register, getValues }: IPersonalInfo<T>) {
    return (
        <ContractInfoStyles>
            <Input
                name={'contract_start_date' as Path<T>}
                control={control}
                label="Date Start"
                line={1}
                required
                errors={errors}
                type="date"
            ></Input>
            <Select<ICreateOrUpdate>
                name="type"
                setValue={setValue}
                register={register}
                errors={errors}
                required
                label="Employee Type"
                options={TypeOptions}
                line={1}
                getValues={getValues}
            ></Select>
            <div>
                <span className="title-span">
                    <p>CONTRACT:</p>{' '}
                </span>
                <p className="attention-p">Please upload pdf, png, xlsx, docx file format!</p>
                <hr />
                <div className="body-contract">
                    <div>
                        <div>
                            <Input
                                name={'contract_date' as Path<T>}
                                control={control}
                                label="Contract Date"
                                line={1}
                                width="160px"
                                type="date"
                            ></Input>
                            <Input
                                name={'contract_name' as Path<T>}
                                control={control}
                                label="Contract Name"
                                line={1}
                                width="160px"
                            ></Input>
                        </div>
                        <div>
                            <div>
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
                                    <input type="file" hidden accept="image/*,.pdf,.csv,.xlsx,.docx" />
                                </label>
                            </div>
                            <div>
                                <Button
                                    title="Add"
                                    width="195px"
                                    type="button"
                                    backgroundcolor="rgb(105, 217, 193)"
                                ></Button>
                            </div>
                        </div>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Contact Name</th>
                                    <th>Sign Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>No</th>
                                    <th>Contact Name</th>
                                    <th>Sign Date</th>
                                    <th>Action</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>No</th>
                                    <th>Contact Name</th>
                                    <th>Sign Date</th>
                                    <th>Action</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </ContractInfoStyles>
    );
}
export default ContractInfo;
