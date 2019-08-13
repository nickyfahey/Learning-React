import React, { useRef, useEffect, useContext } from 'react';
import styles from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    toggleBtnRef.current.click();
  }, []);

  // Inline js style
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
  if (props.persons.length < 3) {
    // pClasses.push('red');
    // use css modules:
    pClasses.push(styles.red);
  }
  if (props.persons.length < 2) {
    // pClasses.push('bold');
    pClasses.push(styles.bold);
  }

  let btnClass = '';
  if (props.showPersons) {
    // buttonStyle.backgroundColor = 'red';
    // buttonStyle[':hover'] = {
    //   backgroundColor: 'lightpink',
    //   color: 'black'
    // };
    btnClass = styles.Red; // string: class name
  }

  return (
    <div className={styles.Cockpit}>
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
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
        <button onClick={authContext.login}>Log in</button>
    </div>
  );
}

export default cockpit;
