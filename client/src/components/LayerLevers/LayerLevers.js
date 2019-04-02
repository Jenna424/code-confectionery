import React from 'react';

const LayerLevers = ({ batterLayers, fillingLayers, lastLayerLevered, onStackLayer, onUnstackLayer, cakeLayout }) => (
  <div>
    <p><em>Available Cake Batter Flavors</em></p>
    {batterLayers.map(layerObject =>
      <LayerLever
        key={layerObject.id}
        leverLabel={layerObject.flavor}
        onStackLayer={() => onStackLayer(layerObject)}
        onUnstackLayer={() => onUnstackLayer(layerObject)}
        disabled={lastLayerLevered === layerObject.pastry_part || cakeLayout[layerObject.flavor] === 0}
      />
    )}
    <p><em>Available Filling Flavors</em></p>
    {fillingLayers.map(layerObject =>
      <LayerLever
        key={layerObject.id}
        leverLabel={layerObject.flavor}
        onStackLayer={() => onStackLayer(layerObject)}
        onUnstackLayer={() => onUnstackLayer(layerObject)}
        disabled={lastLayerLevered === layerObject.pastry_part || cakeLayout[layerObject.flavor] === 0}
      />
    )}
  </div>
)

export default LayerLevers;