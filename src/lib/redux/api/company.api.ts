import type { ICompany, IEmployee } from '../../../interfaces';
import Api from './api';

type SortQuery = {
  search?: string;
  sort_by?: string;
  sort_order?: string;
  department?: string;
  gender?: string;
  is_active?: string;
};

type AllEmployeeResponse = {
  employees: Array<IEmployee>;
  meta: {
    total_employees: number;
    active_employees: number;
    inactive_employees: number;
    male_employees: number;
    female_employees: number;
  };
};

export type Pagination = {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
};

const company = Api.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllCompanies: builder.query<
      { pagination: Pagination; data: Array<ICompany> },
      Record<PropertyKey, any> | void
    >({
      query: (queryParams) => ({
        url: `/company-clients`,
        params: queryParams || {},
      }),
      providesTags: [{ type: 'COMPANIES', id: 'LIST' }],
      transformResponse: (res: {
        data: { data: Array<ICompany>; pagination: Pagination };
      }) => ({
        data: res.data?.data,
        pagination: res.data.pagination,
      }),
    }),
    fetchCompanyProfile: builder.query<ICompany, string>({
      query: (id) => `/company-client/profile/${id}`,
      providesTags: (company) => [{ type: 'COMPANIES', id: company?.id }],
      transformResponse: (res: { data: ICompany }) => res.data,
    }),
    fetchCompanyEmployees: builder.query<
      AllEmployeeResponse,
      { id: string } & Partial<SortQuery>
    >({
      query: ({ id: company_id, search, sort_by }) => ({
        url: `/company-clients/employees`,
        params: { company_id },
      }),
      providesTags: [{ type: 'EMPLOYEES', id: 'LIST' }],
      transformResponse: (res: {
        data: {
          employees: { employees: Array<IEmployee> };
          counts: {
            total_employees: number;
            active_employees: number;
            inactive_employees: number;
            male_employees: number;
            female_employees: number;
          };
        };
      }) => ({
        employees: res.data?.employees?.employees,
        meta: res.data?.counts,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useFetchCompanyEmployeesQuery,
  useFetchAllCompaniesQuery,
  useLazyFetchAllCompaniesQuery,
  useFetchCompanyProfileQuery,
} = company;

export const companyApi = company.endpoints;
