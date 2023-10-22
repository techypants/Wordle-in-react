import React, { useEffect, useState } from 'react';

const Keypad = () => {
    const [letters,setLetters] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:3001/letters')
        .then(res=>res.json())
        .then(json=>{
            setLetters(json.keys)
        })
    },[]) 
    return (
        <div className="keypad">
            {console.log("yo")}
            {console.log(typeof(letters))}
            {letters && letters.map((l)=>{
                return(
                    <div key={l.keys}>{l.keys}</div>
                )
            })}
        </div>
    );
}

export default Keypad;
