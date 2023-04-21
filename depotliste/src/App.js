import React from 'react';
import './App.css';
import InputGroup from './InputGroup';

function App() {
  const inputLabels = [
    'C42/C32', 'C31/C23', 'C16/C14', 'C13/C8', 'Gamla'
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Depotliste</h1>
      </header>
      <main>
        <div className="input-container">
          {inputLabels.map((label, index) => (
            <InputGroup key={index} label={label} id={label} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
