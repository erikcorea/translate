import React from 'react';
import SelectDropDown from './SelectDropDown';

const Textbox = ({ style, selectedLanguage}) => {
  return (
    <div className={style}>
        <SelectDropDown 
            selectedLanguage={selectedLanguage}
        />
        <textarea 
            placeholder={style == 'input' ? "Enter Text": "Translation"}
            disabled={style == 'output'}
        />
    </div>
  )
}

export default Textbox