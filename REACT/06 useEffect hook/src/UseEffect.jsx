import { useEffect, useState } from "react";

function UseEffect() {
  const[clicked,setClicked]=useState();
  const [count,setCount]= useState(0);

  
   useEffect(()=>{
    alert("clicked")
   },[clicked,count])

  return(
    <>
   <button onClick={()=>{setClicked('suscribe')}}>suscribe</button>
   <hr />
   <button onClick={()=>{setClicked('To')}}>To</button>
   <hr />
   <button onClick={()=>{setClicked('Sahil khola')}}>Sahil Khola</button>
   <hr />
   <h1>{clicked}</h1>
   <hr />
   <h1>{count}</h1>
   <button onClick={()=>{setCount(count+1)}}>+</button>
    </>
  )
}
export default UseEffect;