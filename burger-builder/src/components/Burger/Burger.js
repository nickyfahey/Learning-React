import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let ingArray = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])] // [,]
        .map( (_, i) => {
          return <BurgerIngredient 
            key={igKey + i} 
            type={igKey} />
        }); 
    }).reduce((arr, el) => {
      return arr.concat(el);
    }, []); // flattened array
  
  if (ingArray.length === 0) {
    ingArray = <p>Please start adding ingredients!</p>
  }
  
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingArray}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;
