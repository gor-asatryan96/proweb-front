import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bets: {},
};

export const betslipSlice = createSlice({
  name: 'betslip',
  initialState,
  reducers: {
    addBet: (state, { payload }) => {
      const { bet, event } = payload;
      state.bets[bet.id] = { bet, event };
    },
    removeBet: (state, { payload }) => {
      if (payload === 'all') {
        state.bets = {};
      } else {
        delete state.bets[payload];
      }
    },
    resetBetslipSlice: () => initialState,
  },
});

// ACTIONS
export const { resetBetslipSlice, addBet, removeBet } = betslipSlice.actions;

// SELECTORS
export const selectBets = state => state.betslip.bets;
export const selectBetsIds = state => Object.keys(state.betslip.bets);

export default betslipSlice.reducer;
