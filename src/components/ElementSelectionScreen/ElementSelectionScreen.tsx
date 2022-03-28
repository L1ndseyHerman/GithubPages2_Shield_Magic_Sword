import React from 'react';

import ChooseElementButtonWithExplanation from '../ChooseElementButtonWithExplanation/ChooseElementButtonWithExplanation'

interface Props {
    callback: (arg0: {screenName: string, playerOneElement: string, 
        playerOneElementColor: string, computerElement: string,
        computerElementColor: string}) => void;
}

const ElementSelectionScreen: React.FC<Props> = (props: Props) => {
  return(
    <>
      <p>
        Choose an element. The computer will randomly choose one.
      </p>
      <br/>
      <div id="buttonsAndExplanationsDiv">
        <ChooseElementButtonWithExplanation 
          buttonText="Fire" 
          explanation="Earth"
          buttonColor="firebrick" 
          explanationColor="darkolivegreen"
          callback={props.callback} />
        <ChooseElementButtonWithExplanation 
          buttonText="Earth" 
          explanation="Air"
          buttonColor="darkolivegreen" 
          explanationColor="darkorange"
          callback={props.callback} />
        <ChooseElementButtonWithExplanation 
          buttonText="Air" 
          explanation="Water"
          buttonColor="darkorange" 
          explanationColor="royalblue"
          callback={props.callback} />
        <ChooseElementButtonWithExplanation 
          buttonText="Water" 
          explanation="Fire"
          buttonColor="royalblue" 
          explanationColor="firebrick"
          callback={props.callback} />
        <ChooseElementButtonWithExplanation 
          buttonText="Light" 
          explanation="Dark"
          buttonColor="gold" 
          explanationColor="rebeccapurple"
          callback={props.callback} />
        <ChooseElementButtonWithExplanation 
          buttonText="Dark" 
          explanation="Light"
          buttonColor="rebeccapurple" 
          explanationColor="gold"
          callback={props.callback} />
      </div>
    </>
  );
};
    
export default ElementSelectionScreen;