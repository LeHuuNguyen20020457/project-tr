import { all, fork } from 'redux-saga/effects';
import rootSagaGlobal from './rootSagaGlobal';
import rootSaga from '../screens/employee/redux/rootSaga';

export function* rootSagaAll() {
    yield all([
        fork(rootSagaGlobal),
        fork(rootSaga),
        // Thêm các rootSaga khác nếu cần
    ]);
}
