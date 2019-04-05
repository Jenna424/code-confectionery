import React, { Fragment } from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ viewable, closed, children }) => (
  <Fragment>
    <Backdrop viewable={viewable} hide={closed} />
    <div
      className={styles.modal}
      style={{transform: viewable ? 'translateY(0)' : 'translateY(-100vh)', 
      opacity: viewable ? '1' : '0'}}>
      {children}
    </div>
  </Fragment>
)

export default Modal;

// If the Modal is displayed, the Backdrop is also displayed.
// Modal functional component just receives props and returns JSX,
// namely, a <div> that wraps around dynamic content, i.e., props.children, to provide styling.
// vh is a unit that refers to viewport height
// consequently, the modal will slide off the screen
// opacity '0' means it's not visible