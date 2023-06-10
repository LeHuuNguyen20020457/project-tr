import React from 'react';
import styled from 'styled-components';
import { HeaderForm } from '../common/headerForm';
import ForgotPasswordForm from '../components/ForgotPassForm';

const ForgotPasswordPageStyles = styled.div`
    background-color: ${(props) => props.theme.backgroundColorMain};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ForgotPasswordPage = () => {
    return (
        <ForgotPasswordPageStyles>
            <HeaderForm title="Forgot password"></HeaderForm>
            <ForgotPasswordForm></ForgotPasswordForm>
        </ForgotPasswordPageStyles>
    );
};

export default ForgotPasswordPage;
