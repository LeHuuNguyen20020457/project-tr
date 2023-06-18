import React, { useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { IDataEmployee, IEmployeeRedux } from '../../models/employee';
import { Spinner } from '../common/spinner';
import { useDispatch, useSelector } from 'react-redux';
import { TableStyles } from '../../style/TableStyles';
import { getEmployeeId, setEmployeeId } from '../../redux/reduxglobal/globalSlice';

type IPropsTable<T> = {
    EmployeeList: T[];
    disabled: number;
    setDisabled: React.Dispatch<React.SetStateAction<number>>;
    checkedList: number[];
    setCheckedList: React.Dispatch<React.SetStateAction<number[]>>;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function Table<T extends IDataEmployee>({
    EmployeeList,
    disabled,
    setDisabled,
    checkedList,
    setCheckedList,
}: IPropsTable<T> & { children?: React.ReactNode }): React.ReactElement {
    const [toggleIconCheck, setToggleIconCheck] = React.useState<number>(0);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            for (let i = 0; i < EmployeeList.length; i++) {
                checkedList.push(EmployeeList[i].id);
            }
            setCheckedList([...checkedList]);
        } else {
            setCheckedList([]);
        }
    };

    const handleSelectEmployee = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            checkedList.push(+event.target.value);
            setCheckedList([...checkedList]);
        } else {
            setCheckedList(checkedList.filter((id) => id !== +event.target.value));
        }
    };

    const handleCancelCheck = (event: React.MouseEvent<HTMLDivElement>) => {
        setCheckedList(checkedList.filter((id) => id !== Number(event.currentTarget.getAttribute('data-id'))));
    };

    const handleCancelAllCheck = (event: React.MouseEvent<HTMLDivElement>) => {
        setCheckedList([]);
    };

    const handleCheckAll = (event: React.MouseEvent<HTMLDivElement>) => {
        const checkAll = [];
        for (let i = 0; i < EmployeeList.length; i++) {
            checkAll.push(EmployeeList[i].id);
        }
        setCheckedList(checkAll);
    };

    useEffect(() => {
        if (checkedList.length > 0) {
            setDisabled(0);
        } else {
            setDisabled(1);
        }
        if (checkedList.length === EmployeeList.length && EmployeeList.length !== 0) {
            setToggleIconCheck(2);
        } else if (checkedList.length > 0 && checkedList.length < EmployeeList.length) {
            setToggleIconCheck(1);
        } else {
            setToggleIconCheck(0);
        }
    }, [checkedList]);

    const isLoading = useSelector((state: IEmployeeRedux): boolean => {
        return state.employee.loading;
    });

    // const data = useSelector((state: any) => state.reduxglobal.employeeInfoId);

    const handleUpdateEmployee = (id: number) => {
        dispatch(getEmployeeId(id));
        navigate(`/employee/create-or-update/${id}`);
    };

    return (
        <TableStyles>
            <table>
                <thead>
                    <tr>
                        <th>
                            <span>
                                {toggleIconCheck === 0 ? (
                                    <input type="checkbox" onChange={handleSelectAll} />
                                ) : toggleIconCheck === 1 ? (
                                    <div onClick={handleCheckAll}>
                                        <svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                            focusable="false"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            data-testid="IndeterminateCheckBoxIcon"
                                            style={{ fill: '#30A46C' }}
                                        >
                                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path>
                                        </svg>
                                    </div>
                                ) : (
                                    <div onClick={handleCancelAllCheck}>
                                        <svg
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                            focusable="false"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            data-testid="CheckBoxIcon"
                                            style={{ fill: '#30A46C' }}
                                        >
                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                        </svg>
                                    </div>
                                )}
                            </span>
                        </th>
                        <th>NIK</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Bank Card No.</th>
                        <th>Bank Account No.</th>
                        <th>Family Card No.</th>
                        <th>Marriage Status</th>
                        <th>Mother Name</th>
                        <th>Place of birth</th>
                        <th>Date of birth</th>
                        <th colSpan={2}>Home Address</th>
                        <th>National Card ID No.</th>
                        <th>Date Start</th>
                        <th>First Contract</th>
                        <th>Second Contract</th>
                        <th>End Contract</th>
                        <th>Department</th>
                        <th>Employee Type</th>
                        <th>Salary Rp.</th>
                        <th>Position</th>
                        <th>O/T Paid</th>
                        <th>Meal paid</th>
                        <th>Meal Rp.</th>
                        <th>Grading</th>
                    </tr>
                </thead>

                {isLoading ? (
                    <tbody>
                        <tr>
                            <th colSpan={9}>
                                <div
                                    style={{
                                        height: '460px',
                                        backgroundColor: 'rgb(236, 238, 240, 0.2)',
                                    }}
                                >
                                    <Spinner></Spinner>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                ) : (
                    <tbody>
                        {EmployeeList &&
                            EmployeeList?.map((employee: T, index: number): React.ReactNode => {
                                return (
                                    <tr key={index} onDoubleClick={() => handleUpdateEmployee(employee.id)}>
                                        <th>
                                            <span>
                                                {!checkedList.includes(employee.id) ? (
                                                    <input
                                                        type="checkbox"
                                                        value={employee.id}
                                                        onChange={handleSelectEmployee}
                                                        checked={checkedList?.includes(employee.id) ? true : false}
                                                    />
                                                ) : (
                                                    <div onClick={handleCancelCheck} data-id={employee.id}>
                                                        <svg
                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                                            focusable="false"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            data-testid="CheckBoxIcon"
                                                            style={{ fill: '#30A46C' }}
                                                        >
                                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                        </svg>
                                                    </div>
                                                )}
                                            </span>
                                        </th>
                                        <th>{employee.staff_id}</th>
                                        <th>{employee.name}</th>
                                        <th>{employee.gender}</th>
                                        <th>{employee.card_number}</th>
                                        <th>{employee.bank_account_no}</th>
                                        <th>{employee.family_card_number}</th>
                                        <th>{employee.marriage_code}</th>
                                        <th>{employee.mother_name}</th>
                                        <th>{employee.pob}</th>
                                        <th>{employee.dob}</th>
                                        <th>{employee.home_address_1}</th>
                                        <th>{employee.home_address_2}</th>
                                        <th>{employee.nc_id}</th>
                                        <th>{employee.contract_start_date}</th>
                                        <th>{employee.contracts?.[0]?.contract_date}</th>
                                        <th>{employee.contracts?.[1]?.contract_date}</th>
                                        <th>{employee.contracts?.[2]?.contract_date}</th>
                                        <th>{employee.department_name}</th>
                                        <th>{employee.type}</th>
                                        <th>{employee.basic_salary}</th>
                                        <th>{employee.position_id}</th>
                                        <th>{employee.entitle_ot}</th>
                                        <th>{employee.meal_allowance_paid}</th>
                                        <th>{employee.meal_allowance}</th>
                                        <th>{employee.grade_name}</th>
                                    </tr>
                                );
                            })}
                    </tbody>
                )}
            </table>
        </TableStyles>
    );
}

export default React.memo(Table);
