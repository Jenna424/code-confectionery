import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchDesserts } from '../../actions/searchDesserts';
import styles from './SearchDessertsForm.module.css';
import PastryPictures from '../../components/PastryPictures/PastryPictures';

class SearchForm extends Component {
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
    return (
      <div className={styles.searchFormContainer}>
        <div className="ui segment">
          <form onSubmit={this.handleOnSubmit}>
            <div className="field">
              <label>Peruse pastries to gain inspiration for designing your dessert</label>&nbsp;
              <input type="text" placeholder="Enter a type of cake here..." onChange={this.handleOnChange} />
            </div>
            <button type="submit">Search Desserts</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  desserts: state.searchDesserts.desserts
})

const mapDispatchToProps = dispatch => ({
  searchDesserts: keywords => dispatch(searchDesserts(keywords))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
