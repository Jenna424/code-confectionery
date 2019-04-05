import React, { Fragment } from 'react';

const PastryPreview = ({ cakeLayout }) => {
  const layerLis = cakeLayout.map(layerObject => <li key={layerObject.id}>{layerObject.flavor}</li>)
  return (
    <Fragment>
      <h3><em>Preview Your Pastry Prior to Purchase</em></h3>
      <p>Your cake contains the following layers, listed from top to bottom:</p>
      <ul>
        {layerLis}
      </ul>
    </Fragment>
  )
}

export default PastryPreview;