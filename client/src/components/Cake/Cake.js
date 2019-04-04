import React from 'react';
import styles from './Cake.module.css';
import CakeLayer from './CakeLayer';

const Cake = ({ cakeLayout }) => {
  let cakeLayers = cakeLayout.map(cakeObject => 
    <CakeLayer flavor={cakeObject.flavor} />
  )

  if (!cakeLayers.length) {
    cakeLayers = (
    <div style={{marginTop: '10px'}}>
      <h2>Create a Custom Cake</h2>
      <div className={styles.standardSpongeTop}></div>
        <p><em>Swap this standard slab of spongecake for your custom cake confection!</em></p>
        <p><em>Please prepare your pastry by adding alternate layers of batter and filling</em></p>
      <div className={styles.standardSpongeBase}></div>
    </div>
    )
  }

  let cakeClass = (cakeLayout.length) ? styles.cakeContainer : styles.standardSponge

  return (
    <div className={cakeClass}>
      {cakeLayers}
    </div>
  )
}

export default Cake;