import React, { Component } from 'react';
import styles from './CakeLayer.module.css';

class CakeLayer extends Component {
  styleBatter = flavor => {
    let batterClasses = [styles.batter, styles.mysteryBatterFlavor];
    switch (flavor) {
      case 'Vanilla Sponge':
        batterClasses.push(styles.vanillaSponge);
        break;
      case 'Chocolate Sponge':
        batterClasses.push(styles.chocolateSponge);
        break;
      case 'Strawberry Shortcake':
        batterClasses.push(styles.strawberryShortcake);
        break;
      case 'Pumpkin':
        batterClasses.push(styles.pumpkin);
        break;
      case 'Gingerbread':
        batterClasses.push(styles.gingerbread);
        break;
      case 'Red Velvet':
        batterClasses.push(styles.redVelvet);
        break;
      case 'Carrot':
        batterClasses.push(styles.carrot);
        break;
      case 'Lemon':
        batterClasses.push(styles.lemon);
        break;
      case 'Banana':
        batterClasses.push(styles.banana);
        break;
      case 'Marble':
        batterClasses.push(styles.marble);
        break;
      case 'Coffee':
        batterClasses.push(styles.coffee);
        break;
      default:
        return batterClasses;
    }
    return batterClasses;
  }

  styleFilling = flavor => {
    let fillingClasses = [styles.filling, styles.mysteryFillingFlavor];
    switch (flavor) {
      case 'Buttercream':
        fillingClasses.push(styles.buttercream);
        break;
      case 'Chocolate Ganache':
        fillingClasses.push(styles.chocolateGanache);
        break;
      case 'Bavarian Cream':
        fillingClasses.push(styles.bavarianCream);
        break;
      case 'Dulce de Leche':
        fillingClasses.push(styles.dulceDeLeche);
        break;
      case 'Whipped Cream':
        fillingClasses.push(styles.whippedCream);
        break;
      case 'Keylime Pie':
        fillingClasses.push(styles.keylime);
        break;
      case 'Cream Cheese Frosting':
        fillingClasses.push(styles.creamCheese);
        break;
      case 'Raspberry Jam':
        fillingClasses.push(styles.raspberry);
        break;
      case 'Strawberry Jam':
        fillingClasses.push(styles.strawberry);
        break;
      case 'Blueberry Jam':
        fillingClasses.push(styles.blueberry);
        break;
      case 'Apricot Preserves':
        fillingClasses.push(styles.apricot);
        break;
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