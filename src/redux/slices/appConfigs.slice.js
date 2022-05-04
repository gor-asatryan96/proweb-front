import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isBurgerActive: false,
  activeLanguage: 'EN',
};

export const appConfigsSlice = createSlice({
  name: 'appConfigs',
  initialState,
  reducers: {
    toggleBurger: (state, { payload }) => { state.isBurgerActive = payload; },
    toggleLanguage: (state, { payload }) => { state.activeLanguage = payload; },
    resetConfigsSlice: () => initialState,
  },
});

// ACTIONS
export const { toggleBurger, toggleLanguage, resetConfigsSlice } = appConfigsSlice.actions;

// SELECTORS
export const selectIsBurgerActive = state => state.appConfigs.isBurgerActive;
export const selectActiveLanguage = state => state.appConfigs.activeLanguage;

export default appConfigsSlice.reducer;
