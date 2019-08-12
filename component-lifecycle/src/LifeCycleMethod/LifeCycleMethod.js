import { isArray } from "util";

import React from 'react';
import styles from './LifeCycleMethod.module.css'

const lifeCycleMethod = (props) => {

  let code = null;
  if (props.methodText) {
    code = <code>{props.methodText}</code>;
  }

  let description = null;
  if (props.desc) {
    if (isArray(props.desc)) {
      description = props.desc.map((line, index) => {
        return <p key={index}>{line}</p>;
      });
    } else {
      description = <p>{props.desc}</p>;
    }
  }

  return (
    <div className={styles.methodBlock}>
      {code}
      {description}
    </div>
  );
}

export default lifeCycleMethod;
