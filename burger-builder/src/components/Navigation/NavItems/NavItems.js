import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './NavItems.module.css';

const navItems = (props) => {
  return (
    <ul className={styles.NavigationItems}>
      <NavItem link="/">Burger Builder</NavItem>
      <NavItem link="/orders">Orders</NavItem>
    </ul>
  );
}

export default navItems;
