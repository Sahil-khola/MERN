import { useState } from "react"


function App() {
  const [name,setName]=useState("")
  const [pass,setPass]=useState("")
  const [email,setEmail]=useState("")
  function handelName(event) {
    setName(event.target.value)
  }
  function handelPass(event) {
    setPass(event.target.value)
  }
  function handelEmail(event) {
    setEmail(event.target.value)
  }
  return (
    <>
     <form>
      <label htmlFor="Name">Name</label>
      <input type="text" value={name} onChange={handelName}  id="Name" />
      <br /><br />
      <label htmlFor="Email">Email</label>
      <input type="Email" value={email} onChange={handelEmail} id="Email"/>
      <br /><br />
      <label htmlFor="Password">Password</label>
      <input type="password" value={pass} onChange={handelPass} id="Password" />
      <button onClick={()=>{setEmail([]),setName([]),setPass([])}}>Clear</button>
      <pre>
        Name :{name} <br />
        Email :{email} <br />
        Password :{pass}
      </pre>
     </form>
    </>
  )
}

export default App
