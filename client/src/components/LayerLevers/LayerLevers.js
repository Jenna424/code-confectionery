import React from 'react';
import LayerLever from '../LayerLever/LayerLever';

const LayerLevers = ({ batterLayers, fillingLayers, lastLayerLevered, onStackLayer, onUnstackLayer, cakeLayout }) => (
  <div style={{marginLeft: '10px'}}>
    <span><em>Batter Flavors</em></span>
    {batterLayers.map(layerObject =>
      <LayerLever
        key={layerObject.id}
        leverLabel={layerObject.flavor}
        onStackLayer={onStackLayer}
        onUnstackLayer={onUnstackLayer}
        disabled={lastLayerLevered === layerObject.pastry_part || cakeLayout[layerObject.flavor] === 0}
        cakeLayout={cakeLayout}
      />
    )}
    <br />
    <span><em>Filling Flavors</em></span>
    {fillingLayers.map(layerObject =>
      <LayerLever
        key={layerObject.id}
        leverLabel={layerObject.flavor}
        onStackLayer={onStackLayer}
        onUnstackLayer={onUnstackLayer}
        disabled={lastLayerLevered === layerObject.pastry_part || cakeLayout[layerObject.flavor] === 0}
        cakeLayout={cakeLayout}
      />
    )}
  </div>
)

export default LayerLevers;