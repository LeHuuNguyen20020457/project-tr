import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import { Dialog } from '../common/dialog';

function RootLayout() {
    return (
        <div style={{ position: 'relative' }}>
            <Header></Header>
            <NavBar></NavBar>
            <div
                style={{
                    position: 'absolute',
                    top: '60px',
                    left: '328px',
                    right: '0',
                    backgroundColor: '#F8F9FA',
                    height: '900px',
                }}
            >
                <div style={{ marginLeft: '46px', marginTop: '30px', marginRight: '46px' }}>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}

export default RootLayout;
