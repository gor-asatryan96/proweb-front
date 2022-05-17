import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { USER_PROFILE_TABS } from '../../configs/userProfile.configs';
import { fixedTo2 } from '../../../../../../helpers/utils';
import { selectUserBalance, selectUserCurrency } from '../../../../../../redux/reducers/user/user.slice';
import { MEDIA_QUERIES } from '../../../../../../constants/mediaQuery.constants';

const UserProfileHeader = ({
  userId, onClose, setActiveTab, activeTab,
}) => {
  const balance = useSelector(selectUserBalance);
  const currency = useSelector(selectUserCurrency);
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <>
      {
        isDesktop
          ? <div className="userMenuConfig__header">
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
                </div>
              </div>
            </div>
            {
                Object.values(USER_PROFILE_TABS).map(({ name }) => (
                  <div key={name} className={'userMenuConfig__headerInfo'}>
                    <span
                      onClick={() => setActiveTab(name)}
                      className={classNames('userMenuConfig__idConfigLinkIconText', {
                        active: activeTab === name,
                      })}>{name}</span>
                  </div>
                ))
            }
            <button onClick={onClose} type="button" className="userMenuConfig__headerCell userMenuConfig__closeButton">
              <svg className="userMenuConfig__closeButtonSvg">
                <use xlinkHref="#close" />
              </svg>
            </button>
          </div>
          : <>
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
          </>
      }
    </>
  );
};

export default memo(UserProfileHeader);
