import React from 'react';
import './App.css';
import GameBoard from './GameBoard';
import CloudamiteTop from './CloudamiteTop';
import CloudamiteFooter from './CloudamiteFooter';

function App() {
  return (
      <div className="Kirosanabingo">
         <CloudamiteTop />
         <div className="gamecontainer">
            <GameBoard />
         </div>
         <CloudamiteFooter />
      </div>
  );
}

export default App;
