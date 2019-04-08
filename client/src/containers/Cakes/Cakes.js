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

export default Cakes;