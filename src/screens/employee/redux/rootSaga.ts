import { all, fork } from 'redux-saga/effects';
import setEmployeeSaga from './employee/saga';

export default function* rootSaga() {
    yield all([fork(setEmployeeSaga)]);
}
