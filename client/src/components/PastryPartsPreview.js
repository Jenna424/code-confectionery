import React, { Fragment } from 'react';

const PastryPartsPreview = ({ cakeLayout, cakeCost }) => {
  const containsFilling = cakeLayout.filter(layerObject => layerObject.pastry_part === 'filling').length > 0;

  return (
    <Fragment>
      <h3><em>Preview Your Pastry Prior to Purchase</em></h3>
    </Fragment>
  )
}

export default PastryPartsPreview;