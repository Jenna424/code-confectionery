import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createFlavoredLayer } from '../../actions/flavorForm';

class FlavorForm extends Component {
  handleOnChange = event => {
  
  }
  render() {
    const { flavor, pastryPart } = this.props.flavorFormData;
    return (
      <div>
        <h2>Propose a New Flavor for a Cake Layer</h2>
        <form>
          <div>
            <label htmlFor="flavor">Flavor:</label>
            <input 
              type="text"
              name="flavor"
              placeholder="Fill in this field with a new flavor for a cake layer..." 
              onChange={this.handleOnChange} 
              value={flavor}
            />
          </div>
          <div>
            <label htmlFor="pastry_part">Select the type of cake layer that contains this flavor:</label>
            <select name="pastry_part" onChange={this.handleOnChange}>
              <option value={pastryPart}>Pick Pastry Part</option>
              <option value="batter">Batter</option>
              <option value="filling">Filling</option>
            </select>
          </div>
          <button type="submit">Submit Flavor</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  flavorForm: state.flavorForm
})

const mapDispatchToProps = dispatch => ({
  createFlavoredLayer: layer => dispatch(createFlavoredLayer(layer))
})

export default connect(mapStateToProps, mapDispatchToProps)(FlavorForm);