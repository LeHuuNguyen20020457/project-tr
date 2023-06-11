import React from 'react';
import styled from 'styled-components';

const DynamicTabStyles = styled.div`
    margin-top: 20px;
    padding: 10px 10px 20px;
    background: #fbfcfd;
    box-shadow: 0px 5px 20px #f1f3f5;
    border-radius: 12px;
    .container-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 47px;
        h5 {
            font-weight: 600;
            font-size: 20px;
            line-height: 27px;
            color: ${(props) => props.theme.colorText1};
        }
        p {
            font-size: 14px;
        }
    }
`;

type IDynamicTab = {
    title: string;
    children: React.ReactNode;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function DynamicTab({ title, children }: IDynamicTab) {
    return (
        <DynamicTabStyles>
            <div className="container-header">
                <h5>{title}</h5>
                <p>
                    Required (<span style={{ color: 'red' }}>*</span>)
                </p>
            </div>
            <hr></hr>
            <div>{children}</div>
        </DynamicTabStyles>
    );
}

export default DynamicTab;
