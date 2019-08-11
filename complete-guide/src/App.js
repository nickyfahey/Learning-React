import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
import styles from './App.css';
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
      { id: 'qqwertyui', name: 'Nicky', age: 30, bio: 'I am awesome!' },
      { id: 'zxcvbnmnm', name: 'Sam', age: 23 },
      { id: 'asdfghjkl', name: 'Max', age: 28 }
    ],
    otherStateProp: "hello",
    showPersons: false
  }

  // using function syntax for methods would lead to errors if you tried to use 'this' in the method because it will no longer refer to the class

  // updatePersonsHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Romana';
    // state should not be changed directly; react will not pick up on the change

    // use setState, a method inherited from Component
    // this replaces persons but not any other state properties
  //   this.setState({
  //     persons: [
  //       { name: 'Nicky', age: 30 },
  //       { name: newName, age: 28 },
  //       { name: 'Bobby', age: 19 },
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    
    // make a copy of the person so we are not mutating the state directly
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }
  
  togglePersonsHandler = () => {
    const isShowing = this.state.showPersons;
    this.setState({showPersons: !isShowing});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    // persons.splice(personIndex, 1);
    // this.setState({persons: persons});
    // Arrays are reference types so the splice above is already mutating the state
    // this could lead to unpredictable behaviour
    
    // Use slice without arguments to return a copy of the array
    // const persons = this.state.persons.slice();
    // or use the spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    // inline js style
    // Add the Radium higher order component to use sudo selectors:
    // 1. npm install --save radium
    // 2. import Radium from 'radium';
    // 3. export default Radium(App);
    // const buttonStyle = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };


    const pClasses = [];
    if (this.state.persons.length < 3) {
      // pClasses.push('red');
      // use css modules:
      pClasses.push(styles.red);
    }
    if (this.state.persons.length < 2) {
      // pClasses.push('bold');
      pClasses.push(styles.bold);
    }

    // Conditional Content "the javaScript way"
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            // if there is no key in a list react will re-render the entire list
            return <Person 
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              name={person.name}
              age={person.age}>{person.bio}</Person>
          })}
        </div>
      );

      // buttonStyle.backgroundColor = 'red';
      // buttonStyle[':hover'] = {
      //   backgroundColor: 'lightpink',
      //   color: 'black'
      // };
      btnClass = styles.Red; // string: class name
    }

    return (
      // Radium StyleRoot component needed for media queries to work
      // <StyleRoot>
      <div className={styles.App}>
        <h1>Everything is javaScript!</h1>
        {/* use join to get a valid css class list */}
        <p className={pClasses.join(' ')}>This is JSX.</p>

        {/* using an anonymous function to pass data: */}
        {/* <button 
          style={buttonStyle}
          onClick={() => this.updatePersonsHandler('Maxi')}>Update Persons 1</button> */}

        {/* using bind to pass data: */}
        {/* <button 
          style={buttonStyle}
          onClick={this.updatePersonsHandler.bind(this, 'Max!')}>Update Persons 2</button> */}

        {/* Both these methods of passing parameters create a new function every render 
        If there are no parameters do not bind in the onClick it will cause more re-rendering than necessary because .bind() is called every time creating a new function
        If the handler needs to be dynamic consider caching the handlers if performance becomes a problem.
        For more information see:
        https://www.freecodecamp.org/news/the-best-way-to-bind-event-handlers-in-react-282db2cf1530/ */}

        {/* no () on the button function so it is not executed immediately */}
        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {/* Conditional Content: 
        The persons are not added to the DOM until they are first shown; after that they hidden but remain in the DOM */}

        {/* <h2>Conditional Content Using Ternary Operator</h2>

        { this.state.showPersons ?
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}>I am awesome!</Person>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler} />
            <Person 
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div>
          : null
        } */}

        {/* <h2>Conditional Content "the javaScript way"</h2> */}
        {persons}
        
      </div>
      // </StyleRoot>
    );
  }
 
}

// component export must use Radium for sudo selectors and media queries to work
// export default Radium(App);

export default App;
