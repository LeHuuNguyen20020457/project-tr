import { takeLatest } from 'redux-saga/effects';
import { getEmployeeId } from './globalSlice';
import { handleGetEmployeeId } from './handlers';

export default function* setEmployeeSagaId() {
    yield takeLatest(getEmployeeId.type, handleGetEmployeeId);
}
