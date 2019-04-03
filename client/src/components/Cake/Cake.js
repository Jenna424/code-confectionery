import React from 'react';
import styles from './Cake.module.css';

const Cake = ({ cakeLayout }) => {
  let cakeLayers = cakeLayout.map(cakeObject => 
    <CakeLayer flavor={cakeObject.flavor} />
  )

  if (!cakeLayers.length) {
    cakeLayers = <p>Please customize your cake by adding alternate layers of batter and filling!</p>;
  }

  return (
    <div className={styles.cakeContainer}>
      <p>Graphical representation of the layer cake currently being created goes here</p>
    </div>
  )
}

export default Cake;