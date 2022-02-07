import { NavLink } from 'react-router-dom';
import { MAIN_ROUTES } from '../../configs/routes.configs';
import s from './Navbar.module.scss';

const Navbar = () => (
  <nav className={s.navbar}>
    <div>
      {MAIN_ROUTES.map(route => (
        <NavLink to={route.path} className={s.navItem}>{route.name}</NavLink>
      ))}
    </div>
  </nav>
);

export default Navbar;
