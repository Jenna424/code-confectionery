import React from 'react';
import styles from './DynamicFormElement.module.css';

const DynamicFormElement = ({ stringTag, tagContents, labelText, value, mustValidate, formIsInvalid, handleOnChange, interactedWith }) => {
  const tagClassesArray = [styles.genericTag];

  let htmlTag = null;

  switch (stringTag) {
  	case 'select':
  	  htmlTag = (
  	    <select value={value} onChange={handleOnChange}>
  	      <option>Option A</option>
  	      <option>Option B</option>
  	    </select>
  	  );
  	  break;
  	case 'textarea':
  	  htmlTag = <textarea value={value} onChange={handleOnChange} />;
  	  break;
  	default:
  	  htmlTag = <input value={value} onChange={handleOnChange} />;
  }

  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>{labelText}</label>
      {htmlTag}
    </div>
  )
}

export default DynamicFormElement;
