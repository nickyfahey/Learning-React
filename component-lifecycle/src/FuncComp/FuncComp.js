import React, { useEffect } from 'react';

const FuncComp = (props) => {
  // function after every render (create or update)
  // specify a second argument to only run when a certain property changes
  useEffect(() => {
    console.log("[FuncComp.js] useEffect - props.text1");
    // Http request...
    setTimeout(() => {
      console.log("pretend http request - text1");
    }, 1000);
  }, [props.text1]);

  // pass an empty array to useEffect to only run on creation
  // equivalent to componentDidMount
  useEffect(() => {
    console.log("[FuncComp.js] useEffect - first render");
    // Http request...
    setTimeout(() => {
      console.log("pretend http request - mount FuncComp");
    }, 1000);
    // cleanup function
    // equivalent to componentWillUnmount
    return () => {
      console.log("[FuncComp.js] useEffect - cleanup");
    }
  }, []);

  return (
    <div>
      <h2>A Functional Component</h2>
      <p>Text1: <input type="text1" 
        value={props.text1} 
        onChange={props.changed1}/> {props.text1}</p>
      <p>Text2: <input type="text2" 
        value={props.text2} 
        onChange={props.changed2}/> {props.text2}</p>
    </div>
  );
}

export default FuncComp;
