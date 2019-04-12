import React, { Fragment } from 'react';
import { calculateCakePartProportions } from '../../utils/logic';
import styles from './PastryPartsPreview.module.css';

const PastryPartsPreview = ({ cakeBatterLayers, cakeFillingLayers, cakeCost, continueCakeCheckout, cancelCakeCheckout }) => {
  let fillingProportions;

  if (!cakeFillingLayers.length) {
    fillingProportions = <p>Your cake does not contain any filling.</p>
  } else {
    const fillingFlavors = Object.keys(calculateCakePartProportions(cakeFillingLayers));
    fillingProportions = fillingFlavors.map(fillingFlavor =>
      <p>{fillingFlavor}: {calculateCakePartProportions(cakeFillingLayers)[fillingFlavor]}</p>
    )
  }

  const batterFlavors = Object.keys(calculateCakePartProportions(cakeBatterLayers))
  const batterProportions = batterFlavors.map(batterFlavor =>
    <p>{batterFlavor}: {calculateCakePartProportions(cakeBatterLayers)[batterFlavor]}</p>
  )

  return (
    <Fragment>
      <h3><em>Preview Your Pastry Prior to Purchase</em></h3>
      <div>
        <p className={styles.proportionParagraph}><strong>Batter Layers</strong>:</p>
        {batterProportions}
      </div>
      <br />
      <div>
        <p className={styles.proportionParagraph}><strong>Filling Layers</strong>:</p>
        {fillingProportions}
      </div>
      <br />
      <p>
        <strong className={styles.price}>Cake Cost:</strong>
        <br />
        ${cakeCost.toFixed(2)}
      </p>
      <br />
      <button className="tiny ui pink button" onClick={continueCakeCheckout}>Continue Cake Checkout</button>
      <button className="tiny ui pink button" onClick={cancelCakeCheckout}>Cancel Cake Checkout</button>
    </Fragment>
  )
}

export default PastryPartsPreview;