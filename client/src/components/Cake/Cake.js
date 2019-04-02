import React from 'react';
import styles from './Cake.module.css';

const bakeBatterLayer = batterFlavor => {
  const cakeBatterClasses = [styles.batter];

  switch (batterFlavor) {
    case 'red velvet':
      cakeBatterClasses.push(styles.redVelvet);
      break;
    case 'carrot':
      cakeBatterClasses.push(styles.carrot);
      break;
    default:
      cakeBatterClasses.push(styles.mysteryFlavor)
  }

  return (
    <div data-flavor={batterFlavor} className={cakeBatterClasses.join(' ')}></div>
  )
}