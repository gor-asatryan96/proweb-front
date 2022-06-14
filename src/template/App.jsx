import { useSelector } from 'react-redux';
import { useLocation, useRoutes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { ToastContainer } from 'react-toastify';
import Panel from './components/Mobile/Panel/Panel';
import BurgerMenu from './components/Mobile/BurgerMenu/BurgerMenu';
import Slider from './components/Mobile/Slider/Slider';
import './assets/styles/template-index.scss';
import Header from './components/Common/Header/Header';
import Popups from './components/Popups/Popups';
import { selectIsBurgerActive } from '../redux/reducers/appConfigs/appConfigs.slice';
import { ALL_ROUTES } from './configs/routes.configs';
import SearchPanel from './components/Common/SearchPanel/SearchPanel';
import Betslip from './components/Common/Betslip/Betslip';
import { useAppSideEffects } from './hooks/app.hooks';
import { MEDIA_QUERIES } from '../constants/mediaQuery.constants';

const App = () => {
  const { pathname } = useLocation();

  const isBurgerActive = useSelector(selectIsBurgerActive);
  const routes = useRoutes(ALL_ROUTES);
  useAppSideEffects();

  const isSearchActive = [ '/games' ].includes(pathname);
  const isSliderActive = [ '/sport', '/live', '/games' ].includes(pathname);

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <div className="wrapper-outer">
      <div className="wrapper">
        <Header />
        {isBurgerActive && <BurgerMenu />}
        {!isDesktop && isSearchActive && <SearchPanel />}
        {!isDesktop && isSliderActive && <Slider />}
        {routes}
        <Betslip />
        <Panel />
      </div>
      <Popups />
      <ToastContainer />
    </div>
  );
};

export default App;
