import React, { useEffect, useRef } from 'react'

const UseRefDOM = () => {
    const inputEle = useRef()
    useEffect(()=>{
        inputEle.current.focus()
    },[])
  return (
    <div>
      <input type="text" ref={inputEle} />
    </div>
  )
}

export default UseRefDOM
