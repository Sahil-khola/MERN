import React, { useState } from 'react'

const ToogleSwitch = () => {
    const[isToogle,setIsToogle]=useState(false);
    function handelToogle() {
        setIsToogle(!isToogle)
    }
  return (
    <div>
      <label htmlFor=""></label>
      <input type="checkbox" name="" id="" onChange={handelToogle} />
      <p> {isToogle ? "on":"off"}</p>
    </div>
  )
}

export default ToogleSwitch
