import { createSlice } from '@reduxjs/toolkit';
import { SPORT_TIME_FILTERS } from '../../../template/pages/Sportsbook/Sport/configs/sport.configs';
import { sportExtraReducers } from './sport.thunk';

const initialState = {
  sportsList: [],
  activeLeague: null,
  events: [],
  activeEvent: null,
  timeFilter: SPORT_TIME_FILTERS[0].value,
  isSportsLoading: true,
  isEventsLoading: true,
  isActiveEventLoading: false,
};

export const sportSlice = createSlice({
  name: 'prematch',
  initialState,
  reducers: {
    resetPrematchEvent: (state) => { state.activeEvent = null; },
    resetPrematchSlice: () => initialState,
    setPrematchTimeFilter: (state, { payload }) => { state.timeFilter = payload; },
  },
  extraReducers: sportExtraReducers,
});

// ACTIONS
export const { resetPrematchEvent, resetPrematchSlice, setPrematchTimeFilter } = sportSlice.actions;

// SELECTORS
export const selectIsPrematchSportsLoading = state => state.sport.isSportsLoading;
export const selectPrematchSportsList = state => state.sport.sportsList;
export const selectPrematchActiveLeague = state => state.sport.activeLeague;
export const selectPrematchEvents = state => state.sport.events;
export const selectIsPrematchEventsLoading = state => state.sport.isEventsLoading;
export const selectPrematchActiveEvent = state => state.sport.activeEvent;
export const selectIsSingleEventLoading = state => state.sport.isActiveEventLoading;
export const selectPrematchTimeFilter = state => state.sport.timeFilter;

export default sportSlice.reducer;
