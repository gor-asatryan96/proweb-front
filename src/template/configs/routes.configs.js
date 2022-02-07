import { Navigate } from 'react-router-dom';
import Games from '../pages/Games/Games';
import Live from '../pages/SportLive/Live/Live';
import SingleSport from '../pages/SportLive/SingleSport/SingleSport';
import Sport from '../pages/SportLive/Sport/Sport';

export const ROUTES = [
  {
    path: '/',
    element: <Navigate to="/sport" replace />,
  },
  {
    path: '/sport',
    name: 'SPORTS',
    element: <Sport />,
  },
  {
    path: '/sport/:id',
    element: <SingleSport />,
  },
  {
    path: '/live',
    name: 'LIVE',
    element: <Live />,
  },
  {
    path: '/live/:id',
    element: <SingleSport />,
  },
  {
    path: '/casino',
    name: 'CASINO',
    element: <Games />,
  },
  {
    path: '/games',
    name: 'GAMES',
    element: <Games />,
  },
  {
    path: '/live-casino',
    name: 'LIVE CASINO',
    element: <Games />,
  },
  {
    path: '/chukua-tano',
    name: 'CHUKUA TANO',
    element: <Games />,
  },
  {
    path: '/virtual-sport',
    name: 'VIRTUAL SPORT',
    element: <Games />,
  },
  {
    path: '/live-games',
    name: 'LIVE GAMES',
    element: <Games />,
  },
  {
    path: '/e-sports',
    name: 'E SPORTS',
    element: <Games />,
  },
  {
    path: '/pm-league',
    name: 'PM LEAGUE',
    element: <Games />,
  },
  {
    path: '/jackpot',
    name: 'JACKPOT',
    element: <Games />,
  },
  {
    path: '*',
    element: <Navigate to="/sport" replace />,
  },
];
