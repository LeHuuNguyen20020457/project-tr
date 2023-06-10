import React from 'react';
import styled from 'styled-components';

const SpinnerSyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .spinner {
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

function Spinner() {
    return (
        <SpinnerSyles>
            <div className="spinner"></div>
        </SpinnerSyles>
    );
}
export default Spinner;
