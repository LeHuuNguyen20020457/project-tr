import { call, put, select } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';
import { requestGetEmployeesId } from './request';
import { setEmployeeId } from './globalSlice';

export const handleGetEmployeeId = function* (action: any): Generator<any, void, AxiosResponse> {
    try {
        const id: number = action.payload as number;
        const response: AxiosResponse = yield call(() => requestGetEmployeesId(id));
        yield put(setEmployeeId(response.data.data));
    } catch (err) {
        console.log(err);
    }
};
