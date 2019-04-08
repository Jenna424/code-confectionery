import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCakes } from '../../actions/pastryPurchaser';

class Cakes extends Component {

  componentDidMount() {
    this.props.loadCakes()
  }
  
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

const mapDispatchToProps = dispatch => ({
  loadCakes: () => dispatch(loadCakes())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cakes);