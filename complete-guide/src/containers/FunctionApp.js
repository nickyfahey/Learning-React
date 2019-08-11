// React hooks allow you to manage the state of function based components
// so that you would not need to use class based components

// import the react hook useState
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js'

const FunctionApp = props => {

  // react hook : useState
  // useState allows you to manage state in a functional component
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Nicky', age: 30 },
      { name: 'Max', age: 28 },
      { name: 'Bob', age: 18 }
    ]
    // don't include other state here so it does not need to be reset when setting personState
    // because unlike the setState of class based components useState will replace the ENTIRE state
  });

  const [otherState, setOtherState] = useState('some other state');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // the useState function will replace the WHOLE state
    // otherStateProps will no longer be there if they were in personState!
    setPersonsState({ 
      persons: [
        { name: 'Nicky', age: 30 },
        { name: 'Maximilian', age: 28 },
        { name: 'Bobby', age: 19 },
      ],
      // other state has to be added manually when using useState;
      // the more elegant way to do this is to use multiple useState calls
      // otherStateProp: personsState.otherStateProp
    })
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>This is JSX. Testing 123</p>
      {/* no () on the button function so it is not exacted immediately */}
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} 
              age={personsState.persons[0].age}>Hello World!</Person>
      <Person name={personsState.persons[1].name} 
              age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name}
              age={personsState.persons[2].age} />
    </div>
  );
 
}

export default FunctionApp;
