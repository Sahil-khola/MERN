import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const[data,setData]=useState([])
    const[name,setName]=useState()
 useEffect(()=>{
 axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
    setData(response.data)
 })
 },[])
 const newItem = {id:Date.now() , title:name, body:name}
 function handelSubmit(event) {
    event.preventDefault();

    axios.post('https://jsonplaceholder.typicode.com/users', newItem).then(response=>setData([...data,response.data]))
 }
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} />
        </form>
      {
        data.map(item => (
            <div key={item.id}>{item.name}</div>
        ))
      }
      <button>Submit</button>
    </div>
  )
}

export default Axios
 