import { ACCESS_TOKEN_KEY } from '@app/_utilities/constants';
import { getErrorMessage } from '@app/_utilities/helpers';
import { isRejectedWithValue, type MiddlewareAPI } from '@reduxjs/toolkit';
import JsCookie from 'js-cookie';
import { enqueueSnackbar } from 'notistack';

const IsBrowser = typeof window !== 'undefined';

const ignoreEndpoints: string[] = [];
const ignore401: string[] = [];

export const rtkQueryErrorLogger =
  (api: MiddlewareAPI<any>) => (next: any) => (action: any) => {
    let serverMessage = 'Oops! An error Ocurred';

    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these use matchers!
    if (isRejectedWithValue(action)) {
      if (
        action.payload &&
        action.payload.status === 401 &&
        !ignore401?.includes(action?.meta?.arg?.endpointName)
      ) {
        JsCookie.remove(ACCESS_TOKEN_KEY);
        window.location.href = '/auth/login';
        //   Todo
        // api
        //   .dispatch
        // (handleLogout(async () => {}))
        return;
      }
      if (
        action.type === 'api/executeMutation/rejected' &&
        ignoreEndpoints.includes(action?.meta?.arg?.endpointName)
      ) {
        return;
      }
      serverMessage = getErrorMessage(action?.payload);

      if (action?.payload?.status === 'FETCH_ERROR') {
        if (IsBrowser) {
          enqueueSnackbar(
            'Network Error, Please check that you have active internet connection.',
            { variant: 'error', preventDuplicate: true, autoHideDuration: 5000 }
          );
        }
      } else {
        if (IsBrowser) {
          enqueueSnackbar(
            serverMessage ||
              action?.error?.message ||
              'Oops! something went wrong',
            { variant: 'error', preventDuplicate: true, autoHideDuration: 5000 }
          );
        }
      }
    }

    return next(action);
  };
