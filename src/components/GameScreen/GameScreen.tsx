import React from 'react';

import ConstantPlayerInfo from '../ConstantPlayerInfo/ConstantPlayerInfo'
import GameButtonWithExplanation from '../GameButtonWithExplanation/GameButtonWithExplanation'
import ThisTurnsPlayerInfo from '../ThisTurnsPlayerInfo/ThisTurnsPlayerInfo'
import TurnResultsText from '../TurnResultsText/TurnResultsText'
import NewGameButton from '../NewGameButton/NewGameButton'

//  Should I pass in this many props, or should I move some methods/useStates from App.tsx to here?
interface Props {
    playerOneElementColor: string;
    computerElementColor: string;
    disabledButtons: boolean[];
    computerCharacterTypeText: string;
    computerElementalBonusText: string;
    playerOneCharacterTypeText: string;
    playerOneElementalBonusText: string;
    winLooseTieText: string;
    buttonsAndExplanationsDivDisplay: string;
    newGameButtonDisplay: string;
    playerOneHealth: number;
    computerHealth: number;
    playerOneElement: string;
    computerElement: string;
    playerOneChoice: string;
    computerChoice: string;
    playerOneCharacterType: string;
    computerCharacterType: string;
    callback: (arg0: {isNotNewGame: boolean, playerOneChoice: string, 
        disabledButtons: boolean[], screenName: string}) => void
}

const GameScreen: React.FC<Props> = (props: Props) => {
  return(
    <>
      <p>
        The rules of this game are that you can&apos;t make the same choice twice in a row,
        and neither can the computer. Use that to your advantage....
      </p>
      <div id="playerInfoDivs">
        <ConstantPlayerInfo 
          floatDirection="left"
          constantElementText="Player1 element: "
          element={props.playerOneElement} 
          elementColor={props.playerOneElementColor}
          characterType={props.playerOneCharacterType} />
        <ConstantPlayerInfo 
          floatDirection="right"
          constantElementText="Computer element: "
          element={props.computerElement} 
          elementColor={props.computerElementColor}
          characterType={props.computerCharacterType} />
      </div>
      <div id="buttonsAndExplanationsDiv" style={{display: props.buttonsAndExplanationsDivDisplay}}>
        <GameButtonWithExplanation 
          buttonColor="darkolivegreen"
          buttonText="Shield" 
          explanation="Blocks two physical damage."
          buttonNumber="0" 
          isDisabled={props.disabledButtons[0]} 
          disabledButtonArray={props.disabledButtons} 
          callback={props.callback} />
        <GameButtonWithExplanation 
          buttonColor="royalblue"
          buttonText="Magic" 
          explanation="Deals one magic damage."
          buttonNumber="1" 
          isDisabled={props.disabledButtons[1]} 
          disabledButtonArray={props.disabledButtons} 
          callback={props.callback} />
        <GameButtonWithExplanation 
          buttonColor="firebrick"
          buttonText="Sword" 
          explanation="Deals two physical damage."
          buttonNumber="2" 
          isDisabled={props.disabledButtons[2]} 
          disabledButtonArray={props.disabledButtons}  
          callback={props.callback} />
      </div>
      <div id="playerInfoDivs">
        <ThisTurnsPlayerInfo 
          floatDirection="left"
          constantHealthText="Player1 health: " 
          changingNumber={props.playerOneHealth} 
          element={props.playerOneElement} 
          choice={props.playerOneChoice} />
        <ThisTurnsPlayerInfo
          floatDirection="right"
          constantHealthText="Computer health: " 
          changingNumber={props.computerHealth}  
          element={props.computerElement} 
          choice={props.computerChoice} />
      </div>
      <TurnResultsText 
        playerOneElementColor={props.playerOneElementColor}
        playerOneChoice={props.playerOneChoice} 
        playerOneCharacterTypeText={props.playerOneCharacterTypeText}
        playerOneElementalBonusText={props.playerOneElementalBonusText}
        computerElementColor={props.computerElementColor}
        computerChoice={props.computerChoice}
        computerCharacterTypeText={props.computerCharacterTypeText}
        computerElementalBonusText={props.computerElementalBonusText}
        winLooseTieText={props.winLooseTieText} 
      />
      <NewGameButton 
        newGameButtonDisplay={props.newGameButtonDisplay}
        callback={props.callback} 
      />
    </>
  );
};
    
export default GameScreen;