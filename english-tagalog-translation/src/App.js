import React, { useState } from 'react';
import './App.css';

function App() {
  const [englishWord, setEnglishWord] = useState('');
  const [tagalogTranslation, setTagalogTranslation] = useState('');

  const translateWord = () => {
    const translations = {
      hello: 'kamusta',
      world: 'mundo',
      example: 'halimbawa',
      food: 'pagkain',
      water: 'tubig',
      please: 'Pakiusap',
      sorry: 'Paumanhin',
      friend: 'Kaibigan',      
      love: 'pag-ibig',
      house: 'bahay',
      beautiful: 'maganda',
      happiness: 'kaligayahan',
    };

    const translation = translations[englishWord.toLowerCase()];
    setTagalogTranslation(translation || 'Translation not found');
  };

  return (
    <div className="container">
      <h1>English to Tagalog Translator</h1>
      <div className="input-group">
        <label htmlFor="englishInput">English Word:</label>
        <input
          id="englishInput"
          type="text"
          value={englishWord}
          onChange={(e) => setEnglishWord(e.target.value)}
        />
      </div>
      <button onClick={translateWord}>Translate</button>
      {tagalogTranslation && (
        <div className="result">
          <h2>Tagalog Translation:</h2>
          <p>{tagalogTranslation}</p>
        </div>
      )}
    </div>
  );
}

export default App;
