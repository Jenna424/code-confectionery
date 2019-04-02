import React from 'react';
import styles from './LayerLever.module.css';

const LayerLever = ({ leverLabel, lastLayerLevered, layer, cakeLayout, stackLayer, unstackLayer, disabled }) => (
  <div>
    <div className="ui buttons">
      <button onClick={() => stackLayer(layer)} className="tiny ui compact button">+</button>
      <div className="or"></div>
      <button onClick={() => unstackLayer(layer)} className="tiny ui compact pink button">-</button>
    </div>
    <label>&nbsp;{leverLabel}</label>
  </div>
)

export default LayerLever;