import classNames from 'classnames';

const BetDropdown = ({
  active, title, toggle, children,
}) => (
  <li className="bet-ratio__extra__item">
    <button onClick={toggle} className={classNames('bet-ratio__nav', { active })}>
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
    <ul className={classNames('bet-ratio__extra__more', { active })}>
      {children}
    </ul>
  </li>
);

export default BetDropdown;
