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
        inputIdentifier,
        setup: this.state.authFormInputs[inputIdentifier]
      })
    }

    return (
  	  <div className={styles.authenticationContainer}>
  	    <form>
  	      {authFormInputsArray.map(obj =>
  	        <DynamicFormElement
  	          key={obj.inputIdentifier}
  	          labelText={obj.inputIdentifier.charAt(0).toUpperCase() + obj.inputIdentifier.slice(1)}
  	          stringTag={obj.setup.stringTag}
  	          tagContents={obj.setup.tagContents}
  	          value={obj.setup.value}
  	          isInvalid={!obj.setup.isValid}
  	          interactedWith={obj.setup.interactedWith}
  	          handleOnChange={event => this.handleOnChange(event, obj.inputIdentifier)}
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