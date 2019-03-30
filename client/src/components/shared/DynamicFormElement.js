import React from 'react';

const DynamicFormElement = props => {
  let htmlTag = null;

  switch (props.stringHtmlTag) {
  	case 'select':
  	  htmlTag = (
  	    <select>
  	      <option>Option A</option>
  	      <option>Option B</option>
  	    </select>
  	  );
  	  break;
  	case 'textarea':
  	  htmlTag = <textarea />;
  	  break;
  	default:
  	  htmlTag = <input />;
  }

  return (
    <div>
      <label>The actual label for the form element goes here.</label>
      {htmlTag}
    </div>
  )
}

export default DynamicFormElement;