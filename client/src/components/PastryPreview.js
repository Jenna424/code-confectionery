import React, { Fragment } from 'react';

const PastryPreview = ({ cakeLayout }) => {
  const layerLis = cakeLayout.map(layerObject => <li key={layerObject.id}>{layerObject.flavor}</li>)
  return (
    <Fragment>
      <h3><em>Preview your pastry prior to purchase</em></h3>
      <p>Your cake contains the following layers, listed from top to bottom:</p>
      <ul>
        {layerLis}
      </ul>
    </Fragment>
  )
}

export default PastryPreview;