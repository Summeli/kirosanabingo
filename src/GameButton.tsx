import React from 'react';

interface Props {
    text: string;
    isClicked: boolean;
    id: number;
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const GameButton: React.FunctionComponent<Props> = (props) => {

  return (
    <button
      onClick={props.onClick}
      id={`${props.id}`}
      className={`${props.isClicked ? "pressedGameButton" : ""} gameButton`}
    >
      <div>
        <span className="gameButtonText">{props.text}</span>
      </div>
      <span className="gameButtonX">X</span>
    </button>
  );
};

  export default GameButton;