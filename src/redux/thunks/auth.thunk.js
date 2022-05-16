import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { clearTokenFromStorage, getErrorMessage } from '../../helpers/api';
import { POPUPS_IDS } from '../../template/components/Popups/constants/popups.constants';
import { closePopup } from '../slices/popups.slice';
import { resetUser } from '../slices/user.slice';

// THUNKS ************
export const loginThunk = createAsyncThunk(
  'user/login',
  async ({ login, password, isRemember }, { dispatch }) => {
    const response = await axios.post('/auth/sign-in', { login, password });
    const storage = isRemember ? localStorage : sessionStorage;
    storage.setItem('token', response['user_token']);
    dispatch(closePopup(POPUPS_IDS.LOGIN));
    return response;
  },
);

export const getUserByTokenThunk = createAsyncThunk(
  'user/getUserByToken',
  async (user_token) => {
    const response = await axios.get('/auth/me', {
      headers: { 'x-auth-token': user_token },
    });
    return { ...response, user_token };
  },
);

export const logoutThunk = createAsyncThunk(
  'user/logout',
  async (_, { dispatch, getState }) => {
    const token = getState().user['user_token'];
    dispatch(resetUser());
    dispatch(closePopup(POPUPS_IDS.USER_PROFILE));
    const response = await axios.post('/auth/sign-out', null, { headers: { 'x-auth-token': token }});
    return response;
  },
);

// THUNK HANDLERS ****************
const loginThunkFulfilled = (_, { payload }) => ({
  isConnected: true,
  isAuth: true,
  isLoading: false,
  error: null,
  ...payload,
});

// EXTRA REDUCER ****************
export const authExtraReducers = (builder) => {
  builder
    .addCase(loginThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(loginThunk.fulfilled, loginThunkFulfilled)
    .addCase(loginThunk.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = getErrorMessage(error.message);
    })
    .addCase(getUserByTokenThunk.fulfilled, loginThunkFulfilled)
    .addCase(getUserByTokenThunk.rejected, (state) => {
      state.isConnected = true;
      clearTokenFromStorage();
    });
};
