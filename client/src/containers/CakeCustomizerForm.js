import React, { Component } from 'react';

class CakeCustomizerForm extends Component {
  state = {
  	pastryPreferences: {
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


