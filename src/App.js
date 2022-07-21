import { useState, useEffect } from "react";
import Textbox from "./components/Textbox";
import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";
import axios from 'axios';

//1:05:34
function App() {

  const [showModal, setShowModal] = useState(null);

  const [inputLanguage, setInputLanguage] = useState('English');
  const [outputLanguage, setOutputLanguage] = useState('Polish');
  const [languages, setLanguages] = useState(null);

  const [textToTranslate, setTextToTranslate] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const getLanguages = async () => {
    const options = {
      method: 'GET',
      url: 'https://google-translate20.p.rapidapi.com/languages',
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.RAPID_API_HOST
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

  const translate = () => {
      const options = {
      method: 'GET',
      url: 'https://google-translate20.p.rapidapi.com/translate',
      params: {
        text: textToTranslate,
        tl: outputLanguage,
        sl: inputLanguage
      },
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.RAPID_API_HOST
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setTranslatedText(response.data.data.translation)
    }).catch(function (error) {
      console.error(error);
    });
  }
  

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  }
  return (
    <div className="app">
      {!showModal && (
        <>
          <Textbox
            style="input"
            setShowModal={setShowModal}
            selectedLanguage={inputLanguage}
            setTextToTranslate={setTextToTranslate}
            textToTranslate={textToTranslate}
            setTranslatedText={setTranslatedText}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>
          <Textbox
            style="output"
            setShowModal={setShowModal}
            selectedLanguage={outputLanguage}
            translatedText={translatedText}
          />
          <div className="button-container" onClick={translate}>
            <Button />
          </div>
        </>
      )}
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          languages={languages}
          chosenLanguage={
            showModal === 'input' ? inputLanguage : outputLanguage
          }
          setChosenLanguage={
            showModal === 'input' ? setInputLanguage : setOutputLanguage
          }
        />
      )}
    </div>
  );
}

export default App;
