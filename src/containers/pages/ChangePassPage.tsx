import React from 'react';
import styled from 'styled-components';
import ChangePassForm from '../components/ChangePassForm';

import { HeaderForm } from '../common/headerForm';

const ChangePassPageStyles = styled.div`
    background-color: ${(props) => props.theme.backgroundColorMain};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function ChangePassPage(): JSX.Element {
    return (
        <ChangePassPageStyles>
            <HeaderForm title="Sign In"></HeaderForm>
            <ChangePassForm></ChangePassForm>
        </ChangePassPageStyles>
    );
}

export default ChangePassPage;
