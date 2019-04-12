import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadLayers, stackLayer, unstackLayer } from '../../actions/layerLeveler';
import styles from './CakeConstructor.module.css';
import Modal from '../../components/shared/Modal/Modal';
import PastryPartsPreview from '../../components/PastryPartsPreview';
import Cake from '../../components/Cake/Cake';
import LayerLevers from '../../components/LayerLevers';

class CakeConstructor extends Component {

  state = {
    commenceCakeCheckout: false
  }

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

  commenceCakeCheckout = () => {
    this.setState({
      commenceCakeCheckout: true
    })
  }

  continueCakeCheckout = () => {
    this.props.history.push('/pastry-particulars')
  }

  cancelCakeCheckout = () => {
    this.setState({
      commenceCakeCheckout: false
    })
  }

  render() {
    const { layers, cakeLayout, cakeCost, error } = this.props;
    const batterLayers = layers.filter(layerObject => layerObject.pastry_part === 'batter');
    const fillingLayers = layers.filter(layerObject => layerObject.pastry_part === 'filling');
    const cakeBatterLayers = cakeLayout.filter(layerObject => layerObject.pastry_part === 'batter');
    const cakeFillingLayers = cakeLayout.filter(layerObject => layerObject.pastry_part === 'filling');
    return (
      <Fragment>
        <Modal viewable={this.state.commenceCakeCheckout} closed={this.cancelCakeCheckout}>
          <PastryPartsPreview
            cakeLayout={cakeLayout}
            cakeBatterLayers={cakeBatterLayers}
            cakeFillingLayers={cakeFillingLayers}
            cakeCost={cakeCost}
            continueCakeCheckout={this.continueCakeCheckout}
            cancelCakeCheckout={this.cancelCakeCheckout}
          />
        </Modal>
        <h2 style={{textAlign: 'center'}}>Create a Custom Cake</h2>
        <div style={{float: 'left', marginLeft: '10px'}}>
          <p style={{fontWeight: 'bold'}}>{layers.length ? 'Batter Flavors' : null}</p>
          {this.producePastryPartLevers(batterLayers)}
        </div>
        <div style={{float: 'right', marginRight: '10px'}}>
          <p style={{fontWeight: 'bold'}}>{layers.length ? 'Filling Flavors' : null}</p>
          {this.producePastryPartLevers(fillingLayers)}
        </div>
        <Cake cakeLayout={cakeLayout} cakeCost={cakeCost} error={error} />
        {cakeLayout.filter(layer => layer.pastry_part === 'batter').length > 0 && cakeLayout[0].pastry_part === 'batter' && cakeLayout[cakeLayout.length - 1].pastry_part === 'batter' &&
          <div style={{textAlign: 'center'}}>
            <button className="ui inverted pink button" onClick={this.commenceCakeCheckout}>Purchase Pastry</button>
          </div>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  layers: state.layerLeveler.layers,
  cakeLayout: state.layerLeveler.cakeLayout,
  cakeCost: state.layerLeveler.cakeCost,
  error: state.layerLeveler.error
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