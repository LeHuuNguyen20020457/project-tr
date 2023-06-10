import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import LoginForm from '../components/LoginForm';
import { HeaderForm } from '../common/headerForm';

const LoginPageStyles = styled.div`
    background-color: ${(props) => props.theme.backgroundColorMain};
    height: 110vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function LoginPage(): JSX.Element {
    return (
        <LoginPageStyles>
            <ToastContainer></ToastContainer>
            <HeaderForm title="Sign In"></HeaderForm>
            <LoginForm></LoginForm>
        </LoginPageStyles>
    );
}

export default LoginPage;
