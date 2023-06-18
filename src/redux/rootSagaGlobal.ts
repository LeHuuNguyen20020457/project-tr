import { all, fork } from 'redux-saga/effects';
import setEmployeeSagaId from './reduxglobal/saga';

export default function* rootSagaGlobal() {
    yield all([fork(setEmployeeSagaId)]);
}
