import { useState } from "react";
import Textbox from "./components/Textbox";
import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {

  const [showModal, setShowModal] = useState(null);

  const [inputLanguage, setInputLanguage] = useState('English');
  const [outputLanguage, setOutputLanguage] = useState('Polish');

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  }
  
  return (
    <div className="App">
      {!showModal && <>
        <Textbox
          selectedLanguage={inputLanguage}
          style='input'
          setShowModal={setShowModal}
        />
        <div className="arrow-container" onClick={handleClick}>
          <Arrows />
        </div>
        <Textbox 
          selectedLanguage={outputLanguage}
          style='output'
          setShowModal={setShowModal}
        />
      </>}

      {showModal && <Modal setShowModal={setShowModal}/>}
    </div>
  );
}

export default App;
