import LiveAnimation from '../components/LiveAnimation/LiveAnimation';
import LiveChart from '../components/LiveChart/LiveChart';
import LiveTable from '../components/LiveTable/LiveTable';
import LiveTimeline from '../components/LiveTimeline/LiveTimeline';
import LiveVideo from '../components/LiveVIdeo/LiveVideo';
import { LIVE_PANEL_TAB_NAMES } from '../constants/singleSport.constants';

const {
  ANIMATION, H2H, TABLE, TIMELINE, VIDEO,
} = LIVE_PANEL_TAB_NAMES;

export const LIVE_PANEL_TABS_CONFIGS = {
  [ANIMATION]: {
    icon: 'animation',
    Component: LiveAnimation,
  },
  [VIDEO]: {
    icon: 'youtube',
    Component: LiveVideo,
  },
  [H2H]: {
    icon: 'chart',
    Component: LiveChart,
  },
  [TABLE]: {
    icon: 'hint',
    Component: LiveTable,
  },
  [TIMELINE]: {
    icon: 'time',
    Component: LiveTimeline,
  },
};
