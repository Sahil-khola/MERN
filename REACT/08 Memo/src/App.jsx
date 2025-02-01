import { useState } from "react"
import Memo from "./Memo"

function App() {
 const[count,setCount]=useState(0)
 const[input,setInput]=useState()
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Click Me</button>
    <hr />
    <input type="text" onChange={(event)=>{setInput(event.target.value)}} />
    <h1>{input}</h1>
    <Memo count = {count}/>
    </>
  )
}

export default App
