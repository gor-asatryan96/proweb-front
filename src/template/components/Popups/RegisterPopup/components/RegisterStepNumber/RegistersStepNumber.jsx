import classNames from 'classnames';

const RegistersStepNumber = ({ active, step }) => (
  <li className={classNames('popup__step__item', { 'popup__step__item--active': active })}>
    <span className="img-container">
      {step}
    </span>
  </li>
);

export default RegistersStepNumber;
