import styled from 'styled-components';
export const BreadcrumbStyles = styled.div`
    margin-bottom: 10px;
    .breadcrumb {
        color: rgb(104, 112, 118);
        line-height: 1.35714;
        font-size: 14px;
        font-weight: 500;
        display: inline-block;
    }

    .breadcrumb-item {
        display: inline-block;
    }

    .breadcrumb-item a {
        text-decoration: none;
    }

    .breadcrumb-item.active {
        color: rgb(17, 24, 28);
    }
    .iconMore {
        margin: 0 10px;
        display: inline-block;
    }
`;
