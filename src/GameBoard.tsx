import React, { Component, MouseEvent } from 'react';
import GameButton from './GameButton';

interface BoardState {
  rcursewords: Array<string>;
  isBingo: boolean;
}

class GameBoard extends React.Component<{},BoardState> {

  cursewords: Array<string> = ["Vittu","Jumalauta","Perhana","Saatana", "Hitsit", "Kulli",
  "Hitto", "Perse", "Perkele"];

  constructor({}){
    super({});

    this.state = {rcursewords: new Array(9), isBingo: false};

    //Randomize cursewords into the stateobject
    for(let i=0; i<9; i++){
      let rndPos: number = Math.floor(Math.random() * Math.floor(this.cursewords.length));
      this.state.rcursewords[i] = this.cursewords[rndPos];
      this.cursewords.splice(rndPos,1);
    }
  }

    renderGameButton(name: string){
        return (
            <GameButton
              text={name}
            />
          );
    }

    render() {
        return(
            <div>
            <div className="board-row">
              {this.renderGameButton(this.state.rcursewords[0])}
              {this.renderGameButton(this.state.rcursewords[1])}
              {this.renderGameButton(this.state.rcursewords[2])}
            </div>
            <div className="board-row">
              {this.renderGameButton(this.state.rcursewords[3])}
              {this.renderGameButton(this.state.rcursewords[4])}
              {this.renderGameButton(this.state.rcursewords[5])}
            </div>
            <div className="board-row">
              {this.renderGameButton(this.state.rcursewords[6])}
              {this.renderGameButton(this.state.rcursewords[7])}
              {this.renderGameButton(this.state.rcursewords[8])}
            </div>
          </div>
        );
    }
}

export default GameBoard;
