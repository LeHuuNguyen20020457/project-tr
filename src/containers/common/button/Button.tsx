import React from 'react';
import styled from 'styled-components';

type CSSButton = {
    width: string;
    backgroundcolor?: string;
    color?: string;
};
const ButtonStyles = styled.div<CSSButton>`
    button {
        background-color: ${(props) => props.backgroundcolor || props.theme.colorButronSub};
        color: ${(props) => (props.color ? '#333' : '#fff')};
        border: none;
        width: ${(props) => props.width};
        height: 48px;
        border-radius: 6px;
        margin-top: 26px;
        cursor: pointer;
    }
`;

type ButtonType = {
    title: string;
    width: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    backgroundcolor?: string;
    color?: string;
};

const Button = ({ title, width, type, backgroundcolor, color }: ButtonType) => {
    return (
        <ButtonStyles width={width} backgroundcolor={backgroundcolor} color={color}>
            <button type={type}>{title}</button>
        </ButtonStyles>
    );
};

export default Button;
