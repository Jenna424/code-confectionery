import React from 'react';
import styles from './LayerLever.module.css';

const LayerLever = ({ leverLabel, lastLayerLevered, layer, cakeLayout, onStackLayer, onUnstackLayer, disabled }) => (
  <div>
    <div className="ui buttons">
      <button onClick={onStackLayer} className="tiny ui compact button">+</button>
      <div className="or"></div>
      <button onClick={onUnstackLayer} className="tiny ui compact pink button">-</button>
    </div>
    <label>&nbsp;{leverLabel}</label>
  </div>
)

export default LayerLever;