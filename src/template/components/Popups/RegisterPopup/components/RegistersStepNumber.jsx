import classNames from 'classnames';

const RegistersStepNumber = ({ active, number }) => (
  <li className={classNames('popup__step__item', { 'popup__step__item--active': active })}>
    <span className="img-container">
      {number}
    </span>
  </li>
);

export default RegistersStepNumber;
