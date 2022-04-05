import classNames from 'classnames';

const LivePanelItem = ({
  icon, title, active, onClick,
}) => (
  <li className="bet-match__panel__item">
    <button onClick={onClick} className={classNames('bet-match__panel__btn', { active })}>
      <span className="bet-match__panel__icon">
        <span className="img-container">
          <svg>
            <use xlinkHref={`#${icon}`} />
          </svg>
        </span>
      </span>
      <span className="bet-match__panel__name">
        {title}
      </span>
    </button>
  </li>
);

export default LivePanelItem;
