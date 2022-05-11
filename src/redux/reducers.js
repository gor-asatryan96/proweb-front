import { combineReducers } from '@reduxjs/toolkit';
import user from './slices/user.slice';
import popups from './slices/popups.slice';
import appConfigs from './slices/appConfigs.slice';
import serverConfigs from './slices/serverConfigs.slice';
import prematch from './slices/prematch.slice';
import live from './slices/live.slice';
import betslip from './slices/betslip.slice';
import favorites from './slices/favorites.slice';
import gifts from './slices/gifts.slice';
import messages from './slices/messages.slice';

export const reducers = combineReducers({
  user,
  popups,
  appConfigs,
  serverConfigs,
  prematch,
  live,
  betslip,
  favorites,
  gifts,
  messages,
});
