import React, { Component, MouseEvent } from 'react';
import GameButton from './GameButton';


class GameBoard extends React.Component {

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
              {this.renderGameButton("kissa")}
              {this.renderGameButton("koira")}
              {this.renderGameButton("test")}
            </div>
            <div className="board-row">
              {this.renderGameButton("jee")}
              {this.renderGameButton("jou")}
              {this.renderGameButton("apina")}
            </div>
            <div className="board-row">
              {this.renderGameButton("homo")}
              {this.renderGameButton("perse")}
              {this.renderGameButton("vbitsit")}
            </div>
          </div>
        );
    }
}

export default GameBoard;
