import { call, put, select } from 'redux-saga/effects';

import { requestDeleteMultipleEmployees, requestGetEmployees } from './request';
import { AxiosResponse } from 'axios';
import { setEmpoloyeeList, setLoading } from './employeeSlice';

export const handleSetEmployees = function* (): Generator<any, void, AxiosResponse> {
    try {
        console.log(4);
        const response: AxiosResponse = yield call(requestGetEmployees);
        yield put(setEmpoloyeeList(response.data.data.data));
        yield put(setLoading(false));
    } catch (err) {
        console.log(err);
    }
};

export const handleDeleteMultipleEmployees = function* (action: any): Generator<any, void, AxiosResponse> {
    try {
        console.log(4);
        const deleteArr: number[] = action.payload[0] as number[];
        const response: AxiosResponse = yield call(() => requestDeleteMultipleEmployees(deleteArr));
        const data: AxiosResponse = yield call(requestGetEmployees);
        yield put(setEmpoloyeeList(data.data.data.data));
        yield put(setLoading(false));
    } catch (err) {
        console.log(err);
    }
};
