import classNames from 'classnames';

const SportMenuTabItem = ({
  name, active, svg, children,
}) => (
  <li className={classNames('sidebar__betTypeItem', { active })}>
    <div className="sidebar__betTypeInner">
      <button type="button" className="sidebar__betTypeButton">
        <div className="sidebar__betTypeIcon">
          <svg className="sidebar__betTypeSvg">
            <use xlinkHref={`#${svg}`} />
          </svg>
        </div>
        <div className="sidebar__betTypeName">{name}</div>
      </button>
    </div>
    {children}
  </li>
);

export default SportMenuTabItem;
