import React from 'react';
import styles from './DynamicFormElement.module.css';

const DynamicFormElement = ({ stringTag, tagContents, labelText, value, mustValidate, isInvalid, handleOnChange, interactedWith }) => {
  const tagClassesArray = [styles.genericTag];
  let validationErrorMessage = null;

  if (interactedWith && mustValidate && isInvalid) {
    tagClassesArray.push(styles.validationErrorMessage)
  }
  
  if (interactedWith && isInvalid) {
    validationErrorMessage = <span style={{color: 'red'}}>{labelText} must be valid. Please try again!</span>
  }

  let htmlTag = null;
  

  switch (stringTag) {
    case 'select':
      htmlTag = (
        <select
          className={tagClassesArray.join(' ')}
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
  	  htmlTag = <textarea className={tagClassesArray.join(' ')} {...tagContents} value={value} onChange={handleOnChange} />;
  	  break;
  	default:
  	  htmlTag = <input className={tagClassesArray.join(' ')} {...tagContents} value={value} onChange={handleOnChange} />;
  }

  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>{labelText}:&nbsp;</label>
      {htmlTag}
      {validationErrorMessage}
    </div>
  )
}

export default DynamicFormElement;
