import React, { Component } from 'react';
import '../../components/shared/DynamicFormElement/DynamicFormElement';

class Authentication extends Component {
  state = {
    authFormInputs: {
      name: {
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
      password: {
        stringTag: 'input',
        tagContents: {
          type: 'password',
          placeholder: 'Enter your password...'
        },
        value: '',
        validationCriteria: {
          cannotBeBlank: true,
          minLength: 8
        },
        isValid: false,
        interactedWith: false
      }
    }
  }

  render() {
    const authFormInputsArray = [];

    for (let inputIdentifier in this.state.authFormInputs) {
      authFormInputsArray.push({
        id: inputIdentifier,
        setup: this.state.authFormInputs[inputIdentifier]
      })
    }

    return (
  	  <div className={styles.authFormContainer}>
  	    <form onSubmit={this.authenticateUser}>
  	      {authFormInputsArray.map(obj =>
  	        <DynamicFormElement
  	          key={obj.id}
  	          labelText={obj.id.charAt(0).toUpperCase() + obj.id.slice(1)}
  	          stringTag={obj.setup.stringTag}
  	          tagContents={obj.setup.tagContents}
  	          value={obj.setup.value}
  	          isInvalid={!obj.setup.isValid}
  	          interactedWith={obj.setup.interactedWith}
  	          handleOnChange={event => this.handleOnChange(event, obj.id)}
  	        />
  	      )}
  	    </form>
  	  </div>
  	);
  }
}

export default Authentication;

{/*
// Authentication container class component renders the Sign Up / Log In form
// I manage the form through the local state object of Authentication container class component
// (and not through Redux) because I'm only concerned about the local state, 
// the values that the user entered into the form fields
*/}