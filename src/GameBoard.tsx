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
              {this.renderGameButton("Vittu")}
              {this.renderGameButton("Jumalauta")}
              {this.renderGameButton("Perhana")}
            </div>
            <div className="board-row">
              {this.renderGameButton("Saatana")}
              {this.renderGameButton("Hitsit")}
              {this.renderGameButton("Kulli")}
            </div>
            <div className="board-row">
              {this.renderGameButton("Hitto")}
              {this.renderGameButton("Perse")}
              {this.renderGameButton("Perkele")}
            </div>
          </div>
        );
    }
}

export default GameBoard;
