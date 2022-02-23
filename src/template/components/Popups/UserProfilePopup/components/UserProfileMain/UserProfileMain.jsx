import { useDispatch, useSelector } from 'react-redux';
import { fixedTo2 } from '../../../../../../helpers/utils';
import { closePopup } from '../../../../../../redux/slices/popups.slice';
import {
  resetUser, selectUserBalance, selectUserCurrency, selectUserUnits,
} from '../../../../../../redux/slices/user.slice';
import { POPUPS_IDS } from '../../../constants/popups.constants';
import { USER_PROFILE_TABS } from '../../configs/userProfile.configs';
import { USER_PROFILE_TABS_NAMES } from '../../constants/userProfile.constants';

const { DEPOSIT } = USER_PROFILE_TABS_NAMES;

const menuTabs = Object.values(USER_PROFILE_TABS).filter(menu => menu.name !== DEPOSIT);

const UserProfileMain = ({ setActiveTab }) => {
  const dispatch = useDispatch();
  const balance = useSelector(selectUserBalance);
  const currency = useSelector(selectUserCurrency);
  const units = useSelector(selectUserUnits);

  const onLogoutClick = () => {
    dispatch(resetUser());
    dispatch(closePopup(POPUPS_IDS.USER_PROFILE));
  };

  return (
    <>
      <div className="userMenuConfig__balance">
        <div className="userMenuConfig__row">
          <div className="userMenuConfig__column userMenuConfig__column--info">
            <div className="userMenuConfig__line">
              <div className="userMenuConfig__name">
                Balance
              </div>
              <div className="userMenuConfig__value">
                {fixedTo2(balance)} <span className="userMenuConfig__currency">{currency}</span>
              </div>
            </div>
            <div className="userMenuConfig__line">
              <div className="userMenuConfig__name">
                Unit
              </div>
              <div className="userMenuConfig__value">
                {fixedTo2(units)}
              </div>
            </div>
          </div>
          <div onClick={() => setActiveTab(DEPOSIT)} className="userMenuConfig__column userMenuConfig__column--deposit">
            <div className="btn userMenuConfig__deposit">
              deposit
            </div>
          </div>
        </div>
      </div>
      <ul className="userMenuConfig__list">
        {menuTabs.map(item => (
          <li key={item.name} className="userMenuConfig__item" onClick={() => setActiveTab(item.name)}>
            <div className="userMenuConfig__link">
              <div className="userMenuConfig__icon">
                <div className="img-container">
                  <svg className="icon">
                    <use xlinkHref={`#${item.icon}`} />
                  </svg>
                </div>
              </div>
              <div className="userMenuConfig__title">
                {item.name}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="userMenuConfig__logout">
        <button
          onClick={onLogoutClick}
          className="btn userMenuConfig__logoutBtn">
          Logout
        </button>
      </div>
    </>
  );
};

export default UserProfileMain;
