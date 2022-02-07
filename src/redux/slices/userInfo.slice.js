import { createSlice } from '@reduxjs/toolkit';
import { userInfoExtraReducers } from '../thunks/userInfo.thunk';

const initialState = {
  isAuth: true,
  isLoading: false,
  error: null,
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (_, { payload }) => ({ isAuth: true, ...payload }),
    resetUser: () => initialState,
  },
  extraReducers: userInfoExtraReducers,
});

// ACTIONS
export const { setConfigs, setLanguage, setIsLoading } = userInfoSlice.actions;

// SELECTORS
export const selectIsAuth = state => state.userInfo.isAuth;

export default userInfoSlice.reducer;
