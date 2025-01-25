import React, { useEffect, useState } from 'react'
import data  from './Fetch.json'

const Fetch = () => {
    const [users,SetUser]=useState([])
    useEffect(()=>{
     data =>  SetUser(data)
    },[])
    console.log(data);
    
  return (
    <div>
      <h2>User List</h2>
      
       <ol>
       {
            data.map((users)=>{
              return(
                <li key={users.id}>
                    <a href={users.html_url}>{users.login}</a></li>
              )
            })
        }
       </ol>
      
    </div>
  )
}

export default Fetch
