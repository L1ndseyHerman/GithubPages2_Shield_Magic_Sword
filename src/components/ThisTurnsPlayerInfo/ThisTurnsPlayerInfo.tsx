import React from 'react';

import PlayerInfoImage from "../PlayerInfoImage/PlayerInfoImage";

interface Props {
    floatDirection: import("csstype").Property.Float | undefined;
    constantHealthText: string; 
    changingNumber: number; 
    element: string;
    choice: string;
}
  
const ThisTurnsPlayerInfo: React.FC<Props> = (props: Props) => {
    return(
        <div style={{width: "150px", float: props.floatDirection}}>
            <p >
                {props.constantHealthText}{props.changingNumber}
            </p>
            <PlayerInfoImage choice={props.choice} floatDirection={props.floatDirection}
                element={props.element} />
        </div>
    );
};
    
export default ThisTurnsPlayerInfo;