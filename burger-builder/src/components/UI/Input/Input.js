import React from 'react';

import styles from './Input.module.css';

const input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case ('input'):
      inputElement = <input 
        className={styles.InputElement} 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.onChange} />;
      break;
    case ('textarea'):
      inputElement = <textarea 
        className={styles.InputElement} 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.onChange} />;
      break;
      case ('select'):
          inputElement = (
            <select 
              className={styles.InputElement}
              value={props.value}
              onChange={props.onChange}>
              {props.elementConfig.options.map(option => (
                <option 
                  key={option.value}
                  value={option.value}>{option.displayName}</option>
              ))}
            </select>
          );
          break;
    default:
        inputElement = <input 
        className={styles.InputElement} 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.onChange} />;
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
}

export default input;
