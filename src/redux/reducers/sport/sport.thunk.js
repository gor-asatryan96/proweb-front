import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { replaceUnderscores } from '../../../helpers/utils';

// GET SPORTS LIST
export const getPrematchSportsListThunk = createAsyncThunk(
  'sport/getSportsList',
  async (rangeFilter) => {
    const response = await axios.get('/sport-book/sport/list', {
      params: {
        rangeFilter,
      },
    });
    return response;
  },
);

// GET SPORT EVENTS
export const getPrematchEventsThunk = createAsyncThunk(
  'sport/getEvents',
  async (data, { getState }) => {
    const sportName = replaceUnderscores(data.sportName);
    const league = replaceUnderscores(data.league);
    const country = replaceUnderscores(data.country);
    const sports = getState().sport.sportsList;
    const currentSport = sports.find(item => item.sportName === sportName);
    if (!currentSport) return {};
    // const response = await promise(FAKE_SPORTS_LIST);
    const response = await axios.post('/sport-book/event/list', {
      sportID: currentSport.sportId,
      competitionName: league,
      markets: [ '1x2' ],
      country,
      topEvents: false,
    });
    console.log('response', response);
    return response;
  },
);

// GET SINGLE PREMATCH
export const getSinglePrematchThunk = createAsyncThunk(
  'sport/getSingle',
  async (eventID) => {
    const response = await axios.post('/sport-book/event/list', {
      sportID: 501,
      markets: [
        '1x2',
      ],
      eventID,
      topEvents: false,
    });
    console.log('response', response);
    return response[0];
  },
);

export const sportExtraReducers = (builder) => {
  builder
    .addCase(getPrematchSportsListThunk.pending, (state) => {
      state.isSportsLoading = true;
    })
    .addCase(getPrematchSportsListThunk.fulfilled, (state, { payload }) => {
      state.isSportsLoading = false;
      state.sportsList = payload;
    })
    .addCase(getPrematchSportsListThunk.rejected, (state, { error }) => {
      state.isSportsLoading = false;
    })
    .addCase(getPrematchEventsThunk.pending, (state) => {
      state.isEventsLoading = true;
    })
    .addCase(getPrematchEventsThunk.fulfilled, (state, { payload }) => {
      state.isEventsLoading = false;
      if (payload.competition) {
        const { events, ...activeLeague } = payload.competition;
        state.events = events;
        state.activeLeague = activeLeague;
      }
    })
    .addCase(getPrematchEventsThunk.rejected, (state, { error }) => {
      state.isEventsLoading = false;
    })
    .addCase(getSinglePrematchThunk.pending, (state) => {
      state.isActiveEventLoading = true;
    })
    .addCase(getSinglePrematchThunk.fulfilled, (state, { payload }) => {
      const { events, ...info } = payload;
      state.isActiveEventLoading = false;
      if (events) {
        state.activeEvent = { ...info, ...events[0] };
      }
    })
    .addCase(getSinglePrematchThunk.rejected, (state, { error }) => {
      state.isActiveEventLoading = false;
    });
};
