import React from 'react';
import SelectDropDown from './SelectDropDown';

const Textbox = ({ style, selectedLanguage, setShowModal}) => {
  return (
    <div className={style}>
        <SelectDropDown
            style={style}
            setShowModal={setShowModal}
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