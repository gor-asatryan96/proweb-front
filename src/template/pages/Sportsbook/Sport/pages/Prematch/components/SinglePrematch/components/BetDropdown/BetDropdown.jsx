import classNames from 'classnames';
import { useState } from 'react';

const BetDropdown = ({ title, children }) => {
  const [ open, setOpen ] = useState(true);
  return (
    <li className="bet-ratio__extra__item">
      <button onClick={() => setOpen(prev => !prev)} className={classNames('bet-ratio__nav', { active: open })}>
        <span className="bet-ratio__nav__title">
          {title}
        </span>
        <span className="bet-ratio__nav__arrow arrow-bottom">
          <span className="img-container">
            <svg width="12px" height="7px">
              <use xlinkHref="#arrow-bottom" />
            </svg>
          </span>
        </span>
      </button>
      <ul className={classNames('bet-ratio__extra__more', { active: open })}>
        {children}
      </ul>
    </li>
  );
};

export default BetDropdown;
