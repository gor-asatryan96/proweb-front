import { combineReducers } from '@reduxjs/toolkit';
import user from './user/user.slice';
import popups from './popups/popups.slice';
import appConfigs from './appConfigs/appConfigs.slice';
import serverConfigs from './serverConfigs/serverConfigs.slice';
import sport from './sport/sport.slice';
import live from './live/live.slice';
import betslip from './betslip/betslip.slice';
import favorites from './favorites/favorites.slice';
import gifts from './gifts/gifts.slice';
import messages from './messages/messages.slice';

export const reducers = combineReducers({
  user,
  popups,
  appConfigs,
  serverConfigs,
  sport,
  live,
  betslip,
  favorites,
  gifts,
  messages,
});
