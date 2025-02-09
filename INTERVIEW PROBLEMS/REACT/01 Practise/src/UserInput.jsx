import React, { useState } from 'react'

const UserInput = () => {
    const[Name,setName]=useState("")
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="Name" id="Name" onChange={(event)=>setName(event.target.value)} />

      <h3>Name : {Name}</h3>
    </div>
  )
}

export default UserInput
