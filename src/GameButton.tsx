import React, { Component, MouseEvent } from 'react';

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
      return <button className='gamebutton' onClick={this.handleClick}>
        {this.props.text}
        if(this.state.isToggleOn){<div id='clickeButton'>X</div>}
      </button>
    }
  }

  export default GameButton;