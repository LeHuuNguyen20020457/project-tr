import { createSlice } from '@reduxjs/toolkit';
import { IDataEmployee } from '../../../../models/employee';

// const initialState: IDataEmployee[] = [
//     {
//         id: 0,
//         staff_id: '',
//         name: '',
//         gender: 0,
//         card_number: '',
//         bank_account_no: '',
//         family_card_number: '',
//         marriage_code: '',
//         mother_name: '',
//         pob: '',
//         dob: '',
//         home_address_1: '',
//         home_address_2: '',
//         nc_id: '',
//         contract_start_date: '',
//         contracts: [],
//         department_name: '',
//         type: '',
//         basic_salary: 0,
//         position_name: '',
//         entitle_ot: 0,
//         meal_allowance_paid: 0,
//         meal_allowance: 0,
//         grade_name: '',
//     },
// ];

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        data: [],
        deleteArr: [],
        loading: true,
        totalPageCount: 0,
    },
    reducers: {
        getEmployeeList() {},
        setEmpoloyeeList(state, action) {
            return {
                ...state,
                data: action.payload,
            };
        },
        deleteMultipleEmployees(state, action) {
            return {
                ...state,
                deleteArr: action.payload,
            };
        },
        setLoading(state, action) {
            return {
                ...state,
                loading: action.payload,
            };
        },
        setTotalPageCount(state, action) {
            return {
                ...state,
                totalPageCount: action.payload,
            };
        },
        pagination(state, action) {},
    },
});

export const { getEmployeeList, setEmpoloyeeList, deleteMultipleEmployees, setLoading, setTotalPageCount, pagination } =
    employeeSlice.actions;
export default employeeSlice.reducer;
