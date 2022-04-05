import { useSelector } from 'react-redux';
import { useLocation, useRoutes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import Panel from './components/Mobile/Panel/Panel';
import BurgerMenu from './components/Mobile/BurgerMenu/BurgerMenu';
import Slider from './components/Mobile/Slider/Slider';
import './assets/styles/template-index.scss';
import Header from './components/Common/Header/Header';
import Popups from './components/Popups/Popups';
import { selectIsBurgerActive } from '../redux/slices/configs.slice';
import { ALL_ROUTES } from './configs/routes.configs';
import SearchPanel from './components/Common/SearchPanel/SearchPanel';
import Betslip from './components/Common/Betslip/Betslip';
import { useSideEffects } from './hooks/useSideEffects';

const App = () => {
  const { pathname } = useLocation();

  const isBurgerActive = useSelector(selectIsBurgerActive);
  const routes = useRoutes(ALL_ROUTES);
  useSideEffects();

  const isSearchActive = [ '/games' ].includes(pathname);
  const isSwiperActive = [ '/sport', '/live', '/games' ].includes(pathname);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  useEffect(() => {
    if (!isDesktop) {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }, [ isDesktop ]);

  return (
    <div className="wrapper-outer">
      <div className="wrapper">
        <Header />
        {isBurgerActive && <BurgerMenu />}
        {!isDesktop && isSearchActive && <SearchPanel />}
        {!isDesktop && isSwiperActive && <Slider />}
        {routes}
        <Betslip />
        <Panel />
      </div>
      <Popups />
    </div>
  );
};

export default App;
