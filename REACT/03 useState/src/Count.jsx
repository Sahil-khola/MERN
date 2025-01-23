import React, { useState } from 'react'

const Count = () => {
    const [count,setCount]=useState(1)
    
   function handelIncrease() {
    setCount(count+1)
   }
   function handeldecrease() {
    setCount(count-1)
   }
  return (
    <center>
      <h1>{count}</h1>
      <button onClick={handelIncrease} 
      style={
        {
            margin:'15px',
            height:'40px',
            width:'60px'
        }
      }
      >+</button>
      <button onClick={handeldecrease}
          style={
            {
                margin:'15px',
                height:'40px',
                width:'60px'
            }
          }>-</button>
    </center>
  )
}

export default Count;
