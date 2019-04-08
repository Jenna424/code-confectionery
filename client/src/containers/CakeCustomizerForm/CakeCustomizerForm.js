import React, { Component } from 'react';
import { connect } from 'react-redux';
import { meetsValidationCriteria } from '../../utils/logic.js';
import DynamicFormElement from '../../components/shared/DynamicFormElement/DynamicFormElement';
import { createCake } from '../../actions/pastryPurchaser';
import styles from './CakeCustomizerForm.module.css';

class CakeCustomizerForm extends Component {
  state = {
    wholeFormIsValid: false,
    pastryParticulars: {
      customer: {
        stringTag: 'input',
        tagContents: {
          type: 'text',
          placeholder: 'Enter your name here...'
        },
        value: '',
        validationCriteria: {
          cannotBeBlank: true
        },
        isValid: false,
        interactedWith: false
      },
      name: {
        stringTag: 'input',
        tagContents: {
          type: 'text',
          placeholder: 'Propose a pastry name for our cake menu...'
        },
        value: '',
        validationCriteria: {
          cannotBeBlank: true
        },
        isValid: false,
        interactedWith: false
      },
      occasion: {
        stringTag: 'select',
        tagContents: {
          optionsArray: [
            {value: '', label: 'Select the occasion that calls for this cake'},
            {value: 'just because', label: 'Just because...'},
            {value: 'birthday', label: 'Birthday'},
            {value: 'b mitzvah', label: 'Bar/Bat Mitzvah'},
            {value: 'sweet 16', label: 'Sweet Sixteen'},
            {value: 'graduation', label: 'Graduation'},
            {value: 'bridal shower', label: 'Bridal Shower'},
            {value: 'wedding', label: 'Wedding'},
            {value: 'anniversary', label: 'Anniversary'},
            {value: 'baby shower', label: 'Baby Shower'},
            {value: 'holiday', label: 'Holiday'},
            {value: 'open house', label: 'Open House'},
            {value: 'farewell', label: 'Farewell'},
            {value: 'retirement', label: 'Retirement'},
            {value: 'other', label: 'Other'}
          ]
        },
        validationCriteria: {
          cannotBeBlank: true
        },
        isValid: false,
        interactedWith: false
      },
      message: {
        stringTag: 'input',
        tagContents: {
          type: 'text',
          placeholder: 'Enter a custom message to display on your cake...'
        },
        value: '',
        validationCriteria: {},
        isValid: true,
        interactedWith: false
      },
      diameter: {
        stringTag: 'input',
        tagContents: {
          type: 'text',
          placeholder: 'Specify your desired dessert diameter (number of inches)',
        },
        value: '',
        validationCriteria: {
          numberIsRequired: true
        },
        isValid: false,
        interactedWith: false
      },
      garnish: {
        stringTag: 'select',
        tagContents: {
          optionsArray: [
            {value: '', label: 'Choose an edible garnish for pastry plating and presentation'},
            {value: 'rainbow sprinkles', label: 'Rainbow Sprinkles'},
            {value: 'chocolate sprinkles', label: 'Chocolate Sprinkles'},
            {value: 'sea salt', label: 'Sea Salt'},
            {value: 'powdered sugar', label: 'Powdered Sugar'},
            {value: 'gummy bears', label: 'Gummy Bears'},
            {value: 'cookie crumbs', label: 'Cookie Crumbs'},
            {value: 'chopped nuts', label: 'Chopped Nuts'},
            {value: 'edible roses', label: 'Edible Rose'},
            {value: 'buttercream swirls', label: 'Buttercream Swirls'},
            {value: 'chocolate syrup', label: 'Chocolate Syrup'},
            {value: 'whipped cream', label: 'Whipped Cream Dollop'},
            {value: 'fresh fruit', label: 'Fresh Fruit'},
            {value: 'none', label: 'None'}
          ]
        },
        validationCriteria: {
          cannotBeBlank: true
        },
        isValid: false,
        interactedWith: false
      },
      toppers: {
        stringTag: 'select',
        tagContents: {
          optionsArray: [
            {value: '', label: 'Choose a cake topper for dessert decoration'},
            {value: 'birthday candles', label: 'Birthday Candles'},
            {value: 'wedding figurines', label: 'Bride and Groom Figurines'},
            {value: 'sparklers', label: 'Sparklers'},
            {value: 'monogrammed metal topper', label: 'Monogrammed Metal Topper'},
            {value: 'text topper', label: 'Text Topper'},
            {value: 'none', label: 'None'}
          ]
        },
        validationCriteria: {
          cannotBeBlank: true
        },
        isValid: false,
        interactedWith: false
      }
    }
  }

