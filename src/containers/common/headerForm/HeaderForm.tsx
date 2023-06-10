import React from 'react';
import styled from 'styled-components';

const HeaderFormStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 100px;
        height: 100px;
        margin-top: 50px;
    }
    h3 {
        font-size: 36px;
        font-weight: 500px;
        margin-bottom: 20px;
    }
`;

function HeaderForm({ title }: { title: string }) {
    return (
        <HeaderFormStyles>
            <img
                src="http://web-qa.hrm.div4.pgtest.co/static/media/HR_Logo.99af50016f31f424a3f3a2330f173a06.svg"
                alt=""
            />
            <h3>HR Management System</h3>
            <h3>{title}</h3>
        </HeaderFormStyles>
    );
}

export default HeaderForm;
