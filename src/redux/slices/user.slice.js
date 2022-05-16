import { createSlice } from '@reduxjs/toolkit';
import { clearTokenFromStorage } from '../../helpers/api';
import { authExtraReducers } from '../thunks/auth.thunk';
import { userInfoExtraReducers } from '../thunks/user.thunk';

export const initialUserState = {
  isConnected: false,
  isAuth: false,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setIsConnected: (state) => { state.isConnected = true; },
    resetUser: () => {
      clearTokenFromStorage();
      return {
        ...initialUserState,
        isConnected: true,
      };
    },
  },
  extraReducers: (builder) => {
    userInfoExtraReducers(builder);
    authExtraReducers(builder);
  },
});

// ACTIONS
export const { setIsConnected, resetUser } = userSlice.actions;

// SELECTORS
export const selectUser = state => state.user;
export const selectIsAuth = state => state.user.isAuth;
export const selectIsConnected = state => state.user.isConnected;
export const selectUserId = state => state.user.id;
export const selectUserBalance = state => state.user.balance;
export const selectUserCurrency = state => state.user.currency;
export const selectUserUnits = state => state.user.units;

export default userSlice.reducer;
