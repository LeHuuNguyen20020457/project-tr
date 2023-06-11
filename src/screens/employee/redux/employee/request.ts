import axios from 'axios';
import { API_URL } from '../../../../constrants/config';
import { ACCESS_TOKEN } from '../../../../constrants/localstore';

export const requestGetEmployees = () => {
    return axios({
        method: 'GET',
        baseURL: API_URL,
        url: '/employee',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
        },
    });
};

export const requestDeleteMultipleEmployees = (deleteArr: number[]) => {
    return axios({
        method: 'DELETE',
        baseURL: API_URL,
        url: '/employee/multiple-delete',
        headers: {
            authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
        },
        data: {
            record_ids: deleteArr,
        },
    });
};

export const requestPagination = (currentPage: number) => {
    return axios({
        method: 'GET',
        baseURL: API_URL,
        url: `/employee?page=${currentPage}`,
        headers: {
            authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
        },
    });
};
