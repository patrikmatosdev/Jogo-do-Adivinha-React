import React, { useState } from 'react';
import './App.css';
import PalpiteInput from './components/PalpiteInput';

function App() {

  const [palpite, setPalpite] = useState('Ola');
  
  return (
    <div className="App">
      <h1>JOGO DO ADIVINHA</h1>
       
       <PalpiteInput value={palpite} onChange={setPalpite} />

       { palpite }
       
    </div>
  );
}

export default App;
