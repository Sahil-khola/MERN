import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const[data,setdata]=useState(null)
 useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((Response)=>Response.json()).then((data)=>setdata(data)
    )
 },[])
  return (
    <div>
     {
        data ? (
            <div>
                <h1>title : {data.title}</h1>
            </div>
        ) : (
            <p>
                Loading
            </p>
        )
     }
    </div>
  )
}

export default FetchData
