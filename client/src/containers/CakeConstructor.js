import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as types from '../actions/actionTypes';
import { stackLayer, unstackLayer } from '../actions/cakeConstructor';

class CakeConstructor extends Component {
  render() {
    return (
      <div>
        CakeConstructor container class component will present a graphical representation of the cake that the user is currently customizing!
      </div>
    )
  }
}

const mapStateToProps = state => ({
  layers: state.layers
})

const mapDispatchToProps = dispatch => ({
  onStackLayer: layer => dispatch(stackLayer(layer)),
  onUnstackLayer: layer => dispatch(unstackLayer(layer))
})

export default connect(mapStateToProps, mapDispatchToProps)(CakeConstructor);

{/* 
// mapStateToProps stores an arrow function that accepts the entire Redux store state object as an argument.
// It implicitly returns a JS object with the portion of the Redux store state that we want to update.
// and this is used to determine what, if anything, should be re-rendered depending on if anything has changed

// mapDispatchToProps stores an arrow function that accepts the dispatch function as an argument
// It implicitly returns a JS object with props function mappings.
// That is, the keys in the returned object are the names of action-dispatching arrow functions
// whose corresponding values are the callback functions that, when triggered, 
// will invoke the dispatch function with the action object returned by invoking the action creator function
*/}