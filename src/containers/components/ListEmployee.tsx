import axios from 'axios';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
    deleteMultipleEmployees,
    getEmployeeList,
    pagination,
    setLoading,
} from '../../screens/employee/redux/employee/employeeSlice';
import { IDataEmployee, IEmployeeRedux } from '../../models/employee';
import Table from './Table';
import { Dialog } from '../common/dialog';
import { Pagination } from '../common/pagination';
import { ListEmployeeStyles } from '../../style/ListEmployeeStyles';

function ListEmployee() {
    const [checkedList, setCheckedList] = React.useState<number[]>([]);
    const [disabled, setDisabled] = React.useState<number>(1);
    const [showDialog, setShowDialog] = React.useState<boolean>(false);
    const [currentPage, setCurrentPage] = React.useState<number>(1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmployeeList());
    }, [dispatch]);

    const EmployeeList = useSelector((state: IEmployeeRedux): IDataEmployee[] => {
        return state.employee.data;
    });

    const totalPageCount = useSelector((state: IEmployeeRedux): number => {
        return state.employee.totalPageCount;
    });

    const handleDeleteEmployee = () => {
        setShowDialog(true);
    };

    useEffect(() => {
        dispatch(setLoading(true));
        dispatch(pagination(currentPage));
    }, [currentPage]);

    const enterYes = React.useCallback(() => {
        dispatch(setLoading(true));
        dispatch(deleteMultipleEmployees([checkedList]));
        setShowDialog(false);
    }, [checkedList]);
    return (
        <ListEmployeeStyles disabled={disabled}>
            {showDialog && (
                <Dialog
                    title="Are you sure you want to delete?"
                    setShowDialog={setShowDialog}
                    enterYes={enterYes}
                ></Dialog>
            )}
            <div className="header-control">
                <NavLink to={'create-or-update'}>
                    <button className="btn-add">
                        <span>
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg-fill-all"
                                style={{ fill: 'rgb(0, 145, 255)' }}
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V4.70711L9.29289 2H3.5ZM2 2.5C2 1.67157 2.67157 1 3.5 1H9.5C9.63261 1 9.75979 1.05268 9.85355 1.14645L12.7803 4.07322C12.921 4.21388 13 4.40464 13 4.60355V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5ZM4.75 7.5C4.75 7.22386 4.97386 7 5.25 7H7V5.25C7 4.97386 7.22386 4.75 7.5 4.75C7.77614 4.75 8 4.97386 8 5.25V7H9.75C10.0261 7 10.25 7.22386 10.25 7.5C10.25 7.77614 10.0261 8 9.75 8H8V9.75C8 10.0261 7.77614 10.25 7.5 10.25C7.22386 10.25 7 10.0261 7 9.75V8H5.25C4.97386 8 4.75 7.77614 4.75 7.5Z"
                                    fill="rgb(0, 145, 255)"
                                ></path>
                            </svg>
                        </span>
                        <p>Add</p>
                    </button>
                </NavLink>
                <button className="btn-delete" onClick={handleDeleteEmployee}>
                    <span>
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-fill-all"
                            style={{ fill: 'rgb(193, 200, 205)' }}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                                fill={disabled ? 'rgb(193, 200, 205)' : 'rgb(229, 72, 77)'}
                            ></path>
                        </svg>
                    </span>
                    <p>Delete</p>
                </button>
            </div>
            <hr className="line"></hr>
            <Table
                EmployeeList={EmployeeList}
                disabled={disabled}
                setDisabled={setDisabled}
                checkedList={checkedList}
                setCheckedList={setCheckedList}
            />
            <hr className="line"></hr>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalPageCount={totalPageCount}
                onPageChange={(page: number) => setCurrentPage(page)}
            ></Pagination>
        </ListEmployeeStyles>
    );
}

export default ListEmployee;
