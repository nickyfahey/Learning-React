import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  // state in useState can be any type not just object
  // you can have multiple states with useState
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(event) => {
                // Get the value from the event so closure for the
                // setState function is of the variable newTitle and
                // not the event object.
                // const newTitle = event.target.value;
                // Closure over the event object causes an error because
                // react's synthetic events reuse event objects so the
                // event object may be out of sync when the state is set.
                // https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/15700330#questions/7881106
                // setState((prevState) => ({
                //   title: newTitle,
                //   amount: prevState.amount
                // }));
                // ^^ not needed with multiple states
                setTitle(event.target.value);
              }}
            />
          </div>

          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>

          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
