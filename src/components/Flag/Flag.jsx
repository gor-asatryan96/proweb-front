import classNames from 'classnames';
import { FLAGS_CODES } from './constants/flag.constants';
import s from './Flag.module.scss';

const Flag = ({ country = '', code, size = 'xl' }) => (
  <div className={
      classNames(s['flags'], s[`flag-${size}`], s[`flag-${code || FLAGS_CODES[country.toLowerCase()] || ''}`])
    } />
);

export default Flag;
