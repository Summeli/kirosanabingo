import React from 'react';
import './App.css';
import GameBoard from './GameBoard';
import CloudamiteTop from './CloudamiteTop';

function App() {
  return (
    <div className="kissa">
      <div className="Kirosanabingo">
         <CloudamiteTop />
         <GameBoard />
      </div>
    </div>
  );
}

export default App;
