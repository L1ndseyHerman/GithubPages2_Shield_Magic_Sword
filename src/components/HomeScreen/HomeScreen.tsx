import React from 'react';

import BeginGameButton from '../BeginGameButton/BeginGameButton';
import BottomNotes from '..//BottomNotes/BottomNotes';

interface Props {
        callback: (arg0: { screenName: string; }) => void;
}

const HomeScreen: React.FC<Props> = (props: Props) => {
    return(
      <>
        <BeginGameButton callback={props.callback} />
        <BottomNotes />
      </>
    );
};
    
export default HomeScreen;