import React from 'react';
import LayerLever from '../LayerLever/LayerLever';

const LayerLevers = ({ batterLayers, fillingLayers, stackLayer, unstackLayer, cakeLayout }) => {
  const lastLayerLevered = cakeLayout[cakeLayout.length - 1]; // the last layer object in the array (or undefined if the array is empty)

  const producePastryPartLevers = pastryPartLayers => (
    pastryPartLayers.map(layerObject =>
      <LayerLever
        key={layerObject.id}
        label={layerObject.flavor}
        stackLayer={() => stackLayer(layerObject)}
        unstackLayer={() => unstackLayer(layerObject)}
        disableStack={cakeLayout.length > 0 && layerObject.pastry_part === lastLayerLevered.pastry_part}
        disableUnstack={!(cakeLayout.length && cakeLayout.includes(layerObject) && layerObject.id === lastLayerLevered.id)}
      />
    )
  )

  return (
    <div style={{marginLeft: '10px'}}>
      <span><em>Batter Flavors</em></span>
      {producePastryPartLevers(batterLayers)}
      <br />
      <span><em>Filling Flavors</em></span>
      {producePastryPartLevers(fillingLayers)}
    </div>
  )
}

export default LayerLevers;

{/*
// You can only remove (unstack) a cake layer from the cake if the following conditions are met:
// 1). The cake object element that you want to remove exists in the cakeLayout array.
// 2). The layer that you want to remove is the layer you just stacked on top of the cake.
// (You should be able to remove layers from a cake in the reverse order in which the layers were added to the cake)
*/}