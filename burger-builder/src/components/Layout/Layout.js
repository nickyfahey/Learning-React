import React from 'react';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => {
  return (
    <>
      <Toolbar />
      <main className={styles.Content}>
        {props.children}
      </main>
    </>
  );
}

export default layout;
