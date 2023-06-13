import React, { ChangeEvent } from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import styled from 'styled-components';
import { matchSorter } from 'match-sorter';
import { useSelector, useDispatch } from 'react-redux';

import { IBreadcrumbItem, IDataEmployee, IEmployeeRedux } from '../../models/employee';
import ListEmployee from '../components/ListEmployee';
import { setEmpoloyeeList } from '../../screens/employee/redux/employee/employeeSlice';

const EmployeePageStyles = styled.div`
    .title-search {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        h3 {
            font-weight: 600;
            line-height: 1.19444;
            font-size: 36px;
            letter-spacing: -0.03em;
            color: ${(props) => props.theme.typographyH3};
        }
        .input-search {
            display: flex;
            border: 1px solid #dfe3e6;
            border-radius: 8px;
            input {
                outline: none;
                border-color: transparent;
                width: 144px;
                padding: 8px 0;
                padding-right: 14px;
            }

            .search-icon {
                height: 40px;
                width: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #fff;
                font-weight: 400;
            }
        }
    }
`;

function EmployeePage() {
    const breadcrumbItems: IBreadcrumbItem[] = [{ label: 'General' }, { label: 'Employee Management', active: true }];
    const dispatch = useDispatch();

    let count = React.useRef<number>(0);
    const EmployeeListCopy = React.useRef<IDataEmployee[]>([]);

    const EmployeeList = useSelector((state: IEmployeeRedux): IDataEmployee[] => {
        return state.employee.data;
    });

    React.useMemo(() => {
        if (EmployeeList && count.current === 1) {
            console.log(count.current);
            count.current = count.current + 1;
            EmployeeListCopy.current = EmployeeList;
        } else {
            count.current = count.current + 1;
        }
    }, [count.current]);

    const handleSearchEmployee = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            const nameArr: string[] = [];
            for (let i = 0; i < EmployeeListCopy.current.length; i++) {
                nameArr.push(EmployeeListCopy.current[i].name);
            }
            const nameSearch = matchSorter(nameArr, e.target.value);
            const employeeArr = EmployeeListCopy.current.filter((item) => nameSearch.includes(item.name));
            dispatch(setEmpoloyeeList(employeeArr));
        } else {
            dispatch(setEmpoloyeeList(EmployeeListCopy.current));
        }
    };

    return (
        <EmployeePageStyles>
            <Breadcrumb items={breadcrumbItems}></Breadcrumb>
            <div className="title-search">
                <h3>Employee Management</h3>
                <div className="input-search">
                    <div className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input type="text" placeholder="Search..." onChange={handleSearchEmployee} />
                </div>
            </div>
            <div>
                <ListEmployee></ListEmployee>
            </div>
        </EmployeePageStyles>
    );
}

export default EmployeePage;
