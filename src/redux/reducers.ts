import { combineReducers } from '@reduxjs/toolkit';
import globalSlice from './reduxglobal/globalSlice';
import employeeSlice from '../screens/employee/redux/employee/employeeSlice';

export const reducer = combineReducers({
    employee: employeeSlice,
    reduxglobal: globalSlice,
});
