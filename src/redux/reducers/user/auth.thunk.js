import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { clearTokenFromStorage, getErrorMessage } from '../../../helpers/api';
import { POPUPS_IDS } from '../../../template/components/Popups/constants/popups.constants';
import { closePopup } from '../popups/popups.slice';
import { resetUser } from './user.slice';

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

export const changePasswordThunk = createAsyncThunk(
  'user/changePassword',
  async (data) => {
    const response = await axios.post('/auth/change-password', data);
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
    })
    .addCase(changePasswordThunk.pending, (state) => {
      state.isChangePasswordLoading = true;
    })
    .addCase(changePasswordThunk.fulfilled, (state) => {
      state.isChangePasswordLoading = false;
      toast.success('Password was changed');
    })
    .addCase(changePasswordThunk.rejected, (state) => {
      state.isChangePasswordLoading = false;
      toast.error('something went wrong');
    });
};
