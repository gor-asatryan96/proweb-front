import { createAsyncThunk } from '@reduxjs/toolkit';
import { FAKE_USER, promise } from '../../fakeData';
import { clearTokenFromStorage, getErrorMessage } from '../../helpers/api';
import { POPUPS_IDS } from '../../template/components/Popups/constants/popups.constants';
import { closePopup } from '../slices/popups.slice';

export const loginThunk = createAsyncThunk(
  'userInfo/login',
  async ({ name, password, isRemember }, { dispatch }) => {
    // const response = await axios.post('/user/login', { name, password });
    const response = await promise(FAKE_USER);
    const storage = isRemember ? localStorage : sessionStorage;
    storage.setItem('token', response.token);
    dispatch(closePopup(POPUPS_IDS.LOGIN));
    return response;
  },
);

const loginThunkPending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const loginThunkFulfilled = (_, { payload }) => ({
  isConnected: true,
  isAuth: true,
  isLoading: false,
  error: null,
  ...payload,
});

const loginThunkRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = getErrorMessage(error.message);
};

export const getUserByTokenThunk = createAsyncThunk(
  'userInfo/getUserByToken',
  async ({ token }) => {
    // const response = await axios.post('/user/login', { name, password });
    const response = await promise(FAKE_USER);
    return response;
  },
);

const getUserByTokenThunkRejected = () => {
  clearTokenFromStorage();
};

export const authExtraReducers = (builder) => {
  builder
    .addCase(loginThunk.pending, loginThunkPending)
    .addCase(loginThunk.fulfilled, loginThunkFulfilled)
    .addCase(loginThunk.rejected, loginThunkRejected)
    .addCase(getUserByTokenThunk.fulfilled, loginThunkFulfilled)
    .addCase(getUserByTokenThunk.rejected, getUserByTokenThunkRejected);
};
