import React from 'react';

const DynamicFormElement = props => {
  let htmlTag = null;
  
  return (
    <div>
      <label>The actual label for the form element goes here.</label>
      <p>Replace this paragraph with the form element</p>
    </div>
  )
}

export default DynamicFormElement;