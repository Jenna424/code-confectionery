import React, { Fragment } from 'react';

const PastryPartsPreview = ({ cakeLayout, cakeCost, continueCakeCheckout, cancelCakeCheckout }) => {
  const containsFilling = cakeLayout.filter(layerObject => layerObject.pastry_part === 'filling').length > 0;
  let fillingFlavors = cakeLayout.filter(layerObject => layerObject.pastry_part === 'filling').map(fillingObject => fillingObject.flavor).join(', ');
  const batterFlavors = cakeLayout.filter(layerObject => layerObject.pastry_part === 'batter').map(batterObject => batterObject.flavor).join(', ');

  if (!containsFilling) {
    fillingFlavors = <p>Your cake does not contain any filling.</p>
  }

  return (
    <Fragment>
      <h3><em>Preview Your Pastry Prior to Purchase</em></h3>
      <div>
        <p><strong>Batter Layers</strong>:</p>
        {batterFlavors}
      </div>
      <br />
      <div>
        <p><strong>Filling Layers</strong>:</p>
        {fillingFlavors}
      </div>
      <br />
      <p><strong>Cake Cost</strong>: ${cakeCost.toFixed(2)}</p>
      <br />
    </Fragment>
  )
}

export default PastryPartsPreview;