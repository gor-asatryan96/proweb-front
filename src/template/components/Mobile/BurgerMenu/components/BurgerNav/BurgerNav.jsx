import React from 'react';
import BurgerNavFooter from './components/BurgerNavFooter/BurgerNavFooter';
import BurgerNavLeft from './components/BurgerNavLeft/BurgerNavLeft';
import BurgerNavRight from './components/BurgerNavRight/BurgerNavRight';

const BurgerNav = ({ setActiveTab }) => <>
  <nav className="menu__content">
    <BurgerNavLeft setActiveTab={setActiveTab} />
    <BurgerNavRight />
  </nav>
  <BurgerNavFooter />
</>;

export default BurgerNav;
