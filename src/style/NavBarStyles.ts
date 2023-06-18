import styled from 'styled-components';
export const NavBarStyles = styled.div`
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    .container {
        padding: 0 24px;
        width: 328px;
        height: 100%;
    }
    .general-container {
        border-bottom: 1px solid #dfe3e6;
        width: 280px;

        .general-title {
            font-size: 24px;
            font-weight: 600;
            line-height: 1.5;
            letter-spacing: -0.03em;
            color: rgb(0, 106, 220);
            margin-top: 30px;
            margin-bottom: 10px;
        }
    }
    .menu-item {
        display: flex;
        align-items: center;
        width: 280px;
        height: 52px;
        margin: 10px 0;
        cursor: pointer;
        border-radius: 6px;

        .menu-item--icon {
            width: 36px;
            height: 36px;
            background-color: ${(props) => props.theme.colorInput};
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            margin-left: 10px;
        }
        .menu-item--title {
            line-height: 1.5;
            font-size: 16px;
            letter-spacing: -0.01em;
            font-weight: 500;
            margin-left: 10px;
        }
    }
    .advance-container {
        .avance-titile {
            font-weight: 600;
            line-height: 1.375;
            font-size: 24px;
            letter-spacing: -0.03em;
            text-transform: capitalize;
            margin-top: 10px;
        }
    }
`;
