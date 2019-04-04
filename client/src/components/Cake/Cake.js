import React, { Fragment } from 'react';
import styles from './Cake.module.css';
import CakeLayer from './CakeLayer';

const Cake = ({ cakeLayout, error }) => {
  let defaultFilling;

  let cakeLayers = cakeLayout.map(cakeObject => 
    <CakeLayer key={cakeObject.id} cakeObject={cakeObject} />
  )

  if (error) {
    defaultFilling = <p className={styles.error}>Unable to load flavor combinations for your custom cake creation</p>
  } else if (!cakeLayers.length) {
    defaultFilling = (
      <Fragment>
        <p><em>Swap this standard slab of spongecake for your custom cake confection!</em></p>
        <p><em>Please prepare your pastry by adding alternate layers of batter and filling</em></p>
      </Fragment>
    )
  }

  if (error || !cakeLayers.length) {
    cakeLayers = (
      <Fragment>
        <div className={styles.standardSpongeTop}></div>
        {defaultFilling}
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