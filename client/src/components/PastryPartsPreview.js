import React, { Fragment } from 'react';

const PastryPartsPreview = ({ cakeLayout, cakeCost }) => {
  const containsFilling = cakeLayout.filter(layerObject => layerObject.pastry_part === 'filling').length > 0;
  let fillingFlavors = cakeLayout.filter(layerObject => layerObject.pastry_part === 'filling').map(fillingObject => fillingObject.flavor).join(', ');

  return (
    <Fragment>
      <h3><em>Preview Your Pastry Prior to Purchase</em></h3>
    </Fragment>
  )
}

export default PastryPartsPreview;