import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCakes } from '../../actions/pastryPurchaser';
import styles from '../../components/shared/sharedStyles.module.css';
import CakeMenuItem from '../../components/CakeMenuItem/CakeMenuItem';

class CakesMenu extends Component {

  componentDidMount() {
    this.props.loadCakes()
  }

  render() {
    let dessertsDesigned;
    
    if (this.props.error) {
      dessertsDesigned = <span className={styles.error}>Cakes menu could not be loaded</span>
    } else if (!this.props.cakes.length) {
      dessertsDesigned = (
        <div className={styles.emptyMenu}>
          <p>No cakes have been customized.</p>
          <p>You may design a specialty cake for our menu <Link to='/'>here</Link>.</p>
        </div>
       )
    } else if (this.props.cakes.length) {
      dessertsDesigned = this.props.cakes.map(cakeObject =>
        <CakeMenuItem
          key={cakeObject.id}
          name={cakeObject.name}
          flavorCombination={cakeObject.flavor_combination}
          price={cakeObject.price}
        />
      )
    }

    return (
      <Fragment>
        <div style={{textAlign: 'center'}}>
          <h2><em>Cakes Menu</em></h2>
          <br />
          {dessertsDesigned}
        </div>
      </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(CakesMenu);