import cn from 'classnames';

const BetslipArrow = ({
  isBetslipOpen, clickHandler = () => {},
}) => (
  <span
    onClick={clickHandler}
    className={cn({
      'bet-item__arrow': !isBetslipOpen,
      'bet-item__nav__close': isBetslipOpen,
    })}>
    <span className="img-container">
      <svg width="18px" height="11px">
        <use xlinkHref="#arrow-bottom" />
      </svg>
    </span>
  </span>
);

export default BetslipArrow;
