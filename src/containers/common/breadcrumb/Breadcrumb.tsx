import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { IBreadcrumbItem } from '../../../models/employee';

const BreadcrumbStyles = styled.div`
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

const Breadcrumb = ({ items }: { items: IBreadcrumbItem[] }) => {
    return (
        <BreadcrumbStyles>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {items.map((item, index) => (
                        <li key={index} className={`breadcrumb-item${item.active ? ' active' : ''}`}>
                            {item.link ? (
                                <NavLink to={`${item.link}`}>{item.label}</NavLink>
                            ) : (
                                <span>{item.label}</span>
                            )}
                            <p className="iconMore">{index === items.length - 1 ? '' : '>'}</p>
                        </li>
                    ))}
                </ol>
            </nav>
        </BreadcrumbStyles>
    );
};

export default Breadcrumb;
