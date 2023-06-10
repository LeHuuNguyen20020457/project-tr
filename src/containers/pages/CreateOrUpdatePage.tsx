import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import { IBreadcrumbItem } from '../../models/employee';
import DynamicTab from '../common/dynamicTab/DynamicTab';

const CreateOrUpdatePageStyles = styled.div`
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

        button {
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
        }
    }
`;

function CreateOrUpdatePage() {
    const breadcrumbItems: IBreadcrumbItem[] = [
        { label: 'General' },
        { label: 'Employee Management', link: '/employee' },
        { label: 'Add new employee', active: true },
    ];
    return (
        <CreateOrUpdatePageStyles>
            <Breadcrumb items={breadcrumbItems}></Breadcrumb>
            <div className="title-button">
                <h3>Employee Management</h3>
                <button>Add</button>
            </div>
            <div className="btn-container">
                <button>Employee Infomation</button>
                <button>Contract Infomation</button>
                <button>Employment Details</button>
                <button>Salary & Wages</button>
                <button>Other</button>
            </div>
            <DynamicTab></DynamicTab>
        </CreateOrUpdatePageStyles>
    );
}

export default CreateOrUpdatePage;
