import { getAuthToken } from '@app/_utilities/helpers';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL!;

export const prepareHeaders = (headers: Headers) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY!;
  headers.set('x-api-key', apiKey);
  const token = getAuthToken();
  if (token) headers.set('Authorization', `Bearer ${token}`);
};

const baseQuery = fetchBaseQuery({ baseUrl: String(baseUrl!), prepareHeaders });

export const Api = createApi({
  reducerPath: 'api-handler',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['CURRENT_PROFILE'],
});

export default Api;
