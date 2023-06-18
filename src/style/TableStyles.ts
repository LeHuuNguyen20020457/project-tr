import styled from 'styled-components';
export const TableStyles = styled.div`
    width: 1035px;
    height: 525px;
    overflow-x: scroll;
    overflow-y: scroll;
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
        min-width: 36px;
        text-align: center;
    }
    thead th:nth-child(2),
    tbody th:nth-child(2) {
        min-width: 95px;
    }
    thead th:nth-child(3),
    tbody th:nth-child(3) {
        min-width: 150px;
    }
    thead th:nth-child(4),
    tbody th:nth-child(4) {
        min-width: 70px;
    }
    thead th:nth-child(5),
    tbody th:nth-child(5) {
        min-width: 130px;
    }
    thead th:nth-child(6),
    tbody th:nth-child(6) {
        min-width: 150px;
    }
    thead th:nth-child(7),
    tbody th:nth-child(7) {
        min-width: 150px;
    }
    thead th:nth-child(8),
    tbody th:nth-child(8) {
        min-width: 130px;
    }
    thead th:nth-child(9),
    tbody th:nth-child(9) {
        min-width: 150px;
    }
    thead th:nth-child(10),
    tbody th:nth-child(10) {
        min-width: 115px;
    }
    thead th:nth-child(11),
    tbody th:nth-child(11) {
        min-width: 115px;
    }
    thead th:nth-child(12) {
        min-width: 700px;
        text-align: center;
    }
    tbody th:nth-child(12) {
        min-width: 350px;
    }
    tbody th:nth-child(13) {
        min-width: 350px;
    }
    thead th:nth-child(13) {
        min-width: 170px;
    }

    thead th:nth-child(14) {
        min-width: 90px;
    }
    thead th:nth-child(15) {
        min-width: 150px;
    }
    thead th:nth-child(16) {
        min-width: 150px;
    }
    thead th:nth-child(17) {
        min-width: 110px;
    }
    thead th:nth-child(18) {
        min-width: 150px;
    }
    thead th:nth-child(19) {
        min-width: 150px;
    }
    thead th:nth-child(20) {
        min-width: 90px;
    }
    thead th:nth-child(21) {
        min-width: 150px;
    }
    thead th:nth-child(22) {
        min-width: 80px;
    }
    thead th:nth-child(23) {
        min-width: 90px;
    }
    thead th:nth-child(24) {
        min-width: 80px;
    }
    thead th:nth-child(25) {
        min-width: 80px;
    }

    table {
        th {
            input[type='checkbox'] {
                cursor: pointer;

                width: 12px;
                height: 12px;

                z-index: 10;
            }
        }
        svg {
            path {
                width: 50px;
                height: 50px;
            }
        }
    }
`;
