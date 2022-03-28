import React from 'react';
import styles from './ChooseElementButtonWithExplanation.module.css';

interface Props {
  buttonText: string;
  explanation: string;
  buttonColor: string;
  explanationColor: string;
  callback: (arg0: {screenName: string, playerOneElement: string, 
  playerOneElementColor: string, computerElement: string,
  computerElementColor: string}) => void;
}

const ChooseElementButtonWithExplanation: React.FC<Props> = (props: Props) => {

    const choosePlayerOneElementColor = () => {
      let playerOneElementColor = "wheat";

      if (props.buttonText === "Fire")
      {
          playerOneElementColor = "firebrick";
      }
      else if (props.buttonText === "Earth")
      {
          playerOneElementColor = "darkolivegreen";
      }
      else if (props.buttonText === "Air")
      {
          playerOneElementColor = "darkorange";
      }
      else if (props.buttonText === "Water")
      {
          playerOneElementColor = "royalblue";
      }
      else if (props.buttonText === "Light")
      {
          playerOneElementColor = "gold";
      }
      else if (props.buttonText === "Dark")
      {
          playerOneElementColor = "rebeccapurple";
      }
      return playerOneElementColor;
    };

    const chooseComputerElement = () => {
      const computerElementNumber = Math.floor(Math.random() * 6);

      let computerElement = "None Yet";

      if (computerElementNumber === 0)
      {
        computerElement = "Fire";
      }
      else if (computerElementNumber === 1)
      {
        computerElement = "Earth";
      }
      else if (computerElementNumber === 2)
      {
        computerElement = "Air";
      }
      else if (computerElementNumber === 3)
      {
        computerElement = "Water";
      }
      else if (computerElementNumber === 4)
      {
        computerElement = "Light";
      }
      else if (computerElementNumber === 5)
      {
        computerElement = "Dark";
      }
      return computerElement;
    };

    const chooseComputerElementColor = (computerElement: string) => {
      let computerElementColor = "wheat";

      if (computerElement === "Fire")
      {
        computerElementColor = "firebrick";
      }
      else if (computerElement === "Earth")
      {
        computerElementColor = "darkolivegreen";
      }
      else if (computerElement === "Air")
      {
        computerElementColor = "darkorange";
      }
      else if (computerElement === "Water")
      {
        computerElementColor = "royalblue";
      }
      else if (computerElement === "Light")
      {
        computerElementColor = "gold";
      }
      else if (computerElement === "Dark")
      {
        computerElementColor = "rebeccapurple";
      }
      return computerElementColor;
    };

  const playerOneElementColor = choosePlayerOneElementColor();
  const computerElement = chooseComputerElement();
  const computerElementColor = chooseComputerElementColor(computerElement);
  const buttonText = props.buttonText; 

  const chooseElementButtonPressed = () => {
    props.callback({screenName: "Game Screen", playerOneElement: buttonText, 
    playerOneElementColor: playerOneElementColor, computerElement: computerElement,
    computerElementColor: computerElementColor}); 
  }

    return(
        <div className={styles.elementButtonDiv}>
            <div className="centeredDivPerfectButtonSize">
                <button style={{background: props.buttonColor}} 
                    onClick={() => {chooseElementButtonPressed()}}>{props.buttonText}</button>
            </div>
            <p>
                +1 damage to <span style={{color: props.explanationColor, 
                backgroundColor: "black"}}>{props.explanation}</span>.
            </p>
        </div>
    );
};
    
export default ChooseElementButtonWithExplanation;