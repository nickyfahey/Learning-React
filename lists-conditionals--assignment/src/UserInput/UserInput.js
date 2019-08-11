import React from 'react';

const userInput = (props) => {
  return (
    <div>
      <input type="text" onChange={props.onChange} value={props.text}/>
      <p>{props.text}</p>
    </div>
  );
}

export default userInput;
