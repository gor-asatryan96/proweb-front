import { SPORT_TABS, SPORT_TABS_URLS } from '../../../../../constants/sport.constants';
import PrematchTimeFilters from '../../PrematchTimeFilters/PrematchTimeFilters';

const {
  BOOSTED, EXPRESS, HOTS_TOPS, PRE_MATCH,
} = SPORT_TABS;

export const SPORT_TABS_CONFIGS = {
  [HOTS_TOPS]: { svg: 'hotsTops', children: null, url: SPORT_TABS_URLS.HOTS_TOPS },
  [EXPRESS]: { svg: 'expressBet', children: null, url: SPORT_TABS_URLS.EXPRESS },
  [BOOSTED]: { svg: 'boostedOdds', children: null, url: SPORT_TABS_URLS.BOOSTED },
  [PRE_MATCH]: { svg: 'pre-match', children: <PrematchTimeFilters />, url: SPORT_TABS_URLS.PRE_MATCH },
};
