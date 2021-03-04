import React, { Component, MouseEvent, useState } from 'react';

interface Props {
    text: string
}
interface ButtonState {
  isPressed: boolean
}

export class GameButton extends Component<Props, ButtonState> {

  constructor(props: Props) {
    super(props);
    this.state = {isPressed: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  
    handleClick(event: MouseEvent) {
      this.setState(state => ({
        isPressed: !state.isPressed
      }));
    }
    
    render() {
      return <button onClick={this.handleClick}
        className= {this.state.isPressed ? "pressedGameButton" : "notPressedGamebutton"} 
      >{this.props.text} 
      </button>
    }
  }

  export default GameButton;