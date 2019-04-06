import React from 'react';
import styles from './DynamicFormElement.module.css';

const DynamicFormElement = ({ stringTag, tagContents, value, formIsInvalid, handleOnChange }) => {
  let htmlTag = null;

  switch (stringTag) {
    case 'select':
      htmlTag = (
        <select
          value={value}
          onChange={handleOnChange}>
          {tagContents.optionsArray.map(optionObject =>
            <option key={optionObject.value} value={optionObject.value}>
              {optionObject.label}
            </option>
          )}
        </select>
      );
  	  break;
  	case 'textarea':
  	  htmlTag = <textarea {...tagContents} value={value} onChange={handleOnChange} />;
  	  break;
  	default:
  	  htmlTag = <input {...tagContents} value={value} onChange={handleOnChange} />;
  }

  return (
    <div className={styles.inputWrapper}>
      {htmlTag}
    </div>
  )
}

export default DynamicFormElement;
