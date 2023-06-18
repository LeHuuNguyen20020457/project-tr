import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
    name: 'reduxglobal',
    initialState: {
        employeeInfoId: {},
    },
    reducers: {
        getEmployeeId: (state, action) => {},
        setEmployeeId: (state, action) => {
            return {
                ...state,
                employeeInfoId: action.payload,
            };
        },
    },
});

export const { getEmployeeId, setEmployeeId } = globalSlice.actions;
export default globalSlice.reducer;
