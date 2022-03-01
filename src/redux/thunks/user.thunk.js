import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getErrorMessage } from '../../helpers/api';

export const registerUserThunk = createAsyncThunk(
  'userInfo/registerUser',
  async ({ email, password }) => {
    const response = await axios.post('/user/register', { email, password });
    return response;
  },
);

const registerUserThunkPending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const registerUserThunkFulfilled = (_, { payload }) => {
  payload.token && localStorage.setItem('token', payload.token);
  return {
    isAuth: true,
    isLoading: false,
    error: null,
    ...payload,
  };
};

const registerUserThunkRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = getErrorMessage(error.message);
};

export const userInfoExtraReducers = (builder) => {
  builder
    .addCase(registerUserThunk.pending, registerUserThunkPending)
    .addCase(registerUserThunk.fulfilled, registerUserThunkFulfilled)
    .addCase(registerUserThunk.rejected, registerUserThunkRejected);
};
