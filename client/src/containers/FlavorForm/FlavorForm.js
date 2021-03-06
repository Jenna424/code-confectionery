import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFlavorFormData } from '../../actions/flavorForm';
import { proposeFlavoredLayer } from '../../actions/layerLeveler';
import formStyles from './FlavorForm.module.css';
import styles from '../../components/shared/DynamicFormElement/DynamicFormElement.module.css';

class FlavorForm extends Component {

  handleOnChange = event => {
    const currentFlavorFormData = {
      ...this.props.flavoredLayerData,
      [event.target.name]: event.target.value
    }
    this.props.updateFlavorFormData(currentFlavorFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.proposeFlavoredLayer(this.props.flavoredLayerData)
  }

  render() {
    const { flavor, pastryPart } = this.props.flavoredLayerData;
    return (
      <div className={formStyles.flavorFormContainer}>
        <h2>Propose a New Flavor for a Cake Layer</h2>
        <form onSubmit={this.handleOnSubmit}>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="flavor">Fill in the field below with a new flavor for a cake layer:</label>
            <input
              className={styles.genericTag}
              type="text"
              name="flavor"
              placeholder="Enter a batter or filling flavor here..." 
              onChange={this.handleOnChange} 
              value={flavor}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="pastry_part">Select the type of cake layer that contains this flavor:</label>
            <select className={styles.genericTag} name="pastry_part" onChange={this.handleOnChange}>
              <option value="">Pick Pastry Part</option>
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
  flavoredLayerData: state.flavorForm
})

export default connect(mapStateToProps, { proposeFlavoredLayer, updateFlavorFormData })(FlavorForm);