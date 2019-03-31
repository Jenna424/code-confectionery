import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadLayers, stackLayer, unstackLayer } from '../actions/cakeConstructor';
import styles from './CakeConstructor.module.css';

class CakeConstructor extends Component {

  componentDidMount() {
    this.props.onLoadLayers(); // executing action-dispatching arrow function (received from mapDispatchToProps) which, in turn, calls dispatch() to call function returned by loadLayers asynchronous action creator function, to hopefully successfully fetch layers from Rails API
  }

  render() {
    return (
      <div>
        <p style={{marginTop: '10px'}}>CakeConstructor container class component will present a graphical representation of the cake that the user is currently customizing!</p>
        {this.props.error ? <p style={{textAlign: 'center', padding: '2px 4px', color: '#c7254e', backgroundColor: '#f9f2f4', borderRadius: '4px'}}>Unable to load flavor combinations for custom cake creation</p> : <p>No error</p>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  layers: state.layers,
  error: state.error
})

const mapDispatchToProps = dispatch => ({
  onStackLayer: layer => dispatch(stackLayer(layer)),
  onUnstackLayer: layer => dispatch(unstackLayer(layer)),
  onLoadLayers: () => dispatch(loadLayers())
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