import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadCakes } from '../../actions/pastryPurchaser';
import styles from '../../components/shared/sharedStyles.module.css';
import CakesMenu from '../../components/CakesMenu/CakesMenu';

class CakesContainer extends Component {

  componentDidMount() {
    this.props.loadCakes()
  }

  render() {
    const { cakes, error } = this.props;

    return (
      <Fragment>
        <div style={{textAlign: 'center'}}>
          <h2>Cakes Menu</h2>
          {error ? <span className={styles.error}>Cakes menu could not be loaded</span> : null}
        </div>
        {!error && <CakesMenu cakes={cakes} />}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.pastryPurchaser.loading,
  cakes: state.pastryPurchaser.cakes,
  error: state.pastryPurchaser.error
})

const mapDispatchToProps = dispatch => ({
  loadCakes: () => dispatch(loadCakes())
})

export default connect(mapStateToProps, mapDispatchToProps)(CakesContainer);