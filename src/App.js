import { useEffect, useState } from "react";
import Wordle from './components/Wordle.js'

function App(){
  const [solution,setSolution] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3001/solutions')
    .then(res=>res.json())
    .then(json =>{
      //console.log(json)
      //we need to randomly choose some integer number 
      //between 1 to 4
      const randomSol = json[Math.floor(Math.random()*json.length)]
      console.log(randomSol)
      setSolution(randomSol)
    })
  }, [setSolution] )
  return (
    <div className = "App">
      <h1>Wordle in react</h1>
      {solution && <Wordle solution={solution}/> }
    </div>
  );
}

export default App;