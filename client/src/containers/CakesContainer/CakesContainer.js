import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCakes } from '../../actions/pastryPurchaser';
import styles from '../../components/shared/sharedStyles.module.css';

class CakesContainer extends Component {

  componentDidMount() {
    this.props.loadCakes()
  }

  render() {
    const { cakes, error } = this.props;
    return (
      <div style={{textAlign: 'center'}}>
        <h2>Cakes Gallery</h2>
        {error ? <span className={styles.error}>Cakes menu could not be loaded</span> : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(CakesContainer);