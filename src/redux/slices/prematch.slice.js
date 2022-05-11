import { createSlice } from '@reduxjs/toolkit';
import { prematchExtraReducers } from '../thunks/prematch.thunk';

const initialState = {
  activeSport: null,
  sportsList: [],
  activeLeague: null,
  events: [],
  activeEvent: null,
};

export const prematchSlice = createSlice({
  name: 'prematch',
  initialState,
  reducers: {
    setPrematchActiveSport: (state, { payload }) => { state.activeSport = payload; },
    resetPrematchSlice: () => initialState,
  },
  extraReducers: prematchExtraReducers,
});

// ACTIONS
export const { setPrematchActiveSport, resetPrematchSlice } = prematchSlice.actions;

// SELECTORS
export const selectPrematchActiveSport = state => state.prematch.activeSport;
export const selectIsPrematchSportsLoading = state => state.prematch.isSportsLoading;
export const selectPrematchSportsList = state => state.prematch.sportsList;
export const selectPrematchActiveLeague = state => state.prematch.activeLeague;
export const selectPrematchEvents = state => state.prematch.events;
export const selectPrematchActiveEvent = state => state.prematch.activeEvent;

export default prematchSlice.reducer;
