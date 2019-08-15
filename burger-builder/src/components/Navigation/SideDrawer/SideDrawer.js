import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import styles from './SideDrawer.module.css';

const sideDraw = (props) => {
  return (
    <div className={styles.SideDraw}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav>
        <NavItems />
      </nav>
    </div>
  );
}

export default sideDraw;
