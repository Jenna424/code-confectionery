import React, { Fragment } from 'react';
import styles from './Cake.module.css';
import CakeLayer from './CakeLayer';

const Cake = ({ cakeLayout, error }) => {
  let defaultFilling;

  let cakeLayers = cakeLayout.map(cakeObject => 
    <CakeLayer flavor={cakeObject.flavor} />
  )

  let cakeClass = cakeLayout.length ? styles.cakeContainer : styles.standardSponge

  return (
    <div className={cakeClass}>
      {cakeLayers}
    </div>
  )
}

export default Cake;