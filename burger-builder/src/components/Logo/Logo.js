import React from 'react';
import img from '../../assets/images/burger-logo.png'
import styles from './Logo.module.css';

const logo = (props) => {
  return (
    <div className={styles.Logo}>
      <img src={img} alt="Burger Builder"/>
    </div>
  );
}

export default logo;
