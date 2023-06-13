import React from 'react';

interface IUserInfo {
    name: string;
    position_name: string;
    staff_id: string;
}

export const UserContext = React.createContext<IUserInfo | undefined>(undefined);
