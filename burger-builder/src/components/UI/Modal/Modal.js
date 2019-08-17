import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const model = (props) => {
  console.log("[Modal] render");
  
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div 
        className={styles.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </>
  );
}

export default React.memo(model, (prevProps, nextProps) => {  
  // if the modal is not showing only re-render to show it
  return !nextProps.show && (prevProps.show === nextProps.show);
});
