import React, { Component } from 'react';
import '../../components/shared/DynamicFormElement/DynamicFormElement';

class Authentication extends Component {
  state = {
    authFormInputs: {
    }
  }

  render() {
  	return (
  	  <div>
  	    <form>
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