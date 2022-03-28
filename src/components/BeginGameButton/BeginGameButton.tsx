import React from 'react';

interface Props {
        callback: (arg0: { screenName: string; }) => void;
}

const BeginGameButton: React.FC<Props> = (props: Props) => {
    
    const beginGameButtonPressed = () => {
       props.callback({screenName: "Character Type Selection Screen"}); 
    }

    return(
        <div className="centeredDivPerfectButtonSize">
            <button onClick={() => {beginGameButtonPressed()}}>Begin Game</button>
        </div>
    );
};
    
export default BeginGameButton;