import * as React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Routes,
    Navigate,
    BrowserRouter,
    Router,
} from 'react-router-dom';
import Login from '../screens/login';
import ForgotPass from '../screens/forgotPass';
import ChangePass from '../screens/changePass';
import Root from '../screens/root';
import Employee from '../screens/employee';
import CreateOrUpdate from '../screens/createOrUpdate';
import { ACCESS_TOKEN } from '../constrants/localstore';

const isLogin = localStorage.getItem(ACCESS_TOKEN) ? true : false;

export const RouterConfig = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/auth/sign-in" element={<Login />} />
            <Route path="/auth/forgot-password" element={<ForgotPass />} />
            <Route path="/change-password-first-login" element={<ChangePass />} />
            {isLogin ? (
                <Route path="/" element={<Navigate to="/employee" replace />} />
            ) : (
                <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
            )}
            <Route path="/" element={<Root />}>
                <Route path="/employee" element={<Employee />} />
                <Route path="/employee/create-or-update" element={<CreateOrUpdate />} />
                <Route path="/employee/create-or-update/:id" element={<CreateOrUpdate />} />
            </Route>
        </Route>,
    ),
);
