import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

  // a STATEFULL (container, smart) component is a component that manages state
  // a STATELESS (presentational, dumb) component has no state management
  // it is good practice to use as many stateless components as possible to keep it clear where the state of the app is and keep the app maintainable

  // Class based react components (extends Component)
  // have state which cn contain any properties
  // changing state will cause react to render the DOM
  state = {
    persons: [
      { name: 'Nicky', age: 30 },
      { name: 'Max', age: 28 },
      { name: 'Bob', age: 18 }
    ],
    otherStateProp: "hello"
  }

  // using function syntax for methods would lead to errors if you tried to use 'this' in the method because it will no longer refer to the class
  updatePersonsHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Romana';
    // state should not be changed directly; react will not pick up on the change

    // use setState, a method inherited from Component
    // this replaces persons but not any other state properties
    this.setState({
      persons: [
        { name: 'Nicky', age: 30 },
        { name: newName, age: 28 },
        { name: 'Bobby', age: 19 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Nicky', age: 30 },
        { name: event.target.value, age: 28 },
        { name: 'Bobby', age: 19 },
      ]
    })
  }

  render() {
    // inline js style
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>This is JSX. Testing 123</p>
        {/* no () on the button function so it is not executed immediately */}
        {/* <button onClick={this.updatePersonsHandler}>Update Persons</button> */}

        {/* using an anonymous function to pass data: */}
        <button 
          style={buttonStyle}
          onClick={() => this.updatePersonsHandler('Maxi')}>Update Persons</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>I am awesome!</Person>
        {/* using bind to pass data: */}
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.updatePersonsHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

        {/* 
        Both these methods of passing parameters create a new function every render 
        If there are no parameters do not bind in the onClick it will cause more re-rendering than necessary because .bind() is called every time creating a new function
        If the handler needs to be dynamic consider caching the handlers if performance becomes a problem.
        For more information see:
        https://www.freecodecamp.org/news/the-best-way-to-bind-event-handlers-in-react-282db2cf1530/ 
        */}
      </div>
    );
  }
 
}

export default App;
