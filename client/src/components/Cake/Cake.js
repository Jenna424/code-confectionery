import React, { Fragment } from 'react';
import styles from './Cake.module.css';
import CakeLayer from './CakeLayer';

const Cake = ({ cakeLayout, error }) => {
  let cakeLayers = cakeLayout.map(cakeObject => 
    <CakeLayer flavor={cakeObject.flavor} />
  )

  if (!cakeLayers.length) {
    cakeLayers = (
      <Fragment>
        <div className={styles.standardSpongeTop}></div>
        <p><em>Swap this standard slab of spongecake for your custom cake confection!</em></p>
        <p><em>Please prepare your pastry by adding alternate layers of batter and filling</em></p>
        <div className={styles.standardSpongeBase}></div>
      </Fragment>
    )
  }

  let cakeClass = cakeLayout.length ? styles.cakeContainer : styles.standardSponge

  return (
    <div className={cakeClass}>
      {cakeLayers}
    </div>
  )
}

export default Cake;