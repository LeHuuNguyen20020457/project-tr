import styled from 'styled-components';
interface IListEmployeeStyles {
    disabled: number;
}

export const ListEmployeeStyles = styled.div<IListEmployeeStyles>`
    padding: 10px 10px 20px;
    height: 735px;
    background: #fbfcfd;
    box-shadow: 0px 5px 20px #f1f3f5;
    border-radius: 12px;
    .header-control {
        height: 55px;
        display: flex;
        gap: 4px;
        justify-content: flex-end;
        border-bottom: 1px solid rgba(193, 200, 205, 0.24);
    }
    .line {
        border-width: 0px 0px thin;
        border-style: solid;
        border-color: rgba(193, 200, 205, 0.24);
        margin: 10px 0;
    }

    .btn-add,
    .btn-delete {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 12px;
        gap: 10px;

        width: 90px;
        height: 35px;
        border-radius: 6px;
        border: none;

        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;
        cursor: pointer;

        p {
            font-size: 12px;
            font-weight: 400;
        }
    }

    .btn-add {
        background: #edf6ff;
        color: rgb(0, 145, 255);
    }
    .btn-delete {
        color: ${(props) => (props.disabled ? 'rgb(193, 200, 205)' : 'rgb(229, 72, 77)')};
        background-color: ${(props) => (props.disabled ? '#fbfcfd' : 'rgb(255, 239, 239)')};
    }
`;
