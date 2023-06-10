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
    },
    reducers: {
        getEmployeeList() {
            console.log('getEmployeeList');
        },
        setEmpoloyeeList(state, action) {
            return {
                ...state,
                data: action.payload,
            };
        },
        deleteMultipleEmployees(state, action) {
            console.log('deleteMultipleEmployees ', action.payload);
            return {
                ...state,
                deleteArr: action.payload,
            };
        },
        setLoading(state, action) {
            console.log('setLoading');
            return {
                ...state,
                loading: action.payload,
            };
        },
    },
});

export const { getEmployeeList, setEmpoloyeeList, deleteMultipleEmployees, setLoading } = employeeSlice.actions;
export default employeeSlice.reducer;
