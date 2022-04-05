import { combineReducers } from '@reduxjs/toolkit';
import user from './slices/user.slice';
import popups from './slices/popups.slice';
import configs from './slices/configs.slice';
import sport from './slices/sport.slice';
import betslip from './slices/betslip.slice';
import favorites from './slices/favorites.slice';
import gifts from './slices/gifts.slice';
import messages from './slices/messages.slice';

export const reducers = combineReducers({
  user,
  popups,
  configs,
  sport,
  betslip,
  favorites,
  gifts,
  messages,
});
