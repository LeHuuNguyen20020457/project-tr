import styled from 'styled-components';

export const CreateOrUpdatePageStyles = styled.div`
    .title-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
            font-weight: 600;
            line-height: 1.19444;
            font-size: 36px;
            letter-spacing: -0.03em;
            color: ${(props) => props.theme.typographyH3};
        }

        .btn-add {
            width: 78px;
            height: 48px;
            background: #c1c8cd;
            border-radius: 6px;
            flex: none;
            order: 1;
            flex-grow: 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            text-align: center;
            letter-spacing: -0.01em;
            color: ${(props) => props.theme.colorInput};
            border: none;
            cursor: pointer;
        }
        .btnAddBlue {
            background: blue;
        }
        .btn-save-change {
            font-weight: 400;
            line-height: 1.71429;
            padding: 8px 22px;
            color: rgb(251, 253, 255);
            background-color: rgb(0, 145, 255);
            border-radius: 6px;
            height: 48px;
            font-size: 16px;
            border: none;
            cursor: pointer;
        }
    }
    .btn-container {
        display: flex;
        gap: 6px;
        margin-top: 23px;
        button {
            width: 180px;
            height: 42px;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            font-weight: 400;
            line-height: 1.71429;
            font-size: 14px;
        }

        .btn-red {
            color: rgb(255, 239, 239);
            background-color: rgb(229, 72, 77);
        }
        .btn-light-red {
            color: rgb(229, 72, 77);
            background-color: rgb(255, 239, 239);
        }
        .btn-light-blue {
            background-color: rgb(237, 246, 255);
            color: rgb(0, 145, 255);
        }
        .btn-blue {
            background-color: rgb(0, 129, 241);
            color: white;
        }
    }
`;
