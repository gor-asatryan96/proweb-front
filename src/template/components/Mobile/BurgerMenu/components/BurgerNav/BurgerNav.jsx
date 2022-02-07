import React from 'react';
import BurgerMenuFooter from './components/BurgerMenuFooter/BurgerMenuFooter';
import BurgerNavLeft from './components/BurgerNavLeft/BurgerNavLeft';
import BurgerNavRight from './components/BurgerNavRight/BurgerNavRight';

const BurgerNav = ({ setActiveTab }) => <>
  <nav className="menu__content">
    <BurgerNavLeft setActiveTab={setActiveTab} />
    <BurgerNavRight />
  </nav>
  <BurgerMenuFooter />
</>;

export default BurgerNav;
