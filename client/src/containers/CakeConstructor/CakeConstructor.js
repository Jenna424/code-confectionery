import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadLayers, stackLayer, unstackLayer } from '../../actions/cakeConstructor';
import styles from './CakeConstructor.module.css';
import Cake from '../../components/Cake/Cake';
import LayerLevers from '../../components/LayerLevers';

class CakeConstructor extends Component {

  componentDidMount() {
    this.props.loadLayers(); // executing action-dispatching arrow function (received from mapDispatchToProps) which, in turn, calls dispatch() to call function returned by loadLayers asynchronous action creator function, to hopefully successfully fetch layers from Rails API
  }

  producePastryPartLevers = pastryPartLayers => {
    const { cakeLayout, stackLayer, unstackLayer } = this.props;
    const lastLayerLevered = cakeLayout[cakeLayout.length - 1];
    return (
      pastryPartLayers.map(layerObject =>
        <LayerLevers
          key={layerObject.id}
          label={layerObject.flavor}
          stackLayer={() => stackLayer(layerObject)}
          unstackLayer={() => unstackLayer(layerObject)}
          disableStack={cakeLayout.length > 0 && layerObject.pastry_part === lastLayerLevered.pastry_part}
          disableUnstack={!(cakeLayout.length && cakeLayout.includes(layerObject) && layerObject.id === lastLayerLevered.id)}
        />
      )
    )
  }

  render() {
    const { layers, cakeLayout, cakeCost, error } = this.props;
    const batterLayers = layers.filter(layerObject => layerObject.pastry_part === 'batter');
    const fillingLayers = layers.filter(layerObject => layerObject.pastry_part === 'filling');
    return (
      <Fragment>
        <h2 style={{textAlign: 'center'}}>Create a Custom Cake</h2>
        <div style={{float: 'left', marginLeft: '10px'}}>
          <p style={{fontWeight: 'bold'}}>{layers.length ? 'Batter Flavors' : null}</p>
          {this.producePastryPartLevers(batterLayers)}
        </div>
        <div style={{float: 'right', marginRight: '10px'}}>
          <p style={{fontWeight: 'bold'}}>{layers.length ? 'Filling Flavors' : null}</p>
          {this.producePastryPartLevers(fillingLayers)}
        </div>
        <Cake cakeLayout={cakeLayout} error={error} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  layers: state.layers,
  cakeLayout: state.cakeLayout,
  cakeCost: state.cakeCost,
  error: state.error
})

const mapDispatchToProps = dispatch => ({
  stackLayer: layer => dispatch(stackLayer(layer)),
  unstackLayer: layer => dispatch(unstackLayer(layer)),
  loadLayers: () => dispatch(loadLayers())
})

export default connect(mapStateToProps, mapDispatchToProps)(CakeConstructor);

{/*
// mapStateToProps stores an arrow function that accepts the entire Redux store state object as an argument.
// It implicitly returns a JS object with the portion of the Redux store state that we want to update.
// and this is used to determine what, if anything, should be re-rendered depending on if anything has changed
// mapDispatchToProps stores an arrow function that accepts the dispatch function as an argument
// It implicitly returns a JS object with props function mappings.
// That is, the keys in the returned object are the names of action-dispatching arrow functions
// whose corresponding values are the callback arrow functions that, when triggered, 
// will invoke the dispatch function with the action object returned by invoking the action creator function
*/}