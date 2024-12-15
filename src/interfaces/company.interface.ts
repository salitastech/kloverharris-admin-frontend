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
