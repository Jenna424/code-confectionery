import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../actions/actionTypes';

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

export default connect(mapStateToProps, mapDispatchToProps)(CakeConstructor);

{/* 
// mapStateToProps stores an arrow function that accepts the entire Redux store state object as an argument.
// It implicitly returns a JS object with the portion of the Redux store state that we want to update.
// and this is used to determine what, if anything, should be re-rendered depending on if anything has changed

// mapDispatchToProps stores an arrow function that accepts the dispatch function as an argument
// It implicitly returns a JS object with props function mappings.
// The keys in the returned object are the names of action-dispatching arrow function objects
// and whose corresponding values are the callback functions that, when triggered, will invoke dispatch function
// with an action object returning by invoking the action creator function
*/}