import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cakes extends Component {
  render() {
    return (
      <div>
        In the componentDidMount lifecycle method of Cakes container class component, I will fetch the index of cakes from my Rails API backend.
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cakes: state.pastryPurchaser.cakes,
  error: state.pastryPurchaser.error
})

export default connect(mapStateToProps, mapDispatchToProps)(Cakes);