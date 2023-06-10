import React from 'react';
import styled from 'styled-components';
import { Button } from '../button';

const DialogStyles = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    .overlay {
        width: 100%;
        height: 100%;
        background: #11181c;
        opacity: 0.25;
    }
    .dialog-container {
        width: 335px;
        height: 168px;
        background: #fff;
        color: #333;
        position: absolute;
        position: fixed;
        top: 30vh;
        left: 40vw;

        box-sizing: border-box;

        /* Auto layout */

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        gap: 37px;
        background: #ffffff;
        border: 1px solid #dfe3e6;
        box-shadow: 0px 5px 15px #eceef0;
        border-radius: 8px;

        .title-close {
            width: 100%;
            display: flex;
            justify-content: space-between;
            i {
                width: 20px;
                height: 20px;
            }
        }
        .btn-no-yes {
            margin-right: 40px;
            width: 100%;
            display: flex;
            gap: 10px;
        }
    }
`;

interface IDialog {
    title: string;
    setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
    enterYes: () => void;
}

const Dialog = ({ title, setShowDialog, enterYes }: IDialog) => {
    const handleCloseDialog = () => {
        setShowDialog(false);
    };
    return (
        <DialogStyles>
            <div className="overlay"></div>
            <div className="dialog-container">
                <div className="title-close">
                    <h4>{title}</h4>
                    <div onClick={handleCloseDialog}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div className="btn-no-yes">
                    <div onClick={handleCloseDialog}>
                        <Button title="No" width="148px" type="button" backgroundcolor="#F1F3F5" color="#fff"></Button>
                    </div>
                    <div
                        onClick={() => {
                            enterYes();
                        }}
                    >
                        <Button title="Yes" width="148px" type="button"></Button>
                    </div>
                </div>
            </div>
        </DialogStyles>
    );
};

export default Dialog;
