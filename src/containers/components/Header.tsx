import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Button } from '../common/button';
import { Dialog } from '../common/dialog';
import { API_URL } from '../../constrants/config';
import { ACCESS_TOKEN } from '../../constrants/localstore';
import { HeaderStyles, NavLinkStyles } from '../../style/HeaderStyles';

function Header() {
    const [showInfo, setShowInfo] = React.useState<boolean>(false);
    const [showDialog, setShowDialog] = React.useState<boolean>(false);
    const navigate = useNavigate();

    const handleShowInfo = () => {
        setShowInfo(!showInfo);
    };
    const handleSignOut = () => {
        setShowDialog(true);
    };

    const enterYes = () => {
        axios({
            method: 'POST',
            baseURL: API_URL,
            url: '/logout',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
            },
        })
            .then(function (response) {
                localStorage.removeItem(ACCESS_TOKEN);
                navigate('/auth/sign-in');
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <HeaderStyles>
            <div className="logo-title">
                <img
                    src="http://web-qa.hrm.div4.pgtest.co/static/media/HR_Logo.99af50016f31f424a3f3a2330f173a06.svg"
                    alt=""
                />
                <h4>HR Management System</h4>
            </div>
            <div className="language-avatar">
                <div className="language-select">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/2560px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
                        alt=""
                    />
                    <span>EN</span>
                    <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="avatar" onClick={handleShowInfo}>
                    <div>LN</div>
                </div>
            </div>
            <div className="block-info" style={{ display: showInfo ? 'block' : 'none' }}>
                <div className="avatar-name">
                    <div className="avatar">
                        <div>LN</div>
                    </div>
                    <div>Lê Nguyện</div>
                </div>
                <div className="user-role">
                    <span>Developer</span>
                </div>
                <div className="info-id">
                    <p>Research and Development again</p>
                    <p>Staff ID: SP-000429</p>
                </div>
                <div onClick={handleSignOut}>
                    <Button title="Sign Out" width="272px" type="button"></Button>
                </div>
                <NavLinkStyles>
                    <NavLink to={'/change-password-first-login'}>Reset Password</NavLink>
                </NavLinkStyles>
            </div>
            {showDialog && (
                <Dialog title="Do you wish to sign out?" setShowDialog={setShowDialog} enterYes={enterYes}></Dialog>
            )}
        </HeaderStyles>
    );
}

export default Header;
