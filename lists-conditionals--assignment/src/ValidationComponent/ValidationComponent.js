import React from 'react';

const validationComponent = (props) => {
  const minTextLength = 7;

  let validationText = null;
  if (props.length < minTextLength) {
    validationText = "Text too short";
  } else {
    validationText = "Text long enough";
  }

  return (
    <div>
      <p>Text length: {props.length}</p>
      <p>{validationText}</p>
    </div>
  );
}

export default validationComponent;
