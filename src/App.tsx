import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { RouterConfig } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    return (
        <>
            <RouterProvider router={RouterConfig} />
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
