import React from 'react';
import styles from './CakeMenuItem.module.css';

const CakeMenuItem = ({ name, flavorCombination, price }) => (
  <div>
    <h3 className={styles.cakeName}>{name.toUpperCase()}</h3>
    <p className={styles.flavorCombo}><em>{flavorCombination}</em></p>
    <small>${price.toFixed(2)}</small>
    <hr className={styles.dessertDivider} />
  </div>
)

export default CakeMenuItem;