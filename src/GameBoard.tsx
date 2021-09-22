import React, { Component, MouseEvent } from 'react';
import GameButton from './GameButton';

interface BoardState {
  rcursewords: Array<string>;
  clickedButtons: Array<boolean>;
  isBingo: boolean;
}

class GameBoard extends React.Component<{},BoardState> {

  //thanks for wikipedia: https://fi.wikipedia.org/wiki/Suomen_kielen_kirosanat
  cursewords: Array<string> = ["helkatti", "helkkari", "helkutti", "helskutti", "helvetti", "hemmetti", "hiisi", 
    "hiivatti", "hitsi", "hitto", "jeesus", "jeeveli", "jessus", "jukolauta", "jukoliste", "jukra", "jukranpujut", "juku", 
    "jumalauta", "juukeli", "juutas", "jösses", "kehno", "kehveli", "kirottu", "lempo", "pahus", "pakana", "pannahinen",
     "paska", "peeveli", "peijakas", "pentele", "perhana", "perkele", "perkule", "permanto", "perse", "pirskatti",
      "piru", "pirulauta", "raato", "riivattu", "ryökäle", "räkä", "saakeli", "saakuri", "saamari", "saasta", 
      "saatana", "samperi", "syötävä", "turkanen", "täytinen", "vitjat", "vitsi", "vittu"];

  constructor({}){
    super({});

    this.state = {rcursewords: new Array(9), clickedButtons: new Array(9), isBingo: false};

    //Randomize cursewords into the stateobject
    for(let i=0; i<9; i++){
      let rndPos: number = Math.floor(Math.random() * Math.floor(this.cursewords.length));
      this.state.rcursewords[i] = this.cursewords[rndPos];
      this.cursewords.splice(rndPos,1);
      this.state.clickedButtons[i] = false;
    }

  }

  handleClick(id: number) {
    let clicks: Array<boolean> = this.state.clickedButtons.slice();
    const cursewords: Array<string> = this.state.rcursewords.slice();
    clicks[id] = !clicks[id];
    const bingo: boolean = this.isBingo(clicks);
    this.setState(state => ({
      rcursewords : cursewords,
      clickedButtons : clicks,
      isBingo : bingo
    }));
  }

  renderGameButton(i: number){
      return (
          <GameButton
            text={this.state.rcursewords[i]} isClicked={this.state.clickedButtons[i]} 
            id = {i}
            onClick = {() => this.handleClick(i)}
          />
        );
  }

  render() {
      return(
          <div>
          <div className="board-row">
          {this.renderGameButton(0)}
          {this.renderGameButton(1)}
          {this.renderGameButton(2)}
        </div>
        <div className="board-row">
          {this.renderGameButton(3)}
          {this.renderGameButton(4)}
          {this.renderGameButton(5)}
        </div>
        <div className="board-row">
          {this.renderGameButton(6)}
          {this.renderGameButton(7)}
          {this.renderGameButton(8)}
        </div>
        <p> {this.state.isBingo? "BINGO" : ""}</p>
      </div>
    );
  }
  
  isBingo(clickedButons: Array<boolean>): boolean {
    if(clickedButons[0] && clickedButons[1] && clickedButons[2]){
      return true;
    }else if(clickedButons[3] && clickedButons[4] && clickedButons[5]){
      return true;
    }else if(clickedButons[6] && clickedButons[7] && clickedButons[8]){
      return true;
    }else if(clickedButons[0] && clickedButons[3] && clickedButons[6]){
      return true;
    }else if(clickedButons[1] && clickedButons[4] && clickedButons[7]){
      return true;
    }else if(clickedButons[2] && clickedButons[5] && clickedButons[8]){
      return true;
    }else if(clickedButons[0] && clickedButons[4] && clickedButons[8]){
      return true;
    }else if(clickedButons[2] && clickedButons[4] && clickedButons[6]){
      return true;
    }
    return false;
  }

}

export default GameBoard;
