import { useDispatch } from 'react-redux';
import { closePopup, openPopup } from '../../../../redux/slices/popups.slice';
import { Popup } from '../../UI';
import { POPUPS_IDS } from '../constants/popups.constants';

const { LOGIN, REGISTER, RECOVERY } = POPUPS_IDS;

const LoginPopup = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closePopup(LOGIN));
  };

  const onRecoveryClick = () => {
    dispatch(closePopup(LOGIN));
    dispatch(openPopup({ id: RECOVERY }));
  };

  const onRegisterClick = () => {
    dispatch(closePopup(LOGIN));
    dispatch(openPopup({ id: REGISTER }));
  };

  return (
    <Popup onClose={onClose} className='popup-login active'>
      <div className="popup__container">
        <div className="popup__header">
          <div className="popup__logo">
            <div className="img-container">
              <img className="popup__logo__img" src="img/logo.svg" alt="logo" />
            </div>
          </div>
          <div className="popup__title">
            LOG IN
          </div>
          <button className="popup__close" onClick={onClose}>
            <span className="img-container">
              <svg width="14" height="14">
                <use xlinkHref="#close-green" />
              </svg>
            </span>
          </button>
        </div>
        <div className="popup__block">
          <form action="">
            <div className="popup__form">
              <div className="popup__line">
                <input className="popup__input input" type="text" placeholder="Username/Email" />
              </div>
              <div className="popup__line popup__line--password">
                <input className="popup__input input" type="password" placeholder="Password" />
                <button className="input__show">
                  <span className="img-container">
                    <svg width="14" height="9">
                      <use xlinkHref="#eye" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="popup-login__accept">
              <div className="popup-login__remember">
                <label className="popup-login__title" for="remember">
                  Remember me
                </label>
                <div className="checkbox">
                  <input className="checkbox__btn" type="checkbox" id="remember" />
                  <span className="checkbox__bg" />
                  <span className="checkbox__round" />
                </div>
              </div>
              <button className="popup__btn" disabled>
                Log In
              </button>
            </div>
            <div onClick={onRecoveryClick} className="popup-login__forgot">
              <div className="popup-login__forgot__btn">
                Forgot your password ?
              </div>
            </div>
            <div className="popup-login__register">
              <div className="popup-login__register__name">
                Don't have an account?
              </div>
              <button onClick={onRegisterClick} className="popup__btn">
                REGISTER NOW
              </button>
            </div>
          </form>
        </div>
        <div className="popup__footer">
          <div className="popup__info">
            <div className="popup__licence">
              licensed by:
            </div>
            <div className="popup__country">
              gaming board of tanzania
            </div>
          </div>
          <div className="popup__rule">
            <div className="popup__security">
              Security &
              <br />
              Responsibility
            </div>
            <div className="popup__rise">
              <div className="img-container">
                <svg width="29" height="29">
                  <use xlinkHref="#18-plus" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default LoginPopup;
