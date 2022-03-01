import classNames from 'classnames';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const passwordInputs = [
  { key: 'currentPassword', placeholder: 'Current password' },
  { key: 'newPassword', placeholder: 'New password' },
  { key: 'confirmPassword', placeholder: 'Confirm new password' },
];

const MyProfilePassword = () => {
  const [ showPasswords, setShowPasswords ] = useState([]);
  // const [ isNotSameError, setIsNotSameError ] = useState(false)

  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const toggleShowPasswords = (key) => {
    setShowPasswords(prev => (
      prev.includes(key)
        ? prev.filter(el => el !== key)
        : [ ...prev, key ]
    ));
  };

  const onSubmit = (data) => {
    console.log('MyProfilePassword', data);
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
      {/* {isNotSameError
      && <div className='popup__error'></div>} */}
      <div className="profile__form-block profile__form-block_btn">
        <button type="submit" className="profile__form-btn">save password</button>
      </div>
    </form>
  );
};

export default MyProfilePassword;
