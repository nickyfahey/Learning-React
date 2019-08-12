import { isArray } from "util";

import React, {Component} from 'react';
import styles from './LifeCycleMethod.module.css'

class LifeCycleMethod extends Component {

  render() {
    console.log("[LifeCycleMethod.js] render");
    
    let code = null;
    if (this.props.methodText) {
      code = <code>{this.props.methodText}</code>;
    }
    
    let description = null;
    if (this.props.desc) {
      if (isArray(this.props.desc)) {
        description = this.props.desc.map((line, index) => {
          return <p key={index}>{line}</p>;
        });
      } else {
        description = <p>{this.props.desc}</p>;
      }
    }
      
    return (
      <div className={styles.methodBlock}>
        {code}
        {description}
      </div>
    );
  }

  componentWillUnmount() {
    console.log("[LifeCycleMethod.js] componentWillUnmount");
  }

}

export default LifeCycleMethod;
