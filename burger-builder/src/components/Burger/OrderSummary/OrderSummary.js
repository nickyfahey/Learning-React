import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    });

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: £{props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button 
        btnType="Danger"
        onClick={props.purchaseCanceled}>CANCEL</Button>
      <Button 
        btnType="Success"
        onClick={props.purchaseContinued}>CONTINUE</Button>
    </>
  );
}

export default orderSummary;
