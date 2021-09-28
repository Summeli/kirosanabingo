import React from 'react';

interface Props {
    text: string;
    isClicked: boolean;
    id: number;
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const GameButton: React.FunctionComponent<Props> = (props) => {

    return (<button onClick = {props.onClick} id = {props.id as unknown as string}
      className= {props.isClicked ? "pressedGameButton" : "notPressedGamebutton"} 
    >{props.text} 
    </button>
    );
  }

  export default GameButton;