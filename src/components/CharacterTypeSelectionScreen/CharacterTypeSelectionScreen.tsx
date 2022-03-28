import React from 'react';

import ChooseCharacterTypeButtonWithExplanation from '../ChooseCharacterTypeButtonWithExplanation/ChooseCharacterTypeButtonWithExplanation'

interface Props {
    callback: (arg0: {screenName: string, playerOneCharacterType: string,
        computerCharacterType: string}) => void;
}

const CharacterTypeSelectionScreen: React.FC<Props> = (props: Props) => {
    return(
      <>
        <p>
          Choose a character type. The computer will randomly choose one.
        </p>
        <br/>
        <div id="buttonsAndExplanationsDiv">
          <ChooseCharacterTypeButtonWithExplanation 
            buttonColor="darkolivegreen"
            buttonText="Bodyguard" 
            explanation="Block +1 Magic Damage when using Shield." 
            callback={props.callback} />
          <ChooseCharacterTypeButtonWithExplanation 
            buttonColor="royalblue"
            buttonText="Mage" 
            explanation="Deal +1 Magic Damage when using Magic." 
            callback={props.callback} />
          <ChooseCharacterTypeButtonWithExplanation 
            buttonColor="firebrick"
            buttonText="Assassin" 
            explanation="Deal +1 Physical Damage when using Sword."
            callback={props.callback} />
        </div>
      </>
    );
};
    
export default CharacterTypeSelectionScreen;