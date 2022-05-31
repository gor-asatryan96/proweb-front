import { Navigate } from 'react-router-dom';
import IframeSection from '../components/Common/IframeSection/IframeSection';
import DailyExpress from '../pages/DailyExpress/DailyExpress';
import Fixtures from '../pages/Fixtures/Fixtures';
import Games from '../pages/Games/Games';
import Sportsbook from '../pages/Sportsbook/Sportsbook';
import SingleSport from '../pages/Sportsbook/components/SingleSport/SingleSport';
import Home from '../pages/Home/Home';
import Promotions from '../pages/Promotions/Promotions';
import Sport from '../pages/Sportsbook/Sport/Sport';
import Prematch from '../pages/Sportsbook/Sport/pages/Prematch/Prematch';
import { SPORT_TABS_URLS } from '../pages/Sportsbook/Sport/constants/sport.constants';

const { PRE_MATCH } = SPORT_TABS_URLS;

export const PANEL_ROUTES = [
  {
    path: '/',
    to: '/',
    name: 'HOME',
    icon: 'home',
    element: <Home />,
  },
  {
    path: '/Sport',
    to: '/Sport',
    name: 'SPORTS',
    icon: 'sport',
    element: <Sport />,
    children: [
      {
        path: `${PRE_MATCH}/*`,
        element: <Prematch />,
      },
      {
        path: '*',
        element: <Navigate to={`/Sport/${PRE_MATCH}`} />,
      },
    ],
  },
  {
    path: '/live',
    to: '/live',
    name: 'LIVE',
    icon: 'live',
    element: <Sportsbook live />,
    children: [
      {
        path: ':id',
        element: <SingleSport live />,
      },
    ],
  },
  {
    path: '/casino',
    to: '/casino',
    name: 'CASINO',
    icon: 'casino',
    element: <IframeSection />,
  },
  {
    path: '/games',
    to: '/games',
    name: 'GAMES',
    icon: 'games',
    element: <Games />,
  },
  {
    path: '/live-casino',
    to: '/live-casino',
    name: 'LIVE CASINO',
    icon: 'live-casino',
    element: <IframeSection />,
  },
  {
    path: '/chukua-tano',
    to: '/chukua-tano',
    name: 'CHUKUA TANO',
    icon: 'chukua-tano',
    element: <IframeSection>
      <iframe title='Chukua Tano' src='https://chukuatano.co.tz/' />
    </IframeSection>,
  },
  {
    path: '/virtual-sport',
    to: '/virtual-sport',
    name: 'VIRTUAL SPORT',
    icon: 'virtual-sport',
    element: <IframeSection />,
  },
  {
    path: '/live-games',
    to: '/live-games',
    name: 'LIVE GAMES',
    icon: 'live-games',
    element: <IframeSection />,
  },
  {
    path: '/e-sports',
    to: '/e-sports',
    name: 'E SPORTS',
    icon: 'e-sports',
    element: <IframeSection />,
  },
  {
    path: '/pm-league',
    to: '/pm-league',
    name: 'PM LEAGUE',
    icon: 'pm-league',
    element: <IframeSection />,
  },
  {
    path: '/jackpot',
    to: '/jackpot',
    name: 'JACKPOT',
    icon: 'jackpot',
    element: <IframeSection />,
  },
];

export const NESTED_ROUTES = [
  {
    path: '/sport/:id',
    element: <SingleSport />,
  },
  {
    path: '/live/:id',
    element: <SingleSport />,
  },
];

export const PLUS_7_ROUTES = [
  {
    path: '/promotions',
    to: '/promotions',
    name: 'PROMOTIONS',
    element: <Promotions />,
  },
  {
    path: '/fixtures',
    to: '/fixtures',
    name: 'FIXTURES',
    element: <Fixtures />,
  },
  {
    path: '/daily-express',
    to: '/daily-express',
    name: 'DAILY EXPRESS',
    element: <DailyExpress />,
  },
  {
    path: '/statistic',
    to: '/statistic',
    name: 'STATISTIC',
    element: <IframeSection />,
  },
  {
    path: '/results',
    to: '/results',
    name: 'RESULTS',
    element: <IframeSection />,
  },
];

export const ALL_ROUTES = [
  ...PANEL_ROUTES,
  // ...NESTED_ROUTES,
  ...PLUS_7_ROUTES,
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];
