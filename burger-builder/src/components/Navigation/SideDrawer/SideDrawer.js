import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDraw = (props) => {
  const classes = [styles.SideDrawer, 
    props.open ? styles.Open : styles.Close];

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={classes.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </>
  );
}

export default sideDraw;
