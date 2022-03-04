const GoBackHeader = ({
  goBack, title, icon, rightInfo,
}) => (
  <div className="menu-back">
    <button onClick={goBack} type="button" className="menu-back__icon-box">
      <span className="img-container">
        <svg className="menu-back__arrow" width="30" height="26">
          <use xlinkHref="#menu-arrow-left" />
        </svg>
      </span>
    </button>
    <div className="menu-back__title">
      {icon && <div className="message__title-icon">
        <div className="img-container">
          <svg className="menu-back__title-svg">
            <use xlinkHref={`#${icon}`} />
          </svg>
        </div>
      </div>}
      {title}
    </div>
    {rightInfo && <div className="menu__back-message-count">{rightInfo}</div>}
  </div>
);

export default GoBackHeader;
