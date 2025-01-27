import { useEffect, useState} from "react"

const UseEffect = () => {
   const[clicked,setClicked]=useState();
   const[count,setCount]=useState(0)

  useEffect(()=>{
    console.log ('Sahil Khola')

    return(
        ()=>{
            console.log('return sahil khola');
        }
    )
  },[clicked])
  return (
    <div >
      <button onClick={(()=>{setClicked("clickedd")})}>Click</button>
      <br />
      <hr />
      <button onClick={(()=>{setClicked('submitted')})}>Submit</button>
      <br />
      <hr />
      <button onClick={()=>{setClicked("cleared")}}>Clear</button>
      <h1>{clicked}</h1>
      <hr />
      <button onClick={()=>{setCount(count+1)}} >Increment : {count} </button>
    </div>
  )
}

export default UseEffect
