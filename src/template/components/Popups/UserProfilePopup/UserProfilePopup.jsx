import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useMediaQuery } from 'react-responsive';
import { closePopup } from '../../../../redux/slices/popups.slice';
import { selectUserId } from '../../../../redux/slices/user.slice';
import { Popup } from '../../UI';
import { POPUPS_IDS } from '../constants/popups.constants';
import UserProfileMain from './components/UserProfileMain/UserProfileMain';
import { USER_PROFILE_TABS } from './configs/userProfile.configs';
import UserProfileHeader from './components/UserProfileHeader/UserProfileHeader';
import { USER_PROFILE_TABS_NAMES } from './constants/userProfile.constants';

const { USER_PROFILE } = POPUPS_IDS;

const UserConfigPopup = () => {
  const dispatch = useDispatch();
  const popupProps = useSelector(state => state.popups.popupsProps[USER_PROFILE]);
  const userId = useSelector(selectUserId);

  const [ activeTab, setActiveTab ] = useState(popupProps?.tab);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  const activeTabConfigs = useMemo(() => (
    activeTab ? USER_PROFILE_TABS[activeTab] : null
  ), [ activeTab ]);

  const popupClass = activeTab ? activeTabConfigs.class : 'popup_userMenuConfig';

  const onClose = useCallback(() => {
    dispatch(closePopup(USER_PROFILE));
  }, []);

  useEffect(() => {
    if (isDesktop && !activeTab) {
      setActiveTab(USER_PROFILE_TABS_NAMES.MY_PROFILE);
    }
  }, [ isDesktop ]);

  return (
    <Popup onClose={onClose} className={`${popupClass} active`}>
      <UserProfileHeader activeTab={activeTab} onClose={onClose} userId={userId} setActiveTab={setActiveTab} />
      {activeTab
        ? <activeTabConfigs.Component configs={{ ...activeTabConfigs, isDesktop }} goBack={() => setActiveTab(null)} />
        : <UserProfileMain setActiveTab={setActiveTab} isDesktop={isDesktop} />
      }
    </Popup>
  );
};

export default UserConfigPopup;
