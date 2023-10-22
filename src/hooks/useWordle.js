import { useState } from "react"

const useWordle = (solution) => {
    const [turn,setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState("")
    const [guesses, setGuesses] = useState([...Array(6)])
    const [history,setHistory] = useState([])
    const [isCorrect,setIsCorrect] = useState(false) 

    
    const formatGuess = () =>{
        console.log("formatting the guess -",currentGuess)
        console.log(solution.words)

        let solutionArray = [...solution.words]
        let formattedGuess = [...currentGuess].map((l)=>{
            return {key:l,color:'grey'}
        })
        formattedGuess.forEach((l,i)=>{
            
            if(solutionArray[i]===l.key){
                formattedGuess[i].color='green'
                solutionArray[i]=null
            }

        })
        formattedGuess.forEach((l,i)=>{

            if(solutionArray.includes(l.key) && l.color!='green'){
                formattedGuess[i].color='yellow'
                solutionArray[solutionArray.indexOf(l.key)]=null  
            }

        })

        return formattedGuess
    }

    const addNewGuess = (formattedGuess) =>{

        if(currentGuess===solution.words){
            setIsCorrect(true)
            console.log(typeof(currentGuess),typeof(solution.word))
        }
        setGuesses((prevGuesses)=>{
            let newGuesses = [...prevGuesses]
            newGuesses[turn]=formattedGuess
            return newGuesses
        })
        setHistory((prevHistory)=>{
            return[...prevHistory,currentGuess]
        })
        setTurn((prevTurn)=>{
            return prevTurn+1;
        })
        setCurrentGuess('')

    }

    const handleKeyup = ({key}) => {
        
        if(key==="Enter"){
        
            if(turn>5){
                console.log("guesses completed")
                return
            }
        
            if(history.includes(currentGuess)){
                console.log("duplicate entry")
                return
            }
        
            if(currentGuess.length!=5){
                console.log("must be 5 chars long")
                return
            }
            const formatted = formatGuess()
            console.log("yo")
            console.log(typeof(currentGuess),typeof(solution.words))
            console.log((currentGuess),(solution.words))

            console.log(formatted)
            addNewGuess(formatted)
        }

        if(key==='Backspace'){
            setCurrentGuess((prev)=>{
                return prev.slice(0,-1);
            })
        }
        
        if (/^[A-Za-z]$/.test(key)){    //regex for only alphabets
        
            if(currentGuess.length<5){
                setCurrentGuess((prev) =>{
                    return prev + key;
                })
            }
            console.log(key);

        }
    }

    return {turn,currentGuess,guesses,isCorrect,handleKeyup}
}

export default useWordle 