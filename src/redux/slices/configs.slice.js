import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isBurgerActive: false,
  activeLanguage: 'EN',
};

export const configsSlice = createSlice({
  name: 'configs',
  initialState,
  reducers: {
    toggleBurger: (state, { payload }) => { state.isBurgerActive = payload; },
    toggleLanguage: (state, { payload }) => { state.activeLanguage = payload; },
    resetConfigsSlice: () => initialState,
  },
});

// ACTIONS
export const { toggleBurger, toggleLanguage, resetConfigsSlice } = configsSlice.actions;

// SELECTORS
export const selectIsBurgerActive = state => state.configs.isBurgerActive;
export const selectActiveLanguage = state => state.configs.activeLanguage;

export default configsSlice.reducer;
