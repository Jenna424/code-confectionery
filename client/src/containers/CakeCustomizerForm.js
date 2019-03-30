import React, { Component } from 'react';
import { meetsValidationCriteria } from '../utils/logic.js';

class CakeCustomizerForm extends Component {
  state = {
  	pastryPreferences: {
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
            {value: 'holiday', label: 'Holiday'}
            {value: 'open house', label: 'Open House'},
            {value: 'farewell', label: 'Farewell'},
            {value: 'retirement', label: 'Retirement'},
            {value: 'just because', label: 'Just Because...'}
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
          type: 'number'
          min: 4,
          max: 14
        },
        value: 4, // default value is minimum diameter (4 inches)
        validationCriteria: {
          isNumber: true
        }
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
            {value: 'fresh fruit', label: 'Fresh Fruit'}
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
  render() {
    return (
      <div>
        <form>
        </form>
      </div>
    )
  }
}

export default CakeCustomizerForm;
stringTag, tagContents, labelText, value, mustValidate, formIsInvalid, handleOnChange, interactedWith


