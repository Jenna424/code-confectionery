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

export default connect(mapStateToProps, mapDispatchToProps)(CakeConstructor);