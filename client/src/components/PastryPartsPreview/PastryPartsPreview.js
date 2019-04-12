import React, { Fragment } from 'react';
import { calculateCakePartProportions } from '../utils/logic';
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
  
  return (
  )
}

export default PastryPartsPreview;