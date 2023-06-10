import { takeLatest } from 'redux-saga/effects';
import { handleSetEmployees, handleDeleteMultipleEmployees } from './handlers';
import { deleteMultipleEmployees, getEmployeeList } from './employeeSlice';

export default function* setEmployeeSaga() {
    console.log(2);
    yield takeLatest(getEmployeeList.type, handleSetEmployees);
    yield takeLatest(deleteMultipleEmployees.type, handleDeleteMultipleEmployees);
}
