import { type } from 'os';

export interface IBreadcrumbItem {
    label: string;
    link?: string;
    active?: boolean;
}

interface IContracts {
    id: number;
    name: string;
    employee_id: number | null;
    document: string | null;
    contract_date: string;
    created_at: string | null;
    deleted_at: string | null;
    updated_at: string | null;
}

export interface IDataEmployee {
    id: number;
    staff_id: string;
    name: string;
    gender: string | number | null;
    card_number: string | number | null;
    bank_account_no: string | number | null;
    family_card_number: string | number | null;
    marriage_code: string | null;
    mother_name: string | null;
    pob: string | null;
    dob: string | null;
    home_address_1: string | null;
    home_address_2: string | null;
    nc_id: string | null;
    contract_start_date: string | null;
    contracts: IContracts[] | null[];
    department_name: string | null;
    type: string | null;
    basic_salary: number | null;
    position_id: number;
    entitle_ot: number | null;
    meal_allowance_paid: number | null;
    meal_allowance: number | null;
    grade_name: string | null;
}

// export interface IEmployeeRedux {
//     employee: IDataEmployee[];
// }

export interface IEmployeeRedux {
    employee: {
        data: IDataEmployee[];
        deleteArr: number[];
        loading: boolean;
        totalPageCount: number;
    };
}
