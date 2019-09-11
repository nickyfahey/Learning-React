import React from 'react';

import styles from './Order.module.css';

const order = (props) => {
  return (
    <div className={styles.Order}>
      <p>Ingredients: Salad (1)</p>
      <p>Price: <strong>£0.00</strong></p>
    </div>
  );
}

export default order;
