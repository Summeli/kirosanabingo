import React, { useState } from 'react';
import GameButton from './GameButton';
import {isBingo} from './BingoUtil'

const GameBoard: React.FunctionComponent = () => {

  //thanks for wikipedia: https://fi.wikipedia.org/wiki/Suomen_kielen_kirosanat
  let all_cursewords: Array<string> = ["helkatti", "helkkari", "helkutti", "helskutti", "helvetti", "hemmetti", "hiisi", 
    "hiivatti", "hitsi", "hitto", "jeesus", "jeeveli", "jessus", "jukolauta", "jukoliste", "jukra", "jukranpujut", "juku", 
    "jumalauta", "juukeli", "juutas", "jösses", "kehno", "kehveli", "kirottu", "lempo", "pahus", "pakana", "pannahinen",
     "paska", "peeveli", "peijakas", "pentele", "perhana", "perkele", "perkule", "permanto", "perse", "pirskatti",
      "piru", "pirulauta", "raato", "riivattu", "ryökäle", "räkä", "saakeli", "saakuri", "saamari", "saasta", 
      "saatana", "samperi", "syötävä", "turkanen", "täytinen", "vitjat", "vitsi", "vittu"];

     //Randomize cursewords into the stateobject
    let rcursewords = new Array<string>(9);
    for(let i=0; i<9; i++){
      let rndPos: number = Math.floor(Math.random() * Math.floor(all_cursewords.length));
      rcursewords[i] = all_cursewords[rndPos];
      all_cursewords.splice(rndPos,1);
    }

    const [cursewords, setcursewords] = useState<Array<string>>(rcursewords);
    const [clickedButtons, setClickedButtons] = useState<Array<boolean>>(new Array(9));
    const [bingo, setBingo] = useState<boolean>(false);


  const handleClick = (id: number) => {
    let clicks: Array<boolean> = clickedButtons.slice();
    clicks[id] = !clicks[id];
    //update state
    setBingo(isBingo(clicks));
    setClickedButtons(clicks);
  };

  const renderGameButton = (i: number) => {
      return (
          <GameButton
            text={cursewords[i]} isClicked={clickedButtons[i]} 
            id = {i}
            onClick = {() => handleClick(i)}
          />
        );
  };

  return(
      <div className="gameboard">
        <div className="board-row">
          {renderGameButton(0)}
          {renderGameButton(1)}
          {renderGameButton(2)}
        </div>
      <div className="board-row">
        {renderGameButton(3)}
        {renderGameButton(4)}
        {renderGameButton(5)}
      </div>
      <div className="board-row">
        {renderGameButton(6)}
        {renderGameButton(7)}
        {renderGameButton(8)}
      </div>
    <p> {bingo? "BINGO" : ""}</p>
  </div>
);

}

export default GameBoard;
