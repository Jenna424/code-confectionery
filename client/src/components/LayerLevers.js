import React, { Fragment } from 'react';

const LayerLevers = ({ stackLayer, unstackLayer, disableStack, disableUnstack, label }) => (
  <Fragment>
    <div className="ui buttons">
      <button onClick={stackLayer} className="tiny ui compact button" disabled={disableStack}>+</button>
      <div className="or"></div>
      <button onClick={unstackLayer} className="tiny ui compact pink button" disabled={disableUnstack}>-</button>
    </div>
  </Fragment>
)

export default LayerLevers;