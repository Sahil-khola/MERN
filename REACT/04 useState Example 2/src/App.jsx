import { useState } from "react"
import data from './App.json'
function App() {
 const [ndata,setnData]=useState(data)
 function removeHandel(items) {
  setnData(ndata.filter(items !==items.id))
 }
  return (
    <>
    <ul>
    {
      ndata.map((items)=>(
        <li key={items.id}>{items.name}
        <button onClick={removeHandel}>Remove</button>
          </li>
        
      ))
    }
    </ul>
    <button onClick={(()=>setnData([]))}>clear</button>
    </>
  )
}

export default App
