export interface ICompany {
  id: string;
  company_name: string;
  registration_number: string;
  email: string;
  phone_number: string;
  website: string;
  region: string;
  city: string;
  postal_code: string;
  address: string;
  industry: string;
  is_active: number;
  country: ICountry;
  meta: Meta;
}

export interface ICountry {
  id: number;
  iso: string;
  name: string;
  iso3: string;
  numcode: number;
  phonecode: number;
}

export interface Meta {
  created_at: Date;
  last_profile_update: Date;
  total_number_of_employees: number;
}

export enum EmployeeRole {
  Manager = 'Manager',
  Employee = 'Employee',
}
export interface IEmployee {
  id: number;
  user: IEmployeeUser;
  job_title: string;
  department: string;
  role: EmployeeRole;
  hire_date: Date;
  start_date: Date;
  end_date: Date;
  is_active: boolean;
  gender: string;
  marital_status: string;
  address: Address;
  emergency_contact: EmergencyContact;
  resume: any | null;
  leave_days_left: number;
  created_at: Date;
  updated_at: Date;
}

export interface Address {
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  postal_code: string;
}

export interface EmergencyContact {
  name: string;
  phone: string;
  relation: string;
}

export interface IEmployeeUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  uuid: string;
  email_verified_at: Date;
  is_active: number;
  created_at: Date;
  updated_at: Date;
  resume: any | null;
}
