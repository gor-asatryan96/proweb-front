import classNames from 'classnames';
import { useState } from 'react';
import { FORM_ERROR_MESSAGES } from '../../../../constants/errors.constants';
import s from './Input.module.scss';

const Input = ({
  error, eye, type = 'text', controllProps = {}, ...props
}) => {
  const [ isShow, setIsShow ] = useState(false);

  return (
    <>
      <div className={s.inputWrapper}>
        <input
          {...props}
          {...controllProps}
          type={isShow ? 'text' : type}
          className={classNames(s.input, { [s.error]: error, [s.inputWithEye]: eye })} />
        {eye
      && <button
        type='button'
        onClick={() => setIsShow(prev => !prev)}
        className={classNames(s.eye, { [s.eyeShow]: isShow })}>
        <span className="img-container">
          <svg>
            <use xlinkHref="#eye" />
          </svg>
        </span>
      </button>}
      </div>
      {error && <div className={s.errorMessage}>
        {error.message || FORM_ERROR_MESSAGES[error.type] || ''}
      </div>}
    </>
  );
};

export default Input;
