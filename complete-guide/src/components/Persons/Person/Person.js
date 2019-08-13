import React, {Component} from 'react';
// use Radium for styles:
// import Radium from 'radium';
// use CSS modules for styles
import styles from './Person.css';
// more information on using CSS modules:
// https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet
// Note: this project is using an older version of create-react-app

// npm install --save prop-types
import PropTypes from 'prop-types';

// use function based components as often as possible because they do not have state, and state should be kept to a minimum

// react will update the DOM if props changes

class Person extends Component {

  // use radium to use media queries in inline styles
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // };

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    if (this.props.focus) this.inputElementRef.current.focus();
  }

  render() {
    return (
      <div className={styles.Person} /*style={style}*/> 
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input 
          // ref={(el) => { this.inputElement = el }}
          ref={this.inputElementRef}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} />
      </div>
    );
  }
}

Person.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  focus: PropTypes.bool
};

// export default Radium(person);
export default Person;
