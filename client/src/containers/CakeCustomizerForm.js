import React, { Component } from 'react';
import { connect } from 'react-redux';
import { meetsValidationCriteria } from '../utils/logic.js';
import DynamicFormElement from '../components/shared/DynamicFormElement/DynamicFormElement';

class CakeCustomizerForm extends Component {
  state = {
    wholeFormIsValid: false,
  	pastryParticulars: {
      customerName: {
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
      occasion: {
        stringTag: 'select',
        tagContents: {
          optionsArray: [
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
            {value: 'just because', label: 'Just Because...'},
            {value: 'other', label: 'Other'}
          ],
          value: 'just because',
          validationCriteria: {},
          isValid: true,
          interactedWith: false
        }
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
          type: 'number',
          min: 4,
          max: 14
        },
        value: 4, // default value is minimum diameter (4 inches)
        validationCriteria: {},
        isValid: true, // a number will always be selected due to the default number
        interactedWith: false
      },
      garnish: {
        stringTag: 'select',
        tagContents: {
          optionsArray: [
            {value: 'rainbow sprinkles', label: 'Rainbow Sprinkles'},
            {value: 'chocolate sprinkles', label: 'Chocolate Sprinkles'},
            {value: 'sea salt', label: 'Sea Salt'},
            {value: 'powdered sugar', label: 'Powdered Sugar'},
            {value: 'gummy bears', label: 'Gummy Bears'},
            {value: 'cookie crumbs', label: 'Cookie Crumbs'},
            {value: 'chopped nuts', label: 'Chopped Nuts'},
            {value: 'edible rose', label: 'Edible Rose'},
            {value: 'buttercream swirls', label: 'Buttercream Swirls'},
            {value: 'chocolate syrup', label: 'Chocolate Syrup'},
            {value: 'whipped cream', label: 'Whipped Cream Dollop'},
            {value: 'fresh fruit', label: 'Fresh Fruit'},
            {value: 'none', label: 'None'}
          ],
          value: null,
          validationCriteria: {
            cannotBeBlank: true
          },
          isValid: false,
          interactedWith: false
        }
      },
      toppers: {
        stringTag: 'select',
        tagContents: {
          optionsArray: [
            {value: 'birthday candles', label: 'Birthday Candles'},
            {value: 'wedding figurines', label: 'Bride and Groom Figurines'},
            {value: 'sparklers', label: 'Sparklers'},
            {value: 'monogrammed metal topper', label: 'Monogrammed Metal Topper'},
            {value: 'text topper', label: 'Text Topper'},
            {value: 'none', label: 'None'}
          ],
          value: null,
          validationCriteria: {
            cannotBeBlank: true
          },
          isValid: false,
          interactedWith: false
        }
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
    const { cakeLayout, cakeCost, purchasePastry } = this.props;
    const cakeCustomizations = {};

    for (let fieldProperty in pastryParticulars) {
      cakeCustomizations[fieldProperty] = pastryParticulars[fieldProperty].value;
    }

    const orderObject = {
      cakeCustomizations,
      cakeLayout,
      cakeCost
    }

    purchasePastry(orderObject)
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
      <div>
        <p><em>Fill out the following pastry particulars to customize your cake:</em></p>
        <form onSubmit={this.handleOnSubmit}>
          {cakeCustomizerConfiguration.map(fieldObject =>
            <DynamicFormElement
              key={fieldObject.fieldProperty}
              stringTag={fieldObject.setup.stringTag}
              tagContents={fieldObject.setup.tagContents}
              value={fieldObject.setup.value}
              isInvalid={!fieldObject.setup.isValid}
              mustValidate={fieldObject.setup.validationCriteria}
              interactedWith={fieldObject.setup.interactedWith}
              handleOnChange={event => this.handleOnChange(event, fieldObject.fieldProperty)}
            />
          )}
          <input type="submit" disabled={!this.state.wholeFormIsValid}>Purchase Pastry</input>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeCustomizerForm);