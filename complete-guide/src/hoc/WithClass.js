import React from 'react';

const WithClass = (props) => {
  return (
    <div className={props.classes}>
      {props.children}
    </div>
  );
}

export default WithClass;

/* 
  How to use:
  <WithClass classes="classNameHere">
    ...
  </WithClass>
*/

// Wrapping Component
// This style of higher order component often used for:
// adding html or changing styling 
