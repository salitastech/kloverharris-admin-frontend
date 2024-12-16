import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '../api';
import type { RootState } from '../store';

export interface AuthState {
  isLoggedIn: boolean;
  user: any | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const auth = createSlice({
  name: 'auth-reducer',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    const handleInitiateLogin = (
      state: AuthState,
      payload: PayloadAction<any>
    ) => {
      console.log({ payload });
    };

    const handleLoggedInState = (
      state: AuthState,
      payload: PayloadAction<any>
    ) => {
      console.log({ payload });
    };

    builder.addMatcher(
      authApi.initiateLogin.matchFulfilled,
      handleInitiateLogin
    );
    builder.addMatcher(
      authApi.finalizeLogin.matchFulfilled,
      handleLoggedInState
    );
  },
});

export const { logout } = auth.actions;

export const isLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const currentUser = (state: RootState) => state.auth.user;

export const authReducer = auth;
