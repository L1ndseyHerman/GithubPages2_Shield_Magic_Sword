import React from 'react';

interface Props {
    playerOneElementColor: string;
    playerOneChoice: string;
    playerOneCharacterTypeText: string;
    playerOneElementalBonusText: string;
    computerElementColor: string;
    computerChoice: string;
    computerCharacterTypeText: string;
    computerElementalBonusText: string;
    winLooseTieText: string;
}
  
const TurnResultsText: React.FC<Props> = (props: Props) => {
    if (props.playerOneChoice !== "First Turn")
    {
        return(
            //  Yet another fragment!
            <>
                <p>
                    Player1 chose {props.playerOneChoice} <span 
                    style={{color: "wheat", backgroundColor: "black"}}>
                    {props.playerOneCharacterTypeText}</span> <span id="testingSpan1"
                    style={{color: props.playerOneElementColor, backgroundColor: "black"}}>
                    {props.playerOneElementalBonusText}</span> and Computer 
                    chose {props.computerChoice} <span
                    style={{color: "wheat", backgroundColor: "black"}}>
                    {props.computerCharacterTypeText}</span> <span id="testingSpan2" 
                    style={{color: props.computerElementColor, 
                    backgroundColor: "black"}}>{props.computerElementalBonusText}
                    </span>. {props.winLooseTieText}
                </p>
            </>
        );
    }
    else 
    {
        return(
            <p/>
        )
    }
};

export default TurnResultsText;