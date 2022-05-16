import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { closePopup, openPopup } from '../../../../redux/slices/popups.slice';
import { Button, Input, Popup } from '../../UI';
import logo from '../../../assets/images/logo.svg';
import { POPUPS_IDS } from '../constants/popups.constants';
import { loginThunk } from '../../../../redux/thunks/auth.thunk';

const { LOGIN, REGISTER, RECOVERY } = POPUPS_IDS;

const LoginPopup = () => {
  const dispatch = useDispatch();
  const isAuthLoading = useSelector(state => state.user.isLoading);
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

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

  const onSubmit = (data) => {
    dispatch(loginThunk(data));
  };

  return (
    <Popup onClose={onClose} className='popup-login active'>
      <div className="popup__container">
        <div className="popup__header">
          <div className="popup__logo">
            <div className="img-container">
              <img className="popup__logo__img" src={logo} alt="logo" />
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="popup__form">
              <div className="popup__line">
                <Input
                  controllProps={register('login', { required: 'Username/Email is required' })}
                  type='text'
                  placeholder='Username/Email'
                  error={errors.name} />

              </div>
              <div className="popup__line popup__line--password">
                <Input
                  controllProps={register('password', { required: 'Password is required' })}
                  type='password'
                  eye
                  placeholder='Create your password'
                  error={errors.password} />
              </div>
            </div>
            <div className="popup-login__accept">
              <div className="popup-login__remember">
                <label className="popup-login__title" htmlFor="remember">
                  Remember me
                </label>
                <div className="checkbox">
                  <input {...register('rememberMe')} className="checkbox__btn" type="checkbox" id="remember" />
                  <span className="checkbox__bg" />
                  <span className="checkbox__round" />
                </div>
              </div>
              <Button loading={isAuthLoading}>Log In</Button>
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
              <Button onClick={onRegisterClick}>REGISTER NOW</Button>
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
