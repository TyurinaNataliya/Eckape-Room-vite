import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import type { PayloadAction } from '@reduxjs/toolkit';
import { checkAuthAction } from '../../services/thunk/check-auth-action';
import { loginAction } from '../../services/thunk/login-action';
import { logoutAction } from '../../services/thunk/logout-action';

type StateAuthProps = {
  authStatus: AuthorizationStatus;
  error: string | null;
  isLoadingAuth: boolean;
  isLoadingLogout: boolean;
};

const initialState: StateAuthProps = {
  authStatus: AuthorizationStatus.Unknown,
  error: null,
  isLoadingAuth: false,
  isLoadingLogout: false,
};

const authStatusSlice = createSlice({
  name: 'authorizationStatus',
  initialState,
  reducers: {
    addUserStatus(state, action: PayloadAction<AuthorizationStatus>) {
      state.authStatus = action.payload;
    },
    addErrorStatus(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.isLoadingAuth = false;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.isLoadingAuth = false;
      })
      .addCase(checkAuthAction.pending, (state) => {
        state.isLoadingAuth = true;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.error = null;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.error = action.error.message || 'Unknown error';
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.isLoadingLogout = false;
      })
      .addCase(logoutAction.pending, (state) => {
        state.isLoadingLogout = true;
      });
  },
});
export { authStatusSlice };
