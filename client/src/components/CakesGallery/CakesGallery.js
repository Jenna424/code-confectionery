import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './CakesGallery.module.css';

const CakesGallery = ({ cakes }) => {
  return (
    <Fragment>
      {!cakes.length &&
        <div className={styles.emptyGallery}>
      	  <p>No cakes have been customized.</p>
      	  <p>You may design a specialty cake for our menu <Link to='/'>here</Link>.</p>
      	</div>}
      {cakes.length &&
      	<div className={styles.cakesMenu}>
      	  {cakes.map(cakeObject =>
      	  	<CakeMenuItem 
      	  	  key={cakeObject.id}
      	  	  id={cakeObject.id}
      	  	  name={cakeObject.name}
      	  	  flavorCombination={cakeObject.flavor_combination}
      	  	  price={cakeObject.price}
      	  	/>
      	  )}
      	</div>}
    </Fragment>
  )
}

export default CakesGallery;