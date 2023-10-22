import React from 'react';
import Row from './row';

const Grid = ({currentGuess,guesses,turn}) => {
    return (
        <div>
           {guesses.map((g,i) => {
            if(turn===i){
                return <Row key={i} currentGuess={currentGuess}/>
            }

            return <Row key={i} guess={g}></Row>

           })}

        </div>
    );
}

export default Grid;
