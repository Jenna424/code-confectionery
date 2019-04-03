import React from 'react';
import styles from './LayerLever.module.css';

const LayerLever = ({ stackLayer, unstackLayer, disableStack, disableUnstack, flavorLabel }) => (
  <div>
    <div className="ui buttons">
      <button onClick={stackLayer} className="tiny ui compact button" disabled={disableStack}>+</button>
      <div className="or"></div>
      <button onClick={unstackLayer} className="tiny ui compact pink button" disabled={disableUnstack}>-</button>
    </div>
    <label>&nbsp;{flavorLabel}</label>
  </div>
)

export default LayerLever;