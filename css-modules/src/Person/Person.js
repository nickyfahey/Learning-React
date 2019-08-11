import React from 'react';
import styles from './Person.module.css';
import '../App.css';

const Person = () => {
  return (
    <div className={styles.highlight + " card"}>
      .highlight from Person.module.css
    </div>
  );
}

export default Person;
