import React from 'react';
import axios from 'axios';
import { UserContext } from '.';
import { API_URL } from '../../constrants/config';
import { ACCESS_TOKEN } from '../../constrants/localstore';

type type = {} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
interface IUserInfo {
    name: string;
    position_name: string;
    staff_id: string;
}

const UserProvider: React.FC<type> = ({ children }) => {
    const [userInfo, setUserInfo] = React.useState<IUserInfo | undefined>(undefined);
    React.useEffect(() => {
        axios({
            method: 'GET',
            baseURL: API_URL,
            url: '/user/detail',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
            },
        })
            .then(function (response) {
                const res = Object.assign(response);
                const dataUser = {
                    name: res.data.data?.employee?.name,
                    position_name: res.data.data?.position_name,
                    staff_id: res.data.data?.employee?.staff_id,
                };
                setUserInfo(dataUser);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>;
};

export default UserProvider;
