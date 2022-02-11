import { useLocation } from 'react-router-dom';
import { PANEL_ROUTES } from '../../../configs/routes.configs';
import PanelItem from './components/PanelItem/PanelItem';

const Panel = () => {
  const { pathname } = useLocation();
  return (
    <section className="panel">
      <ul className="panel__list">
        {/* <!-- TODO: add className panel__item--active --> */}
        {PANEL_ROUTES.map(item => (
          <PanelItem key={item.path} data={item} active={pathname.includes(item.path)} />
        ))}
      </ul>
    </section>
  );
};

export default Panel;
