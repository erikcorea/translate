import { useState } from "react";
import Textbox from "./components/Textbox";
import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {

  const [inputLanguage, setInputLanguage] = useState('English');
  const [outputLanguage, setOutputLanguage] = useState('Polish');

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  }

  return (
    <div className="App">
      <Textbox
        selectedLanguage={inputLanguage}
        style='input'
      />
      <div className="arrow-container" onClick={handleClick}>
        <Arrows />
      </div>
      <Textbox 
        selectedLanguage={outputLanguage}
        style='output'
      />
    </div>
  );
}

export default App;
