import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { closePopup } from '../../../../redux/slices/popups.slice';
import { selectUserId } from '../../../../redux/slices/user.slice';
import { Popup } from '../../UI';
import { POPUPS_IDS } from '../constants/popups.constants';
import UserProfileMain from './components/UserProfileMain/UserProfileMain';
import { USER_PROFILE_TABS } from './configs/userProfile.configs';

const { USER_PROFILE } = POPUPS_IDS;

const UserConfigPopup = () => {
  const dispatch = useDispatch();
  const popupProps = useSelector(state => state.popups.popupsProps[USER_PROFILE]);
  const userId = useSelector(selectUserId);

  const [ activeTab, setActiveTab ] = useState(popupProps?.tab);

  const activeTabConfigs = useMemo(() => (
    activeTab ? USER_PROFILE_TABS[activeTab] : null
  ), [ activeTab ]);

  const popupClass = activeTab ? activeTabConfigs.class : 'popup_userMenuConfig';

  const onClose = () => {
    dispatch(closePopup(USER_PROFILE));
  };

  return (
    <Popup onClose={onClose} className={`${popupClass} active`}>
      <div className="userMenuConfig__header">
        <div className="userMenuConfig__headerCell userMenuConfig__headerGearIcon">
          <svg className="userMenuConfig__headerGearIconSvg" viewBox="0 0 27 27.05">
            <use xlinkHref="#gear" />
          </svg>
        </div>
        <div className="userMenuConfig__headerInfo">
          <span className="userMenuConfig__idConfigLinkIcon">
            <svg className="userMenuConfig__idConfigLinkIconSvg" viewBox="0 0 20.46 21">
              <use xlinkHref="#userIconInfo" />
            </svg>
          </span>
          <span className="userMenuConfig__idConfigLinkIconText">ID: {userId}</span>
        </div>
        <button onClick={onClose} type="button" className="userMenuConfig__headerCell userMenuConfig__closeButton">
          <svg className="userMenuConfig__closeButtonSvg">
            <use xlinkHref="#close" />
          </svg>
        </button>
      </div>
      {activeTab
        ? <activeTabConfigs.Component configs={activeTabConfigs} goBack={() => setActiveTab(null)} />
        : <UserProfileMain setActiveTab={setActiveTab} />
      }
    </Popup>
  );
};

export default UserConfigPopup;
