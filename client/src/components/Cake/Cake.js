import React from 'react';
import styles from './Cake.module.css';

const Cake = () => {
  return (
    <div className={styles.cakeContainer}>
      <div className={styles.cakeBoard}></div>
    </div>
  )
}

export default Cake;