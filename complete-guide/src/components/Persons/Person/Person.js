import React from 'react';
// use Radium for styles:
// import Radium from 'radium';
// use CSS modules for styles
import styles from './Person.css';
// more information on using CSS modules:
// https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet
// Note: this project is using an older version of create-react-app

// use function based components as often as possible because they do not have state, and state should be kept to a minimum

// react will update the DOM if props changes

const person = (props) => {

  // use radium to use media queries in inline styles
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // };

  return (
    <div className={styles.Person} /*style={style}*/> 
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

// export default Radium(person);
export default person;
