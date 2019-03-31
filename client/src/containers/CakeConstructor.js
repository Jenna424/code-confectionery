import React, { Component } from 'react';
import { connect } from 'react-redux';

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
*/}