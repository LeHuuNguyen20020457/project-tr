export interface ICreateOrUpdate {
    name: string;
    gender: number;
    mother_name: string;
    dob: string;
    pob: string;
    ktp_no: number;
    nc_id: number;
    home_address_1: string;
    home_address_2: string;
    mobile_no: number;
    tel_no: number;
    marriage_id: number;
    card_number: number;
    bank_account_no: number;
    bank_name: string;
    family_card_number: number;
    safety_insurance_no: number;
    health_insurance_no: number;
    contract_start_date: string;
    type: number;
    contracts: IContracts[];
    department_id: number;
    position_id: number;
}

interface IContracts {
    action?: 'add';
    contract_date?: string;
    document?: string;
    document_file?: object[];
    employee_id?: number;
    id?: number;
    name?: string;
}
