import { createSlice } from '@reduxjs/toolkit';
import { SPORT_IDS } from '../../template/pages/SportLive/constants/sport.constants';

const initialState = {
  activeSport: SPORT_IDS.FOOTBALL,
};

export const userInfoSlice = createSlice({
  name: 'sport',
  initialState,
  reducers: {
    setActiveSport: (state, { payload }) => { state.activeSport = payload; },
    resetSportSlice: () => initialState,
  },
});

// ACTIONS
export const { setActiveSport, resetSportSlice } = userInfoSlice.actions;

// SELECTORS
export const selectActiveSport = state => state.sport.activeSport;

export default userInfoSlice.reducer;
