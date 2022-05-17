import { createSlice } from '@reduxjs/toolkit';
import { SPORT_IDS } from '../../../template/pages/Sportsbook/constants/sport.constants';

const initialState = {
  activeSport: SPORT_IDS.FOOTBALL,
};

export const liveSlice = createSlice({
  name: 'sport',
  initialState,
  reducers: {
    setActiveLiveSport: (state, { payload }) => { state.activeSport = payload; },
    resetLiveSlice: () => initialState,
  },
});

// ACTIONS
export const { setActiveLiveSport, resetLiveSlice } = liveSlice.actions;

// SELECTORS
export const selectActiveSport = state => state.live.activeSport;

export default liveSlice.reducer;
