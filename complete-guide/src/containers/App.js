import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  // a STATEFULL (container, smart) component is a component that manages state
  // a STATELESS (presentational, dumb) component has no state management
  // it is good practice to use as many stateless components as possible to keep it clear where the state of the app is and keep the app maintainable

  // Class based react components (extends Component)
  // have state which cn contain any properties
  // changing state will cause react to render the DOM
  state = {
    persons: [
      { id: 'qqwertyui', name: 'Nicky', age: 30, 
        bio: 'I am awesome!', focus: true },
      { id: 'zxcvbnmnm', name: 'Sam', age: 23, focus: false },
      { id: 'asdfghjkl', name: 'Max', age: 28, focus: false }
    ],
    otherStateProp: "hello",
    showPersons: false,
    changeCounter: 0
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

    // setState schedules a state change that is not guaranteed to execute immediately
    // this.setState({ 
    //   persons: persons,
    //   changeCounter: this.state.changeCounter + 1 // wrong, may be unexpected state
    // });
    this.setState((prevState, props) => { 
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1 
        // guaranteed to be the expected previous state
      }
    });
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

    // Conditional Content "the javaScript way"
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    // In newer versions of react you can just use
    // <>
    //  ...
    // </>
    const frag = <React.Fragment>
      <p>Hello</p>
      <p>Fragment!</p>
    </React.Fragment>

    return (
      // Radium StyleRoot component needed for media queries to work
      // <StyleRoot>
      <div className={styles.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />

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

        {frag}
        
      </div>
      // </StyleRoot>
    );
  }
 
}

// component export must use Radium for sudo selectors and media queries to work
// export default Radium(App);

export default App;
