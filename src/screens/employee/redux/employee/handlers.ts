import { call, put, select } from 'redux-saga/effects';

import { requestDeleteMultipleEmployees, requestGetEmployees, requestPagination } from './request';
import { AxiosResponse } from 'axios';
import { setEmpoloyeeList, setLoading, setTotalPageCount } from './employeeSlice';

export const handleSetEmployees = function* (): Generator<any, void, AxiosResponse> {
    try {
        const response: AxiosResponse = yield call(requestGetEmployees);

        yield put(setEmpoloyeeList(response.data.data.data));
        yield put(setTotalPageCount(response.data.data.last_page));
        yield put(setLoading(false));
    } catch (err) {
        console.log(err);
    }
};

export const handleDeleteMultipleEmployees = function* (action: any): Generator<any, void, AxiosResponse> {
    try {
        const deleteArr: number[] = action.payload[0] as number[];
        const response: AxiosResponse = yield call(() => requestDeleteMultipleEmployees(deleteArr));
        const data: AxiosResponse = yield call(requestGetEmployees);
        yield put(setEmpoloyeeList(data.data.data.data));
        yield put(setTotalPageCount(data.data.data.last_page));
        yield put(setLoading(false));
    } catch (err) {
        console.log(err);
    }
};

export const handlePagination = function* (action: any): Generator<any, void, AxiosResponse> {
    try {
        const currentPage = action.payload as number;

        console.log('currentPage', currentPage);
        const response: AxiosResponse = yield call(() => requestPagination(currentPage));
        yield put(setEmpoloyeeList(response.data.data.data));
        yield put(setLoading(false));
    } catch (err) {
        console.log(err);
    }
};
