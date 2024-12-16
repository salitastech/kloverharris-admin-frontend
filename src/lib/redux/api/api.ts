import { getAuthToken } from '@app/_utilities/helpers';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL!;

const prepareHeaders = (headers: Headers) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY!;
  // headers.set('x-api-key', apiKey);
  headers.set('X-API-KEY', apiKey);
  const token = getAuthToken();
  // headers.set('Origin', ``);
  if (token) headers.set('Authorization', `Bearer ${token}`);
  return headers;
};

const baseQuery = fetchBaseQuery({
  baseUrl: String(baseUrl!),
  prepareHeaders,
  // credentials: 'include',
});

export const Api = createApi({
  reducerPath: 'api-handler',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['CURRENT_PROFILE'],
});

export default Api;
