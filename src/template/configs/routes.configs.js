import { Navigate } from 'react-router-dom';
import IframeSection from '../components/Common/IframeSection/IframeSection';
import DailyExpress from '../pages/DailyExpress/DailyExpress';
import Fixtures from '../pages/Fixtures/Fixtures';
import Games from '../pages/Games/Games';
import Sportsbook from '../pages/Sportsbook/Sportsbook';
import SingleSport from '../pages/Sportsbook/components/SingleSport/SingleSport';
import Home from '../pages/Home/Home';
import Promotions from '../pages/Promotions/Promotions';

export const PANEL_ROUTES = [
  {
    path: '/',
    name: 'HOME',
    icon: 'home',
    element: <Home />,
  },
  {
    path: '/sport',
    name: 'SPORTS',
    icon: 'sport',
    element: <Sportsbook />,
    children: [
      {
        path: ':id',
        element: <SingleSport />,
      },
    ],
  },
  {
    path: '/live',
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
    name: 'CASINO',
    icon: 'casino',
    element: <IframeSection />,
  },
  {
    path: '/games',
    name: 'GAMES',
    icon: 'games',
    element: <Games />,
  },
  {
    path: '/live-casino',
    name: 'LIVE CASINO',
    icon: 'live-casino',
    element: <IframeSection />,
  },
  {
    path: '/chukua-tano',
    name: 'CHUKUA TANO',
    icon: 'chukua-tano',
    element: <IframeSection />,
  },
  {
    path: '/virtual-sport',
    name: 'VIRTUAL SPORT',
    icon: 'virtual-sport',
    element: <IframeSection />,
  },
  {
    path: '/live-games',
    name: 'LIVE GAMES',
    icon: 'live-games',
    element: <IframeSection />,
  },
  {
    path: '/e-sports',
    name: 'E SPORTS',
    icon: 'e-sports',
    element: <IframeSection />,
  },
  {
    path: '/pm-league',
    name: 'PM LEAGUE',
    icon: 'pm-league',
    element: <IframeSection />,
  },
  {
    path: '/jackpot',
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
    name: 'PROMOTIONS',
    element: <Promotions />,
  },
  {
    path: '/fixtures',
    name: 'FIXTURES',
    element: <Fixtures />,
  },
  {
    path: '/daily-express',
    name: 'DAILY EXPRESS',
    element: <DailyExpress />,
  },
  {
    path: '/statistic',
    name: 'STATISTIC',
    element: <IframeSection />,
  },
  {
    path: '/results',
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
