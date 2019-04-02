import React from 'react';
import LayerLever from '../LayerLever/LayerLever';

const LayerLevers = ({ batterLayers, fillingLayers, lastLayerLevered, stackLayer, unstackLayer, cakeLayout }) => (
  <div style={{marginLeft: '10px'}}>
    {Object.keys(cakeLayout).length && Object.keys(cakeLayout).map(flavorName => <li key={flavorName}>{flavorName} - {cakeLayout[flavorName]}</li>)}
    <span><em>Batter Flavors</em></span>
    {batterLayers.map(layerObject =>
      <LayerLever
        key={layerObject.id}
        layer={layerObject}
        leverLabel={layerObject.flavor}
        stackLayer={stackLayer}
        ustackLayer={unstackLayer}
        disabled={lastLayerLevered === layerObject.pastry_part}
        cakeLayout={cakeLayout}
      />
    )}
    <br />
    <span><em>Filling Flavors</em></span>
    {fillingLayers.map(layerObject =>
      <LayerLever
        key={layerObject.id}
        layer={layerObject}
        leverLabel={layerObject.flavor}
        stackLayer={stackLayer}
        unstackLayer={unstackLayer}
        disabled={lastLayerLevered === layerObject.pastry_part || cakeLayout[layerObject.flavor] === 0}
        cakeLayout={cakeLayout}
      />
    )}
  </div>
)

export default LayerLevers;