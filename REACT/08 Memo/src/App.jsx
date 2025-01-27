import Memo from "./Memo"
import React, { useState } from 'react'

function App() {
  const[count,setCount]= useState(0)
  const[input,setInput]= useState('')
  return (
    <>
     <h1>{count}</h1>
     <button onClick={()=>(setCount(count+1))}>click me</button>
     <br />
     <input type="text" value={input} onChange={(e)=>(setInput(e.target.value))} />
    <Memo newCount={count}/>
    </>
  )
}

export default App
