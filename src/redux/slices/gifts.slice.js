import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gifts: [],
};

export const giftsSlice = createSlice({
  name: 'gifts',
  initialState,
  reducers: {
    setGifts: (state, { payload }) => {
      state.gifts = payload;
    },
    setGiftUsed: (state, { payload }) => {
      const currentGift = state.gifts.findIndex(i => i === payload);
      state.gifts[currentGift].used = true;
    },
  },
});

// ACTIONS

export const { setGifts, setGiftUsed } = giftsSlice.actions;

// SELECTORS

export const selectGifts = state => state.gifts.gifts;

export default giftsSlice.reducer;
