import Api from './api';

type InitiateLoginPayload = { email: string; password: string };
type Verify2faPayload = { email: string; two_factor_code: string };

const transformResponse = (res: any) => res?.data;

const auth = Api.injectEndpoints({
  endpoints: (build) => ({
    initiateLogin: build.mutation<void, InitiateLoginPayload>({
      query: (body: { email: string; password: string }) => {
        console.log({ body });
        return {
          url: '/login',
          body,
          method: 'POST',
        };
      },
      transformResponse,
    }),
    finalizeLogin: build.mutation<Record<any, any>, Verify2faPayload>({
      query: (body: Verify2faPayload) => ({
        url: '/verify-2fa',
        body,
        method: 'POST',
      }),
      transformResponse,
      invalidatesTags: ['CURRENT_PROFILE'],
    }),
  }),
  overrideExisting: true,
});

export const { useInitiateLoginMutation, useFinalizeLoginMutation } = auth;
export const authApi = auth.endpoints;