  handleOnChange = (event, pastryParticularsProperty) => {
    let wholeFormIsValid = true;

    const pastryParticularsCopy = {...this.state.pastryParticulars};
    const propertyObjectCopy = {...pastryParticularsCopy[pastryParticularsProperty]};
    propertyObjectCopy.value = event.target.value;
    propertyObjectCopy.isValid = meetsValidationCriteria(propertyObjectCopy.value, propertyObjectCopy.validationCriteria);
    propertyObjectCopy.interactedWith = true;
    pastryParticularsCopy[pastryParticularsProperty] = propertyObjectCopy;

    for (let pastryParticularsProperty in pastryParticularsCopy) {
      wholeFormIsValid = pastryParticularsCopy[pastryParticularsProperty].isValid && wholeFormIsValid;
    }

    this.setState({
      pastryParticulars: pastryParticularsCopy,
      wholeFormIsValid
    })
  }

  handleOnSubmit = event => {
    event.preventDefault(); // prevent the default form submit action

    const { pastryParticulars } = this.state;
    const { cakeLayout, cakeCost, createCake, history } = this.props;
    const cakeCustomizations = {};

    for (let fieldProperty in pastryParticulars) {
      cakeCustomizations[fieldProperty] = pastryParticulars[fieldProperty].value;
    }

    const pastryPendingPurchase = {
      ...cakeCustomizations,
      price: cakeCost,
      layer_ids: cakeLayout.map(layerObject => layerObject.id)
    }

    createCake(pastryPendingPurchase)
    history.push('/cakes');
  }

  render() {
    const cakeCustomizerConfiguration = [];
    for (let fieldProperty in this.state.pastryParticulars) {
      cakeCustomizerConfiguration.push({
        fieldProperty,
        setup: this.state.pastryParticulars[fieldProperty]
      })
    }
    return (
      <div className={styles.cakeCustomizerContainer}>
        <h2>Cake Customizer Form</h2>
        <h3>Provide pastry particulars to complete your cake customization</h3>
        <form onSubmit={this.handleOnSubmit}>
          {cakeCustomizerConfiguration.map(fieldObject =>
            <DynamicFormElement
              key={fieldObject.fieldProperty}
              labelText={fieldObject.fieldProperty.charAt(0).toUpperCase() + fieldObject.fieldProperty.slice(1)}
              stringTag={fieldObject.setup.stringTag}
              tagContents={fieldObject.setup.tagContents}
              value={fieldObject.setup.value}
              isInvalid={!fieldObject.setup.isValid}
              mustValidate={fieldObject.setup.validationCriteria}
              interactedWith={fieldObject.setup.interactedWith}
              handleOnChange={event => this.handleOnChange(event, fieldObject.fieldProperty)}
            />
          )}
          <button onSubmit={this.handleOnSubmit} type="submit" disabled={!this.state.wholeFormIsValid}>Purchase Pastry</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cakeLayout: state.layerLeveler.cakeLayout,
  cakeCost: state.layerLeveler.cakeCost
})

const mapDispatchToProps = dispatch => ({
  createCake: customizedCake => dispatch(createCake(customizedCake))
})

export default connect(mapStateToProps, mapDispatchToProps)(CakeCustomizerForm);