import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { formateDate } from '../../../helpers/date';

const initialState = {
  favoriteItems: {},
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavoriteItem: (state, { payload }) => {
      const date = dayjs();
      const { day } = formateDate(date);
      let needToAdd = true;

      const allDates = Object.keys(state.favoriteItems);
      allDates.forEach((item) => {
        const payloadIndex = state.favoriteItems[item].findIndex(({ type, id }) => type === payload.type && id === payload.id);
        if (payloadIndex > -1) {
          needToAdd = false;
          state.favoriteItems[item].splice(payloadIndex, 1);
          if (!state.favoriteItems[item].length) {
            delete state.favoriteItems[item];
          }
        }
      });

      if (needToAdd) {
        if (!allDates.includes(day)) {
          state.favoriteItems[day] = [];
        }
        state.favoriteItems[day].push({ id: payload.id, type: payload.type, date });
      }
    },
  },
});

// Actions
export const { toggleFavoriteItem } = favoritesSlice.actions;

// Selectors
export const selectFavorites = state => state.favorites.favoriteItems;

export default favoritesSlice.reducer;
