import styled, { keyframes, css } from 'styled-components';
import { IAnimate, ISelectStyles } from '../models/login';
const rotateUp = keyframes`
  to {
    transform: rotate(180deg);
  }
`;

const rotateDown = keyframes`
    from {
        transform: rotate(180deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const IconStyles = styled.i<IAnimate>`
    padding: 12px;
    cursor: pointer;
    ${({ animate }) => {
        return animate
            ? css`
                  animation: ${rotateUp} 0.2s linear forwards;
              `
            : css`
                  animation: ${rotateDown} 0.2s linear forwards;
              `;
    }}
`;

export const SelectStyles = styled.div<ISelectStyles>`
    ${(props) =>
        props.line
            ? css`
                  display: flex;
                  margin: 20px 0;
                  .p-label {
                      width: 162px;
                  }
              `
            : ''};
    .p-label {
        display: block;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 4px;
        margin-top: 10px;
    }
    .selectOption {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 276px;
        height: 48px;
        background-color: ${(props) => (props.errormessage ? 'rgb(255, 239, 239)' : props.theme.colorInput)};
        border: ${(props) => (props.errormessage ? '1px solid rgb(243, 174, 175)' : 'none')};
        border-radius: 6px;
        cursor: pointer;
        p {
            font-size: 16px;
            letter-spacing: -0.01em;
            font-weight: 400;
            color: rgb(104, 112, 118);
            margin-left: 12px;
        }
    }
    .options {
        background-color: ${(props) => props.theme.colorInput};
        width: 276px;
        /* height: 100px; */
        margin-top: 4px;
        border-radius: 6px;
        display: ${(props) => (props.hiddenoption ? 'none' : 'flex')};
        grid-template-columns: auto;
        gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: absolute;
        div {
            width: 250px;
            height: 40px;
            display: flex;
            align-items: center;
            border-radius: 6px;

            &:hover {
                background-color: rgb(233, 249, 238);
                color: rgb(48, 164, 108);
            }
            p {
                margin-left: 20px;
            }
        }
    }
    .error-message {
        font-size: 12px;
        color: red;
    }
`;
