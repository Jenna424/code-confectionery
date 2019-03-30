import React, { Component } from 'react';

class CakeCustomizerForm extends Component {
  state = {
  	pastryPreferences: {
      occasion: {
        stringTag: 'select',
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
