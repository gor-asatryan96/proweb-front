import { SPORT_IDS } from '../../../pages/Sportsbook/constants/sport.constants';
import football from './football.svg';
import basketball from './basketball.svg';
import tennis from './tennis.svg';
import volleyball from './volleyball.svg';
import handball from './handball.svg';
import iceHockey from './ice-hockey.svg';
import tableTennis from './table-tennis.svg';
import amerFootball from './amer-football.svg';
import aussieRules from './aussie-rules.svg';
import baseball from './baseball.svg';
import boxing from './boxing.svg';
import combatSports from './combat-sports.svg';
import cricket from './cricket.svg';
import rugbyUnion from './rugby-union.svg';
import rugbyLeague from './rugby-league.svg';

const {
  FOOTBALL, BASKETBALL, TENNIS, VOLLEYBALL, HANDBALL, ICE_HOCKEY, TABLE_TENNIS, AMERICAN_FOOTBALL,
  AUSSIE_RULES, BASEBALL, BOXING, COMBAT_SPORTS, CRICKET, RUGBY_UNION, RUGBY_LEAGUE,
} = SPORT_IDS;

export const SPORTS_ICONS = {
  [FOOTBALL]: football,
  [BASKETBALL]: basketball,
  [TENNIS]: tennis,
  [VOLLEYBALL]: volleyball,
  [HANDBALL]: handball,
  [ICE_HOCKEY]: iceHockey,
  [TABLE_TENNIS]: tableTennis,
  [AMERICAN_FOOTBALL]: amerFootball,
  [AUSSIE_RULES]: aussieRules,
  [BASEBALL]: baseball,
  [BOXING]: boxing,
  [COMBAT_SPORTS]: combatSports,
  [CRICKET]: cricket,
  [RUGBY_UNION]: rugbyUnion,
  [RUGBY_LEAGUE]: rugbyLeague,
};
