import { useState, useEffect } from "react";
import Textbox from "./components/Textbox";
import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";
import axios from 'axios';

function App() {

  const [showModal, setShowModal] = useState(null);

  const [inputLanguage, setInputLanguage] = useState('English');
  const [outputLanguage, setOutputLanguage] = useState('Polish');
  const [languages, setLanguages] = useState(null);

  const getLanguages = async () => {
    const options = {
      method: 'GET',
      url: 'https://google-translate20.p.rapidapi.com/languages',
      headers: {
        'X-RapidAPI-Key': 'dde1ba5765msh6eadd062d6a761dp177264jsnd2fa7b284443',
        'X-RapidAPI-Host': 'google-translate20.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data)
      const arrayOfData = Object.keys(response.data.data).map(key => response.data.data[key])
      setLanguages(arrayOfData)
    }).catch(function (error) {
      console.error(error);
    });
  }

  console.log('languages', languages);

  useEffect(() => {
    getLanguages()
  }, [])
  

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

      {showModal && <Modal setShowModal={setShowModal} languages={languages}/>}
    </div>
  );
}

export default App;
