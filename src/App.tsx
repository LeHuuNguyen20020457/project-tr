import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { RouterConfig } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={RouterConfig} />
            <ToastContainer></ToastContainer>
        </Provider>
    );
}

export default App;
