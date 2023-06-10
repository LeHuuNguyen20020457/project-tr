import { combineReducers } from '@reduxjs/toolkit';
import employeeSlice from './employee/employeeSlice';

export const reducer = combineReducers({
    employee: employeeSlice,
});
