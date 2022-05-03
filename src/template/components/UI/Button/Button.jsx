import classNames from 'classnames';
import Spinner from '../../../../components/Loaders/Spinner/Spinner';
import s from './Button.module.scss';
import { BUTTON_SIZES } from './constants/button.constants';

const { M } = BUTTON_SIZES;

const Button = ({
  children, className, loading, disabled, size = M, ...props
}) => (
  <button
    {...props}
    disabled={loading || disabled}
    className={classNames(s.root, s[`size_${size}`], { [className]: className })}>
    {loading
      ? <div className={s.loader}><Spinner /></div>
      : children
    }

  </button>
);
export default Button;
