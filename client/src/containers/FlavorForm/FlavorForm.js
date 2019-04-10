import React, { Component } from 'react';

class FlavorForm extends Component {
  render() {
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
        </form>
      </div>
    )
  }
}

export default FlavorForm;