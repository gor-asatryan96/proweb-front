import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleBurger } from '../../../../redux/reducers/appConfigs/appConfigs.slice';
import { INFO_RULES_CONFIGS } from '../../Common/InfoRules/configs/infoRules.configs';
import BurgerNav from './components/BurgerNav/BurgerNav';

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const [ activeTab, setActiveTab ] = useState(null);

  const activeTabConfigs = useMemo(() => (
    activeTab ? INFO_RULES_CONFIGS[activeTab] : null
  ), [ activeTab ]);

  const closeBurger = () => dispatch(toggleBurger(false));

  return (
    <div className="menu menu_active">
      {/* <!-- TODO: add className menu_active --> */}
      <div className="menu__header">
        <div onClick={closeBurger} className="menu__close">
          <div className="img-container">
            <svg className="menu__close__icon" width="16.09" height="16.09">
              <use xlinkHref="#close" />
            </svg>
          </div>
        </div>
        <a className="logo menu__logo" href="/">
          <div className="img-container">
            <svg className="logo__img" width="80.83" height="28.12">
              <use xlinkHref="#logo" />
            </svg>
          </div>
        </a>
        <a className="menu__deposit" href="/">
          <span className="menu__deposit__icon">
            <span className="img-container">
              <svg width="31" height="24">
                <use xlinkHref="#wallet" />
              </svg>
            </span>
          </span>
          <span className="menu__deposit__name">
            deposit
          </span>
        </a>
      </div>
      {
        activeTab
          ? <activeTabConfigs.Component goBack={() => setActiveTab(null)} />
          : <BurgerNav setActiveTab={setActiveTab} />
      }

    </div>
  );
};

export default BurgerMenu;
