import React, { Fragment } from 'react';

const LayerLevers = ({ stackLayer, unstackLayer, disableStack, disableUnstack, label }) => (
  <Fragment>
    <div className="ui buttons">
      <button onClick={stackLayer} className="tiny ui compact button" disabled={disableStack}>+</button>
      <div className="or"></div>
    </div>
  </Fragment>
)

export default LayerLevers;