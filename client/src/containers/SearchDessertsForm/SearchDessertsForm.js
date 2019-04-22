import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchDesserts } from '../../actions/searchDesserts';
import styles from './SearchDessertsForm.module.css';
import PastryPictures from '../../components/PastryPictures/PastryPictures';

class SearchForm extends Component {
  render() {
    return (
      <div className={styles.searchFormContainer}>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)