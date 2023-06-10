import React from 'react';
import { Provider } from 'react-redux';
import EmployeePage from '../../../containers/pages/EmployeePage';
import store from '../redux/configureStore';

function EmployeeScreen() {
    return (
        <Provider store={store}>
            <div>
                <EmployeePage></EmployeePage>
            </div>
        </Provider>
    );
}
export default EmployeeScreen;
