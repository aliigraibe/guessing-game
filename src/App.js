import './App.css';
import {useState} from "react";
import react from "react";




function App() {

  const refreshPage=()=> {
    window.location.reload(false)
  }
  const  [numberOfTry, setNumberOfTry] = useState(4);
  const  [result, setResult] = useState(20);
  const  [rest, setRest] = useState();

  const  [userInput, setUserInput] = useState();
  const [secretNumber, setSecretNumber] = useState( Math.floor(Math.random() *31))
  const numb =( )=>{
    if (numberOfTry>0){    

      if (+userInput === secretNumber) {
        setResult(result)

      setRest( `You got it right! your score is ${result} press play again if you want `)
      } 
      else if (userInput > secretNumber) {
        
        
        setRest( `Your  Number is:  ${userInput} .That's Not Correct high. Try Again! you still have ${numberOfTry}chance`)
      } 
      else if (userInput < secretNumber) {
       setRest( `Your random Number was   ${userInput}  .Not Correct Try Again!you still have ${numberOfTry}chance`)
      } setNumberOfTry(numberOfTry-1)
    } 
      else setRest(`Done And your Result Is : ${result}`  )}



      let hint =  [Math.floor(Math.random()*31)," ",Math.floor(Math.random()*31)," ",secretNumber," ",  Math.floor(Math.random()*31)
      , " " ,Math.floor(Math.random()*31)
    ]



  return (

    <body>

      
    <div className="App">
      
  <header className="App-header">
    <p>Find the secret number and use it to banish The Octowl</p>
    <input placeholder="guess the number" onChange={(event)=>setUserInput(event.target.value) }></input>
    <div className="ro">
      <button className="button" onClick={(event)=>numb(event.target.value)}>enter</button>
      <button className="button" onClick={(event)=>refreshPage(event.target.value)}>play again</button>
      </div><div>
<p>{rest}</p>
Hint: {hint}
</div>  </header>

    </div></body>
  );
}

export default App;
