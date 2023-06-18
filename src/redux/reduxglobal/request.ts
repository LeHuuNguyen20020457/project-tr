import axios from 'axios';
import { API_URL } from '../../constrants/config';
import { ACCESS_TOKEN } from '../../constrants/localstore';

export const requestGetEmployeesId = (id: number) => {
    return axios({
        method: 'GET',
        baseURL: API_URL,
        url: `/employee/${id}`,
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
        },
    });
};
