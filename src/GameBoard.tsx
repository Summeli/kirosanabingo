import React, { useState } from 'react';
import GameButton from './GameButton';
import {isBingo} from './BingoUtil'

interface Props {
  setBingo: (bingo: boolean) => void;
}

const GameBoard: React.FunctionComponent<Props> = (props) => {

  //thanks for wikipedia: https://fi.wikipedia.org/wiki/Suomen_kielen_kirosanat
  const all_cursewords: Array<string> = ["helkatti", "helkkari", "helkutti", "helskutti", "helvetti", "hemmetti", "hiisi", 
    "hiivatti", "hitsi", "hitto", "jeesus", "jeeveli", "jessus", "jukolauta", "jukoliste", "jukra", "jukranpujut", "juku", 
    "jumalauta", "juukeli", "juutas", "jösses", "kehno", "kehveli", "kirottu", "lempo", "pahus", "pakana", "pannahinen",
     "paska", "peeveli", "peijakas", "pentele", "perhana", "perkele", "perkule", "permanto", "perse", "pirskatti",
      "piru", "pirulauta", "raato", "riivattu", "ryökäle", "räkä", "saakeli", "saakuri", "saamari", "saasta", 
      "saatana", "samperi", "syötävä", "turkanen", "täytinen", "vitjat", "vitsi", "vittu"];

    let remaining_cursewords = all_cursewords;
     //Randomize cursewords into the stateobject
    let rcursewords = new Array<string>(9);
    for(let i=0; i<9; i++){
      let rndPos: number = Math.floor(Math.random() * Math.floor(remaining_cursewords.length));
      rcursewords[i] = remaining_cursewords[rndPos];
      remaining_cursewords.splice(rndPos,1);
    }

    const [cursewords, setcursewords] = useState<Array<string>>(rcursewords);
    const [clickedButtons, setClickedButtons] = useState<Array<boolean>>(new Array(9));
    const [bingo, setBingo] = useState<boolean>(false);


  const handleClick = (id: number) => {
    let clicks: Array<boolean> = clickedButtons.slice();
    clicks[id] = !clicks[id];
    //update state
    setBingo(isBingo(clicks));
    props.setBingo(isBingo(clicks));
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

  const newBingoSheet = (e :React.MouseEvent<HTMLButtonElement>) => {
    //reset everything
    let remaining_cursewords = all_cursewords;
    let new_cursewords = new Array<string>(9);
    for(let i=0; i<9; i++){
      let rndPos: number = Math.floor(Math.random() * Math.floor(remaining_cursewords.length));
      new_cursewords[i] = remaining_cursewords[rndPos];
      remaining_cursewords.splice(rndPos,1);
    }
    setcursewords(new_cursewords);
    setClickedButtons(new Array<boolean>(9).fill(false));
    setBingo(false);
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
      {bingo ? ( <p>BINGO</p>) : (<p><br></br></p> ) }
    <div className="extrabuttoncontainer">
      <button onClick = {newBingoSheet} className= "newBingoSheetButton">uusi kuponki</button>
    </div>

  </div>
);

}

export default GameBoard;
