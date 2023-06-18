import styled from 'styled-components';
interface IInputSalaryStyles {
    errormessage: number;
}

export const InputSalaryStyles = styled.div<IInputSalaryStyles>`
    display: flex;
    width: 600px;
    justify-content: space-between;
    .label {
        display: block;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 4px;
        margin-top: 10px;
    }

    .input-container {
        .input-salary {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 8px 12px;
            gap: 10px;
            width: 334px;
            height: 46px;
            background-color: ${(props) => (props.errormessage ? 'rgb(255, 239, 239)' : props.theme.colorInput)};
            border: ${(props) => (props.errormessage ? '1px solid rgb(243, 174, 175)' : 'none')};
            border-radius: 6px;
            .Rp {
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                letter-spacing: -0.01em;
                color: #006adc;
            }
            input {
                width: 280px;
                height: 24px;
                font-family: 'SVN-Sofia Pro';
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 150%;
                letter-spacing: -0.01em;
                color: #11181c;
                border: none;
                margin-left: 14px;
                background-color: ${(props) => (props.errormessage ? 'rgb(255, 239, 239)' : props.theme.colorInput)};
            }
            .down-up {
                text-align: center;
                display: flex;
                height: 100%;
                flex-direction: column;

                > div {
                    width: 10px;
                    height: 10px;
                    gap: 20px;
                    cursor: pointer;
                }
            }
        }
    }

    .error-message {
        font-size: 12px;
        color: red;
    }
`;
