import React from 'react';
import styles from './GameButtonWithExplanation.module.css';

interface Props {
    buttonColor: string;
    buttonText: string;
    explanation: string;
    buttonNumber: string;
    isDisabled: boolean; 
    disabledButtonArray: boolean[];
    callback: (arg0: {isNotNewGame: boolean, playerOneChoice: string, 
        disabledButtons: boolean[], screenName: string}) => void
}
  
const GameButtonWithExplanation: React.FC<Props> = (props: Props) => {
    const theDisabledButtons = [false, false, false];
    for (let index = 0; index < theDisabledButtons.length; index++) {
        
        if (index.toString() === props.buttonNumber)
        {
            theDisabledButtons[index] = true;
        }
        else 
        {
            theDisabledButtons[index] = false;
        }
    }

    const buttonPressed = () => {
       props.callback({isNotNewGame: true, playerOneChoice: props.buttonText, 
       disabledButtons: theDisabledButtons, screenName: "Game Screen"}); 
    }

    return(
        <div className={styles.buttonWithExplanationDiv}>
            <div className="centeredDivPerfectButtonSize">
                <button style={{background: props.buttonColor}} disabled={props.isDisabled} 
                    onClick={() => {buttonPressed()}}>{props.buttonText}</button>
            </div>
            <p>{props.explanation}</p>
        </div>
    );
};
    
export default GameButtonWithExplanation;