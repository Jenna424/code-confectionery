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
        <h2>Cake Menu</h2>
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