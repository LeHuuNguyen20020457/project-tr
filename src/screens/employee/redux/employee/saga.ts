import { takeLatest } from 'redux-saga/effects';
import { handleSetEmployees, handleDeleteMultipleEmployees, handlePagination } from './handlers';
import { deleteMultipleEmployees, getEmployeeList, pagination } from './employeeSlice';

export default function* setEmployeeSaga() {
    yield takeLatest(getEmployeeList.type, handleSetEmployees);
    yield takeLatest(deleteMultipleEmployees.type, handleDeleteMultipleEmployees);
    yield takeLatest(pagination.type, handlePagination);
}
