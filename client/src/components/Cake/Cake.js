import React from 'react';
import styles from './Cake.module.css';

const Cake = ({ cakeLayout }) => {
  const cakeLayers = cakeLayout.map(cakeObject => 
    <CakeLayer flavor={cakeObject.flavor} />
  )

  return (
    <div className={styles.cakeContainer}>
      <p>Graphical representation of the layer cake currently being created goes here</p>
    </div>
  )
}

export default Cake;