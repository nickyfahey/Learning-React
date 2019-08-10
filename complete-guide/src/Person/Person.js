import React from 'react';
import './Person.css';

// use function based components as often as possible because they do not have state, and state should be kept to a minimum

// react will update the DOM if props changes

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person;
