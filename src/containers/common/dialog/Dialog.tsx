import React from 'react';

import { Button } from '../button';
import { DialogStyles } from '../../../style/DialogStyles';

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
