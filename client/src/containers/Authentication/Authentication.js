import React, { Component } from 'react';
import '../../components/shared/DynamicFormElement/DynamicFormElement';
import { meetsValidationCriteria } from '../../utils/logic.js';
import styles from './Authentication.module.css';

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
          minimumLength: 8
        },
        isValid: false,
        interactedWith: false
      }
    }
  }

  handleOnChange = (event, inputId) => {
    const formDataWithChangedField = {
      ...this.state.authFormInputs, // copy over all key/value pairs in the authFormInputs object in the local state object of Authentication container
      [inputId]: { // override the configuration for the form field corresponding to the inputId of 'name' or 'password', whichever was passed in as argument to handleOnChange
        ...this.state.authFormInputs[inputId], // distribute all key/value pairs in the configuration object corresponding to that inputId
        value: event.target.value, // override value with value entered in form field
        isValid: meetsValidationCriteria(event.target.value, this.state.authFormInputs[inputId].validationCriteria) // override isValid, set = to calling meetsValidationCriteria imported function with the value entered in the form field (event.target.value) and the validationCriteria object containing validation rules for that inputId of name or password
        interactedWith: true // override interactedWith = true because when the user types something in the form field, this event handler is called
      }
    };

    this.setState({
      authFormInputs: formDataWithChangedField
    })
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
  	    <form>
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