import React from 'react';

const UserInput = (props) => {
  const style = {
    display: "block",
    width: "90%",
    margin: "auto",
    fontSize: "20px"
  }

  return (
    <input 
      style={style}
      type="text" 
      onChange={props.onChange} value={props.name} />
  );
}

export default UserInput;
