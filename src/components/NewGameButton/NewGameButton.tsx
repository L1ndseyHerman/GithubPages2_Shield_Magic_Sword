import React from 'react';

interface Props {
    newGameButtonDisplay: string;
    callback: (arg0: {isNotNewGame: boolean, playerOneChoice: string, 
    disabledButtons: boolean[], screenName: string}) => void
}
  
const NewGameButton: React.FC<Props> = (props: Props) => {

    const newGameButtonPressed = () => {
       props.callback({isNotNewGame: false, playerOneChoice: "First Turn", 
       disabledButtons:[false, false, false], screenName: "Character Type Selection Screen"}); 
    }

    return(
        <div className="centeredDivPerfectButtonSize" style={{display: props.newGameButtonDisplay}}>
            <button onClick={() => {newGameButtonPressed()}}>New Game</button>
        </div>
    );
};
    
export default NewGameButton;