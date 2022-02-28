import { createSlice } from '@reduxjs/toolkit';
import { BET_SLIP_HEADER_NAV } from '../../template/components/Common/Betslip/constants/betslip.constants';

const initialState = {
  bets: {},
  currentTab: BET_SLIP_HEADER_NAV[0],
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
    changeBetslipNav: (state, { payload }) => {
      state.currentTab = payload;
    },
    resetBetslipSlice: () => initialState,
  },
});

// ACTIONS
export const {
  resetBetslipSlice, addBet, removeBet, changeBetslipNav,
} = betslipSlice.actions;

// SELECTORS
export const selectBets = state => state.betslip.bets;
export const betslipTab = state => state.betslip.currentTab;
export const selectBetsIds = state => Object.keys(state.betslip.bets);

export default betslipSlice.reducer;
