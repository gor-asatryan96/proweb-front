import { useMediaQuery } from 'react-responsive';
import { PANEL_ROUTES } from '../../../configs/routes.configs';
import PanelItem from './components/PanelItem/PanelItem';
import LanguageSwitcher from '../../Common/LanguageSwitcher/LanguageSwitcher';
import Plus7 from './components/Plus7/Plus7';

const Panel = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  return (
    <section className="panel">
      <div className="panel__list">
        {PANEL_ROUTES.map(item => (
          <PanelItem key={item.path} data={item} />
        ))}
        {isDesktop && (
          <>
            <Plus7 />
            <div className="panel__item panel__item--language">
              <LanguageSwitcher />
            </div>
          </>)}
      </div>
    </section>
  );
};

export default Panel;
