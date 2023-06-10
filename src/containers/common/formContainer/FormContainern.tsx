import React from 'react';
import styled from 'styled-components';

const FormContainerStyles = styled.div`
    background-color: ${(props) => props.theme.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 324px;
    padding: 8px 0;
    border-radius: 6px;
`;

type IFormContainer = { children: React.ReactNode } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

const FormContainer = (props: IFormContainer) => {
    return <FormContainerStyles>{props.children}</FormContainerStyles>;
};

export default FormContainer;
