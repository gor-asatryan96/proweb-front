import { Navigate } from 'react-router-dom';
import IframeSection from '../components/Common/IframeSection/IframeSection';
import DailyExpress from '../pages/DailyExpress/DailyExpress';
import Fixtures from '../pages/Fixtures/Fixtures';
import Games from '../pages/Games/Games';
import Live from '../pages/SportLive/Live/Live';
import SingleSport from '../pages/SportLive/SingleSport/SingleSport';
import Sport from '../pages/SportLive/Sport/Sport';

export const PANEL_ROUTES = [
  {
    path: '/sport',
    name: 'SPORTS',
    element: <Sport />,
  },
  {
    path: '/live',
    name: 'LIVE',
    element: <Live />,
  },
  {
    path: '/casino',
    name: 'CASINO',
    element: <IframeSection />,
  },
  {
    path: '/games',
    name: 'GAMES',
    element: <Games />,
  },
  {
    path: '/live-casino',
    name: 'LIVE CASINO',
    element: <IframeSection />,
  },
  {
    path: '/chukua-tano',
    name: 'CHUKUA TANO',
    element: <IframeSection />,
  },
  {
    path: '/virtual-sport',
    name: 'VIRTUAL SPORT',
    element: <IframeSection />,
  },
  {
    path: '/live-games',
    name: 'LIVE GAMES',
    element: <IframeSection />,
  },
  {
    path: '/e-sports',
    name: 'E SPORTS',
    element: <IframeSection />,
  },
  {
    path: '/pm-league',
    name: 'PM LEAGUE',
    element: <IframeSection />,
  },
  {
    path: '/jackpot',
    name: 'JACKPOT',
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
    element: <IframeSection />,
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
  {
    path: '/',
    element: <Navigate to="/sport" replace />,
  },
  ...PANEL_ROUTES,
  ...NESTED_ROUTES,
  ...PLUS_7_ROUTES,
  {
    path: '*',
    element: <Navigate to="/sport" replace />,
  },
];
