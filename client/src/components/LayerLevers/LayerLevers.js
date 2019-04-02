import React from 'react';

const LayerLevers = ({ batterLayers, fillingLayers, lastLayerLevered, onStackLayer, onUnstackLayer, cakeLayout }) => (
  <div>
    <p>Available Cake Batter Flavors</p>
    {batterLayers.map(layerObject =>
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