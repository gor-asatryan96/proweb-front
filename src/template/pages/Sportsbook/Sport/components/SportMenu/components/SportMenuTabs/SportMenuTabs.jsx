import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../../../../../../../constants/mediaQuery.constants';
import { SPORT_TABS_LIST } from '../../../../constants/sport.constants';
import { useSportParams } from '../../../../hooks/sport.hooks';
import PrematchTimeFilters from '../PrematchTimeFilters/PrematchTimeFilters';
import SportMenuTabItem from './components/SportMenuTabItem/SportMenuTabItem';
import { SPORT_TABS_CONFIGS } from './configs/sportMenuTabs.configs';

const SportMenuTabs = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  const { urlTab } = useSportParams();

  return (
    <div className="sidebar__betType">
      <ul className="sidebar__betTypeList">
        {SPORT_TABS_LIST.map((tab) => {
          const currentTabConfigs = SPORT_TABS_CONFIGS[tab];
          return (
            <SportMenuTabItem key={tab} name={tab} svg={currentTabConfigs.svg} active={urlTab === currentTabConfigs.url}>
              {isDesktop && currentTabConfigs.children}
            </SportMenuTabItem>
          );
        })}
      </ul>
      {!isDesktop && <PrematchTimeFilters />}
    </div>
  );
};

export default SportMenuTabs;
