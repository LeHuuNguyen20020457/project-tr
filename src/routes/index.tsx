import * as React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Login from '../screens/login';
import ForgotPass from '../screens/forgotPass';
import ChangePass from '../screens/changePass';
import Root from '../screens/root';
import Employee from '../screens/employee';
import CreateOrUpdate from '../screens/createOrUpdate';

export const RouterConfig = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/auth/sign-in" element={<Login />}></Route>
            <Route path="/auth/forgot-password" element={<ForgotPass />}></Route>
            <Route path="/change-password-first-login" element={<ChangePass />}></Route>
            <Route path="/" element={<Root />}>
                <Route path="/employee" element={<Employee />}></Route>
                <Route path="/employee/create-or-update" element={<CreateOrUpdate />}></Route>
            </Route>
        </Route>,
    ),
);
