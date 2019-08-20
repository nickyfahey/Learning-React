import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <ul>
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
      </ul>
    </nav>
  );
}

export default navigation;
