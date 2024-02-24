import classNames from 'classnames';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { changePasswordThunk } from '../../../../../../../../redux/reducers/user/auth.thunk';
import { selectIsChangePasswordLoading } from '../../../../../../../../redux/reducers/user/user.slice';
import { Button } from '../../../../../../UI';

const passwordInputs = [
  { key: 'oldPassword', placeholder: 'Current password' },
  { key: 'newPassword', placeholder: 'New password' },
  { key: 'newPasswordConfirm', placeholder: 'Confirm new password' },
];

const fieldsKeys = passwordInputs.map(item => item.key);

const MyProfilePassword = () => {
  const dispatch = useDispatch();
  const isChangeLoading = useSelector(selectIsChangePasswordLoading);
  const [ showPasswords, setShowPasswords ] = useState([]);
  const [ isNotSameError, setIsNotSameError ] = useState(false);

  const {
    register, handleSubmit, formState: { errors }, reset, watch,
  } = useForm();

  const [ oldPassword, newPassword, newPasswordConfirm ] = watch(fieldsKeys);

  const toggleShowPasswords = (key) => {
    setShowPasswords(prev => (
      prev.includes(key)
        ? prev.filter(el => el !== key)
        : [ ...prev, key ]
    ));
  };

  const onSubmit = (data) => {
    if (data.newPassword !== data.newPasswordConfirm) {
      return setIsNotSameError(true);
    }
    setIsNotSameError(false);
    dispatch(changePasswordThunk(data)).unwrap().then(() => reset());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="profile__form-block profile__form-block_password">
      {passwordInputs.map(item => (
        <div key={item.key} className="profile__form-row">
          <label className="profile__label">
            <input
              {...register(item.key, {
                required: 'Field is required',
              })}
              type={showPasswords.includes(item.key) ? 'text' : 'password'}
              className="profile__input"
              placeholder={item.placeholder} />
            <button
              onClick={() => toggleShowPasswords(item.key)}
              type="button"
              className={classNames('profile__label-icon', { 'eye-show': showPasswords.includes(item.key) })}>
              <span className="img-container">
                <svg className="icon" width="20" height="13">
                  <use xlinkHref="#password-eye" />
                </svg>
              </span>
            </button>
          </label>
          {errors[item.key] && <div className='popup__error'>{errors[item.key].message}</div>}
        </div>
      ))}
      {isNotSameError
      && <div className='popup__error'>password and confirmation do not match</div>}
      <div className="profile__form-block profile__form-block_btn">
        {
        newPasswordConfirm && <Button
          type='submit'
          loading={isChangeLoading}
          className='profile__form-btn'>
          save password
          </Button>
       }
      </div>
    </form>
  );
};

export default MyProfilePassword;
