import React from 'react';
import './App.css';
import GameBoard from './GameBoard';
import CloudamiteTop from './CloudamiteTop';
import CloudamiteFooter from './CloudamiteFooter';

function App() {
  return (
      <div className="Kirosanabingo">
         <CloudamiteTop />
         <GameBoard />
         <CloudamiteFooter />
      </div>
  );
}

export default App;
