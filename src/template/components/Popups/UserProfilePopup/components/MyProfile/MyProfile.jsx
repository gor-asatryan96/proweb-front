import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../../../../../constants/mediaQuery.constants';
import { logoutThunk } from '../../../../../../redux/reducers/user/auth.thunk';
import {
  selectUser, selectUserBalance, selectUserGender, selectUserId, selectUserUnits,
} from '../../../../../../redux/reducers/user/user.slice';
import GoBackHeader from '../../../components/GoBackHeader/GoBackHeader';
import MyProfileInfo from './components/MyProfileInfo/MyProfileInfo';
import MyProfilePassword from './components/MyProfilePassword/MyProfilePassword';

const MyProfile = ({ goBack, configs }) => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.user.e_mail);
  const user = useSelector(selectUser);
  const gender = useSelector(selectUserGender);
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  const userId = useSelector(selectUserId);
  const userBalance = useSelector(selectUserBalance);
  const userUnits = useSelector(selectUserUnits);
  const userPhone = user.phone.slice(4);
  const phoneExtensions = useSelector(state => state.serverConfigs.phoneExtensions);

  const onLogoutClick = () => {
    dispatch(logoutThunk());
  };

  return (
    <>
      {
      !configs.isDesktop && <GoBackHeader
        title={configs.name}
        goBack={goBack}
        icon={configs.icon} />
      }
      <div className="menu-inner">
        {/* <!-- TODO: add className active /checked --> hastat chi */}
        <div className="profile__form">
          {isDesktop && (
            <>
              <div className="popup-profile__form-user">
                <div className="popup-profile__form-profile">
                  <div className="img-container">
                    <svg width="65" height="65">
                      <use xlinkHref="#profile" />
                    </svg>
                  </div>
                </div>
                <div className="popup-profile__form-consumer">
                  <div className="popup-profile__form-block">
                    <div className="popup-profile__form-content">
                      <div className="popup-profile__form-line">
                        <label className="popup-profile__form-multi">
                          <div className="popup-profile__form-select  popup-profile__input">
                            <div>
                              {gender}.
                            </div>
                          </div>
                          {/* <select
                            className="popup-profile__form-select popup-profile__form-select--month popup-profile__input"
                            name="">
                            <option value="">Mr.</option>
                            <option value="">Mrs.</option>
                          </select> */}
                        </label>
                        <label className="popup-profile__form-label">

                          <div className='popup-profile__form-input popup-profile__input'>
                            <div style={{ padding: 15, paddingLeft: 0 }}>
                              {user.f_name} {user.l_name}
                            </div>
                          </div>

                          {/* <input
                            className="popup-profile__form-input popup-profile__input"
                            type="text"
                            value={user.f_name} /> */}

                          <span className="popup-profile__form-change">

                            {/* <button className="popup-profile__form-edit">
                              <span className="img-container">
                                <svg width="12" height="14">
                                  <use xlinkHref="#edit" />
                                </svg>
                              </span>
                            </button> */}

                            <span className="popup-profile__form-confirm">
                              <button className="popup-profile__form-accept">
                                <span className="img-container">
                                  <svg width="16" height="12">
                                    <use xlinkHref="#accept" />
                                  </svg>
                                </span>
                              </button>
                              <button className="popup-profile__form-cancel">
                                <span className="img-container">
                                  <svg width="12" height="12">
                                    <use xlinkHref="#cancel" />
                                  </svg>
                                </span>
                              </button>
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="popup-profile__form-exit">
                    <button onClick={onLogoutClick} className="popup-profile__form-logout">
                      Logout
                    </button>
                  </div>
                </div>
              </div>
              <div className="popup-profile__form-info">
                <ul className="popup-profile__form-list">
                  <li className="popup-profile__form-item popup-profile__input">
                    <div className="popup-profile__form-type">
                      ID:
                    </div>
                    <div className="popup-profile__form-value">
                      {userId}
                    </div>
                  </li>
                  <li className="popup-profile__form-item popup-profile__input">
                    <div className="popup-profile__form-type">
                      Balance
                    </div>
                    <div className="popup-profile__form-value">
                      <span className="popup-profile__form-unit">
                        {userBalance}
                      </span>
                      <span className="popup-profile__form-currency">
                        TZS
                      </span>
                    </div>
                  </li>
                  <li className="popup-profile__form-item popup-profile__input">
                    <div className="popup-profile__form-type">
                      Unit
                    </div>
                    <div className="popup-profile__form-value">
                      <span className="popup-profile__form-unit">
                        {userUnits}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          )}
          <span className="profile__label-text">Contact information</span>
          <div className="profile__form-block profile__form-block_contact">
            <div className="profile__form-row">
              <label className="profile__label">

                <div className="profile__input">
                  <div className="profile__input profile_input_phone">
                    {email}
                  </div>
                </div>

                {/* <input type="text" className="profile__input" value={email} disabled /> */}
              </label>
            </div>
            <div className="profile__form-row profile__form-row_2">

              <label className="profile__label profile__label_code">
                <input className="profile__input" value={phoneExtensions[0]} />
              </label>

              <label className="profile__label profile__label_number">
                <div className="profile__input profile_input_phone">
                  {userPhone}
                </div>
                {/* <input type="number" className="profile__input" value={userPhone} /> */}

                {isDesktop && (
                <span className="popup-profile__form-change">

                  {/* <button className="popup-profile__form-edit">
                    <span className="img-container">
                      <svg width="12" height="14">
                        <use xlinkHref="#edit" />
                      </svg>
                    </span>
                  </button> */}

                  <span className="popup-profile__form-confirm">
                    <button className="popup-profile__form-accept">
                      <span className="img-container">
                        <svg width="16" height="12">
                          <use xlinkHref="#accept" />
                        </svg>
                      </span>
                    </button>
                    <button className="popup-profile__form-cancel">
                      <span className="img-container">
                        <svg width="12" height="12">
                          <use xlinkHref="#cancel" />
                        </svg>
                      </span>
                    </button>
                  </span>
                </span>
                )}
              </label>
            </div>
          </div>
          <span className="profile__label-text">Password</span>
          <MyProfilePassword />
        </div>
        <MyProfileInfo />
      </div>
    </>
  );
};

export default MyProfile;
