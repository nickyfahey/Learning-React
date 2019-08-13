import React from 'react';

const withClass = (WrappedComponent, classes) => {
  return (props) => (
    <div className={classes}>
      <WrappedComponent {...props} />
    </div>
  );
}

export default withClass;

/*
  How to use:
  export default withClass(MyComponent, "classNameHere");
*/

// This style of higher order component often used for:
// adding js logic eg. analytics, error handling
