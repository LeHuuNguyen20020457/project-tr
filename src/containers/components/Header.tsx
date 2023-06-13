import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Button } from '../common/button';
import { Dialog } from '../common/dialog';
import { API_URL } from '../../constrants/config';
import { ACCESS_TOKEN } from '../../constrants/localstore';

const HeaderStyles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    box-shadow: 0px 3px 15px #eceef0;
    z-index: 30;
    position: fixed;
    background-color: #fff;
    .logo-title {
        display: flex;
        img {
            width: 36px;
            height: 36px;
            margin: 12px 16px 12px 32px;
        }
        h4 {
            font-weight: 500;
            font-size: 24px;
            line-height: 1.5;
            color: ${(props) => props.theme.colorText1};
            margin: 12px 0;
        }
    }

    .language-avatar {
        display: flex;
    }
    .language-select {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 12px;
        margin-right: 20px;
        gap: 10px;
        width: 98px;
        height: 32px;
        border-radius: 6px;
        background-color: ${(props) => props.theme.colorInput};
        cursor: pointer;

        img {
            width: 19.5px;
            height: 12px;
        }

        span {
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: ${(props) => props.theme.colorText1};
        }
        i {
            font-size: 12px;
            color: ${(props) => props.theme.colorText1};
        }
    }
    .avatar {
        margin-right: 30px;
        width: 32px;
        height: 32px;
        background-color: yellow;
        border-radius: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        div {
            width: 15px;
            height: 16px;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 16px;
            color: #fbfdff;
        }
    }

    .block-info {
        position: absolute;
        right: 20px;
        top: 52px;
        border: 1px solid rgb(223, 227, 230);
        box-shadow: rgb(236, 238, 240) 0px 5px 15px;
        z-index: 3;
        background-color: #fff;
        border-radius: 6px;
        padding: 24px;
        .avatar-name {
            display: flex;
            font-weight: 600;
            line-height: 1.375;
            font-size: 24px;
        }
        .user-role {
            height: 24px;
            border-radius: 16px;
            width: fit-content;
            text-align: center;
            background-color: rgb(245, 242, 255);
            color: rgb(110, 86, 207);
            padding: 0 6px;
            margin-top: 12px;
            margin-bottom: 24px;
            span {
                font-size: 0.8125rem;
            }
        }

        .info-id {
            p {
                padding-bottom: 12px;
            }
        }
    }
`;

const NavLinkStyles = styled.div`
    color: blue;
    width: 276px;
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

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
