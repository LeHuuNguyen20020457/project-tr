import React, { ChangeEvent, useEffect } from 'react';
import { Control, FieldErrors, FieldValues, UseFormRegister, Path, UseFormGetValues } from 'react-hook-form';

import { IContractNameAndDate, ICreateOrUpdate } from '../../models/createOrUpdate';
import { Input } from '../common/input';
import { Select } from '../common/select';
import { IOptions } from '../../models/login';
import { Button } from '../common/button';
import { ContractInfoStyles } from '../../style/ContractInfoStyles';

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
    addFile: File[];
    setAddFile: React.Dispatch<React.SetStateAction<File[]>>;
    contractNameAndDate: IContractNameAndDate[];
    setContractNameAndDate: React.Dispatch<React.SetStateAction<IContractNameAndDate[]>>;
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

function ContractInfo<T extends FieldValues>({
    control,
    errors,
    setValue,
    register,
    getValues,
    addFile,
    setAddFile,
    contractNameAndDate,
    setContractNameAndDate,
}: IPersonalInfo<T>) {
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const [errorcontractdate, seterrorcontractdate] = React.useState<number>(0);
    const [errorcontractname, seterrorContractname] = React.useState<number>(0);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
            // setSelectedFile(event.target.files);
        }
    };

    const handleAddFile = (event: React.MouseEvent<HTMLDivElement>) => {
        // console.log(getValues('contract_name'));
        if (!getValues('contract_name') && !getValues('contract_date')) {
            seterrorContractname(1);
            seterrorcontractdate(1);
        } else if (!getValues('contract_name')) {
            seterrorContractname(1);
        } else if (!getValues('contract_date')) {
            seterrorcontractdate(1);
        } else {
            if (addFile?.includes(selectedFile as File)) {
                return;
            } else {
                setAddFile([...addFile, selectedFile as File]);
                seterrorContractname(0);
                seterrorcontractdate(0);
                setContractNameAndDate([
                    ...contractNameAndDate,
                    {
                        contract_name: getValues('contract_name'),
                        contract_date: getValues('contract_date'),
                    },
                ]);
                setValue('contract_name', '');
                setValue('contract_date', '');
            }
        }
    };

    // useEffect(() => {
    //     const formData = new FormData();
    //     formData.append('file', selectedFile as File);
    //     console.log(formData);
    // }, [selectedFile]);

    return (
        <ContractInfoStyles errorcontractdate={errorcontractdate} errorcontractname={errorcontractname}>
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
                            <div className="contract-date-input">
                                <Input
                                    name={'contract_date' as Path<T>}
                                    control={control}
                                    label="Contract Date"
                                    line={1}
                                    width="160px"
                                    type="date"
                                ></Input>
                            </div>
                            <div className="contract-name-input">
                                <Input
                                    name={'contract_name' as Path<T>}
                                    control={control}
                                    label="Contract Name"
                                    line={1}
                                    width="160px"
                                ></Input>
                            </div>
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
                                    <input
                                        type="file"
                                        hidden
                                        accept="image/*,.pdf,.csv,.xlsx,.docx"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>
                            <div onClick={handleAddFile}>
                                <Button
                                    title="Add"
                                    width="195px"
                                    type="button"
                                    backgroundcolor="rgb(105, 217, 193)"
                                ></Button>
                            </div>
                            {selectedFile && (
                                <div className="file-uploaded-container">
                                    <div className="name-file">
                                        <p>{selectedFile.name}</p>
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                    <div className="up-loading"></div>
                                </div>
                            )}
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
                                {addFile &&
                                    addFile.map((file, index) => {
                                        return (
                                            <tr key={index}>
                                                <th>{index + 1}</th>
                                                <th>{contractNameAndDate[index]?.contract_name}</th>
                                                <th>{contractNameAndDate[index]?.contract_date}</th>
                                                <th>
                                                    <div className="action-container">
                                                        <div className="action-download">
                                                            <p>{file?.name}</p>
                                                            <i className="fa-solid fa-download"></i>
                                                        </div>
                                                        <div className="action-delete">
                                                            <p>Delete</p>
                                                            <i className="fa-regular fa-trash-can"></i>
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </ContractInfoStyles>
    );
}
export default ContractInfo;
