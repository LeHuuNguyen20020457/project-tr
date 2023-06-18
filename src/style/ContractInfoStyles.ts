import styled, { css } from 'styled-components';
interface IContractInfoStyles {
    errorcontractdate: number;
    errorcontractname: number;
}

export const ContractInfoStyles = styled.div<IContractInfoStyles>`
    .title-span {
        height: 28px;
        height: 28px;
        width: 100%;
        display: block;
        background: #f1f3f5;
        border-radius: 12px 12px 0px 0px;
        font-weight: 600;
        font-size: 12px;
        line-height: 27px;
        color: #11181c;
        p {
            margin-left: 20px;
        }
    }
    .attention-p {
        font-weight: 400;
        color: rgb(104, 112, 118);
        padding: 10px 20px;
    }
    .body-contract {
        display: flex;
        .upload-file {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0px 16px 0px 6px;
            gap: 10px;

            width: 195px;
            height: 48px;

            background: #edf6ff;
            border: 1px dashed #0091ff;
            border-radius: 6px;

            flex: none;
            order: 0;
            flex-grow: 1;
            color: #0091ff;
            cursor: pointer;
            span {
                display: flex;
                align-items: center;
                gap: 10px;
            }
        }
        .file-uploaded-container {
            margin-top: 20px;
            .name-file {
                width: 195px;
                height: 30px;
                background: #f1f3f5;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            .up-loading {
                width: 195px;
                height: 4px;
                background-color: green;
            }
        }

        .table-container {
            margin-left: 70px;
            margin-top: 20px;
            width: 644px;
            height: 255px;
            overflow-x: hidden;
            overflow-y: hidden;

            .action-container {
                display: flex;
                justify-content: center;
                gap: 10;
                .action-download {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 4px 10px;
                    gap: 10px;

                    width: 121px;
                    height: 24px;

                    background: #e9f9ee;
                    border-radius: 6px;
                    color: green;
                    cursor: pointer;
                }
                .action-delete {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 4px 10px;
                    gap: 4px;

                    width: 84px;
                    height: 24px;

                    background: #ffefef;
                    border-radius: 6px;
                    color: red;
                    cursor: pointer;
                }
            }

            thead {
                position: sticky;
                top: 0;
                z-index: 20;
            }

            thead tr {
                line-height: 1.5rem;
                font-size: 14px;
                font-weight: 600;
                vertical-align: inherit;
                text-align: left;
                color: rgb(17, 24, 28);
                background-color: rgb(236, 238, 240) !important;
            }
            tbody tr {
                color: inherit;
                display: table-row;
                vertical-align: middle;
                outline: 0px;
                background-color: rgb(248, 249, 250);
                opacity: 1;
                text-align: left;
            }

            thead th {
                line-height: 1.5rem;
                font-size: 14px;
            }
            tbody th {
                line-height: 1.5;
                font-size: 12px;
                font-weight: 400;
            }

            th,
            td {
                padding: 3px 10px !important;
                height: 32px !important;
            }
            thead th:nth-child(1),
            tbody th:nth-child(1) {
                min-width: 51px;
                text-align: center;
            }
            thead th:nth-child(2),
            tbody th:nth-child(2) {
                min-width: 150px;
                text-align: center;
            }
            thead th:nth-child(3),
            tbody th:nth-child(3) {
                min-width: 150px;
                text-align: center;
            }
            thead th:nth-child(4),
            tbody th:nth-child(4) {
                min-width: 294px;
                text-align: center;
            }
        }

        .contract-date-input {
            ${(props) =>
                props.errorcontractdate &&
                css`
                    input {
                        border: 1px solid red;
                        background-color: #ffefef;
                    }
                `};
        }
        .contract-name-input {
            ${(props) =>
                props.errorcontractname &&
                css`
                    input {
                        border: 1px solid red;
                        background-color: #ffefef;
                    }
                `};
        }
    }
`;
