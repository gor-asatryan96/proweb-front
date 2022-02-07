import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isBurgerActive: false,
};

export const configsSlice = createSlice({
  name: 'configs',
  initialState,
  reducers: {
    toggleBurger: (state, { payload }) => { state.isBurgerActive = payload; },
    resetConfigsSlice: () => initialState,
  },
});

// ACTIONS
export const { toggleBurger, resetConfigsSlice } = configsSlice.actions;

// SELECTORS
export const selectIsBurgerActive = state => state.configs.isBurgerActive;

export default configsSlice.reducer;
