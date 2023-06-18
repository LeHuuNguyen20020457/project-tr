import { styled } from 'styled-components';
export const EmploymentDetailsStyles = styled.div`
    display: grid;
    gap: 10px;
    .input-checkbox {
        display: flex;
        width: 300px;
        justify-content: left;
        align-items: center;
        gap: 10px;
        .input-checkbox-1 {
            padding: 0px;
            width: 20px;
            height: 20px;
            border: 1px solid #dfe3e6;
            border-radius: 4px;
            accent-color: #30a46c;
        }
        .input-checkbox-2 {
            padding: 0px;
            width: 20px;
            height: 20px;
            border: 1px solid #dfe3e6;
            border-radius: 4px;

            accent-color: rgba(193, 200, 205, 0.8);
        }
    }
`;
