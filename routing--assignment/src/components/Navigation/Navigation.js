import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <ul>
        <li><NavLink 
          to="/users" 
          activeClassName={styles.active}>Users</NavLink></li>
        <li><NavLink 
          to="/courses"
          activeClassName={styles.active}>Courses</NavLink></li>
      </ul>
    </nav>
  );
}

export default navigation;
