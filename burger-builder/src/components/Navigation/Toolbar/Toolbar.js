import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavItems />
      </nav>
    </header>
  );
}

export default toolbar;
