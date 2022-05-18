import { createSlice } from '@reduxjs/toolkit';
import { sportExtraReducers } from './sport.thunk';

const initialState = {
  sportsList: [],
  activeLeague: null,
  events: [],
  activeEvent: null,
};

export const sportSlice = createSlice({
  name: 'prematch',
  initialState,
  reducers: {
    resetPrematchEvent: (state) => { state.activeEvent = null; },
    resetPrematchSlice: () => initialState,
  },
  extraReducers: sportExtraReducers,
});

// ACTIONS
export const { resetPrematchEvent, resetPrematchSlice } = sportSlice.actions;

// SELECTORS
export const selectIsPrematchSportsLoading = state => state.sport.isSportsLoading;
export const selectPrematchSportsList = state => state.sport.sportsList;
export const selectPrematchActiveLeague = state => state.sport.activeLeague;
export const selectPrematchEvents = state => state.sport.events;
export const selectIsPrematchEventsLoading = state => state.sport.isEventsLoading;
export const selectPrematchActiveEvent = state => state.sport.activeEvent;

export default sportSlice.reducer;
