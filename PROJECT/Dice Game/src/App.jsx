import StartGame from "./Components/StartGame";
import "./App.css"
import { useState } from "react";
import GamePlay from "./Components/GamePlay";


function App() {
const[isGameStarted, setIsGameStarted] = useState(false);

 function toogle() {
  setIsGameStarted(!isGameStarted);
 }
  return(
    <>
    {
      isGameStarted ? <GamePlay/> : <StartGame toogle={toogle}/>
    }
    </>
  )
}

export default App;




