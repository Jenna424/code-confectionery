import React, { Component } from 'react';
import styles from './Cake.module.css';

class CakeLayer extends Component {
  styleBatter = flavor => {
    let batterClasses = [styles.batter];
    switch (flavor) {
      case ('Red Velvet'):
        batterClasses.push(styles.redVelvet);
        break;
      case ('Carrot'):
        batterClasses.push(styles.carrot)
        break;
      default:
        batterClasses.push(styles.mysteryFlavor)
    }
    return batterClasses;
  }
}

export default CakeLayer;