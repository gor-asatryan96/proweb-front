import { useSelector } from 'react-redux';
import {
  useLocation, useRoutes,
} from 'react-router-dom';
import Panel from './components/Mobile/Panel/Panel';
import BurgerMenu from './components/Mobile/BurgerMenu/BurgerMenu';
import Slider from './components/Mobile/Slider/Slider';
import './assets/styles/template-index.scss';
import Header from './components/Common/Header/Header';
import Popups from './components/Popups/Popups';
import { selectIsBurgerActive } from '../redux/slices/configs.slice';
import { ALL_ROUTES } from './configs/routes.configs';
import SearchPanel from './components/Common/SearchPanel/SearchPanel';

const App = () => {
  const { pathname } = useLocation();

  const isBurgerActive = useSelector(selectIsBurgerActive);
  const routes = useRoutes(ALL_ROUTES);

  const isSearchActive = [ '/games' ].includes(pathname);
  const isSwiperActive = [ '/sport', '/live', '/games' ].includes(pathname);

  return (
    <div className="wrapper-outer">
      <div className="wrapper">
        <Header />
        {isBurgerActive && <BurgerMenu />}
        {isSearchActive && <SearchPanel />}
        {isSwiperActive && <Slider />}
        {routes}
        <Panel />
      </div>
      <Popups />
    </div>
  );
};

export default App;
