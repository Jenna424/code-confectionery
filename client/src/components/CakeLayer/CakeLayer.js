import React, { Component } from 'react';
import styles from './CakeLayer.module.css';

class CakeLayer extends Component {
  styleBatter = flavor => {
    let batterClasses = [styles.batter, styles.mysteryBatterFlavor];
    switch (flavor) {
      case 'Red Velvet':
        batterClasses.push(styles.redVelvet);
        break;
      case 'Carrot':
        batterClasses.push(styles.carrot)
        break;
      default:
        return batterClasses;
    }
    return batterClasses;
  }

  styleFilling = flavor => {
    let fillingClasses = [styles.filling, styles.mysteryFillingFlavor];
    switch (flavor) {
      case 'Keylime Pie':
        fillingClasses.push(styles.keylime);
        break;
      case 'Chocolate Ganache':
        fillingClasses.push(styles.chocolateGanache);
      default:
        return fillingClasses;
    }
    return fillingClasses;
  }

  render() {
    let pastryPart = this.props.cakeObject.pastry_part;
    let flavor = this.props.cakeObject.flavor;

    let layerStyles = pastryPart === 'batter' ? this.styleBatter(flavor) : this.styleFilling(flavor);

    return (
      <div data-flavor={flavor} className={layerStyles.join(' ')}></div>
    )
  }
}

export default CakeLayer;