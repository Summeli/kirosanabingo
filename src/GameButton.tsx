import React, { Component, MouseEvent, useState } from 'react';

interface Props {
    text: string;
    isClicked: boolean;
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export class GameButton extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }
    
    render() {
      return <button onClick = {this.props.onClick}
        className= {this.props.isClicked ? "pressedGameButton" : "notPressedGamebutton"} 
      >{this.props.text} 
      </button>
    }
  }

  export default GameButton;