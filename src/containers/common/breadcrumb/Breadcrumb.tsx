import React from 'react';
import { NavLink } from 'react-router-dom';

import { IBreadcrumbItem } from '../../../models/employee';
import { BreadcrumbStyles } from '../../../style/BreadcrumbStyles';

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
