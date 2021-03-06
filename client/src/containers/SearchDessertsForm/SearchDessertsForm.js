import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchDesserts } from '../../actions/searchDesserts';
import styles from './SearchDessertsForm.module.css';
import PastryPictures from '../../components/PastryPictures/PastryPictures';

class SearchDessertsForm extends Component {
  state = {
    searchTerm: ''
  }

  handleOnChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.searchDesserts(this.state.searchTerm)
  }

  render() {
    const { desserts, error } = this.props;
    return (
      <div className={styles.searchFormContainer}>
        <div className="ui segment">
          <form onSubmit={this.handleOnSubmit}>
            <div className="field">
              <label>Peruse pastries to gain inspiration for designing your dessert</label>:
              <br /><br />
              <input type="text" placeholder="Enter a type of cake..." onChange={this.handleOnChange} />
            </div>
            <br />
            <button type="submit">Search Desserts</button>
          </form>
        </div>
        {error ? <p className={styles.loadImagesError}>Images could not be loaded.</p> : <PastryPictures pictures={desserts} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  desserts: state.searchDesserts.desserts,
  error: state.searchDesserts.error
})

const mapDispatchToProps = dispatch => ({
  searchDesserts: keywords => dispatch(searchDesserts(keywords))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchDessertsForm)
