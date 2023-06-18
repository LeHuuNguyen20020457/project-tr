import styled from 'styled-components';
export const OthersStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .container-input-grade {
        display: flex;
        align-items: center;
        width: 600px;
        justify-content: space-between;
        margin-top: 10px;
        .label {
        }
        .input-select {
            position: relative;
        }
        .input-grade {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 8px 12px;
            gap: 10px;

            width: 362px;
            height: 46px;

            background: #f1f3f5;
            border-radius: 6px;

            input {
                background: #f1f3f5;
                border: none;
                width: 360px;
            }
        }
        .grade-selected-item {
            min-width: 100px;
            max-width: 180px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            background-color: #f1f3f5;
            padding: 4px 0;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 400px;
        }
        .grade-selected-container {
            display: flex;
            flex-wrap: wrap;
            max-width: 372px;
            gap: 10px;
            margin-top: 10px;
        }
    }
    .option-grade,
    .option-benefit {
        width: 362px;
        height: 120px;
        position: absolute;
        overflow-y: auto;
        top: 10;
        right: 0;
        background: #f1f3f5;
        border-radius: 6px;
        margin-top: 10px;
        position: absolute;
        z-index: 10;
        .option {
            width: 100%;
            height: 40px;
            display: flex;
            /* justify-content: center; */
            align-items: center;
            text-align: center;
            cursor: pointer;
            &:hover {
                background-color: rgb(233, 249, 238);
            }
            p {
                margin-left: 20px;
                font-size: 16px;
                font-weight: 500;
            }
        }
    }

    /* benefit */
    .container-input-benefit {
        display: flex;
        align-items: center;
        width: 600px;
        justify-content: space-between;
        .input-select {
            position: relative;
            .input-container {
                display: flex;
                background: #f1f3f5;
                border-radius: 6px;
                min-height: 46px;
                .icon {
                    width: 62px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                }
            }
        }
        .input-benefit {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            padding: 8px 12px;
            gap: 10px;

            width: 300px;

            input {
                background: #f1f3f5;
                border: none;
                max-width: 360px;
            }

            .item-select {
                width: 132px;
                color: rgb(0, 145, 255);
                font-size: 14px;
                font-weight: 500;
                display: flex;
                justify-content: space-around;
                align-items: center;
                gap: 10px;
                background-color: #fff;
                border-radius: 6px;
                padding: 4px 0;
            }
        }
    }
    i {
        cursor: pointer;
    }

    .remark-container {
        display: flex;
        justify-content: space-between;
        width: 600px;
        text-align: center;

        textarea {
            border-radius: 6px;
            border: none;
            background-color: ${(props) => props.theme.colorInput};
            line-height: 1.4375em;
            font-size: 16px;
            padding: 8px 12px;
        }
    }

    .HRMUC-container {
        display: flex;
        width: 600px;
        justify-content: space-between;
        align-items: center;
        .input-HRM {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 8px 12px;
            gap: 10px;
            width: 362px;
            height: 46px;
            background: rgba(0, 0, 0, 0.12);
            border-radius: 6px;
            input {
                background: rgba(0, 0, 0, 0.005);
                border: none;
                width: 360px;
            }
        }
    }

    .upload-file-container {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        border-radius: 6px;
        border: 1px solid rgb(223, 227, 230);
        gap: 20px;

        .upload-file-title {
            display: flex;
            width: 100px;
            margin-left: 20px;
            margin-top: 20px;
            .upload-file {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 0px 16px 0px 6px;
                gap: 10px;
                margin-left: 162px;
                width: 120px;
                height: 32px;

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
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 19px;
                }
            }
        }
        .table-container {
            width: 993px;
            height: 225px;
            overflow-y: scroll;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
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
                .download-trash {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                    span {
                        width: 20px;
                        height: 20px;
                    }
                    .icon-download {
                        background: #e9f9ee;
                        color: green;
                        cursor: pointer;
                    }
                    .icon-trash {
                        background: #ffefef;
                        color: red;
                        cursor: pointer;
                    }
                }
            }
            thead th:nth-child(1),
            tbody th:nth-child(1) {
                min-width: 51px;
                text-align: center;
            }
            thead th:nth-child(2),
            tbody th:nth-child(2) {
                min-width: 300px;
                text-align: center;
            }
            thead th:nth-child(3),
            tbody th:nth-child(3) {
                min-width: 300px;
                text-align: center;
            }
            thead th:nth-child(4),
            tbody th:nth-child(4) {
                min-width: 300px;
                text-align: center;
            }
        }
    }
`;
