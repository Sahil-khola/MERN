import React, { useState } from 'react'

const BgChanger = () => {
    const[color,setColor]=useState("red")
    function hanndelColor () {
        setColor('black')
    }
  return (
   <>
    <div style={
        {
            backgroundColor :color,
            width:'200px',
            height:'200px',
        }
    }>
      
    </div>
    <button onClick={()=>setColor('blue')}>Blue</button>
   </>
  )
}

export default BgChanger
