import { SPORTS_ICONS } from '../../../../assets/images/sport-kind';
import { SPORT_IDS } from '../constants/sport.constants';

const {
  FOOTBALL, TENNIS, BASKETBALL, VOLLEYBALL, TABLE_TENNIS, HANDBALL, ICE_HOCKEY, AMERICAN_FOOTBALL,
  AUSSIE_RULES, BASEBALL, BOXING, COMBAT_SPORTS, CRICKET, RUGBY_UNION, RUGBY_LEAGUE,
} = SPORT_IDS;

export const SPORTS_CONFIGS = {
  [FOOTBALL]: {
    icon: SPORTS_ICONS.FOOTBALL,
  },
  [BASKETBALL]: {
    icon: SPORTS_ICONS.BASKETBALL,
  },
  [TENNIS]: {
    icon: SPORTS_ICONS.TENNIS,
  },
  [VOLLEYBALL]: {
    icon: SPORTS_ICONS.VOLLEYBALL,
  },
  [HANDBALL]: {
    icon: SPORTS_ICONS.HANDBALL,
  },
  [ICE_HOCKEY]: {
    icon: SPORTS_ICONS.ICE_HOCKEY,
  },
  [TABLE_TENNIS]: {
    icon: SPORTS_ICONS.TABLE_TENNIS,
  },
  [AMERICAN_FOOTBALL]: {
    icon: SPORTS_ICONS.AMERICAN_FOOTBALL,
  },
  [AUSSIE_RULES]: {
    icon: SPORTS_ICONS.AUSSIE_RULES,
  },
  [BASEBALL]: {
    icon: SPORTS_ICONS.BASEBALL,
  },
  [BOXING]: {
    icon: SPORTS_ICONS.BOXING,
  },
  [COMBAT_SPORTS]: {
    icon: SPORTS_ICONS.COMBAT_SPORTS,
  },
  [CRICKET]: {
    icon: SPORTS_ICONS.CRICKET,
  },
  [RUGBY_UNION]: {
    icon: SPORTS_ICONS.RUGBY_UNION,
  },
  [RUGBY_LEAGUE]: {
    icon: SPORTS_ICONS.RUGBY_LEAGUE,
  },
};

export const SPORT_TIME_FILTERS = [
  { name: 'All', value: null },
  { name: '3 Hrs', value: '3-h' },
  { name: '6 Hrs', value: '6-h' },
  { name: '12 Hrs', value: '12-h' },
  { name: '24 Hrs', value: '1-d' },
];
