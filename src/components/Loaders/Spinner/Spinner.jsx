import s from './Spinner.module.scss';

const Spinner = ({ size = 10, color }) => (
  <div className={s.spinner}>
    <div className={s.bounce1} style={{ width: size, height: size, backgroundColor: color || 'white' }} />
    <div className={s.bounce2} style={{ width: size, height: size, backgroundColor: color || 'white' }} />
    <div className={s.bounce3} style={{ width: size, height: size, backgroundColor: color || 'white' }} />
  </div>
);

export default Spinner;
