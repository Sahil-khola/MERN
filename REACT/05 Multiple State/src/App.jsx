import { useState } from "react"


function App() {
  // const [name,setName]=useState("")
  // const [pass,setPass]=useState("")
  // const [email,setEmail]=useState("")
  // function handelName(event) {
  //   setName(event.target.value)
  // }
  // function handelPass(event) {
  //   setPass(event.target.value)
  // }
  // function handelEmail(event) {
  //   setEmail(event.target.value)
  // }

  const [form,setForm]=useState({
    name:'',
    email:'',
    pass:''
  })

  function handelInput(e) {
        const {name,value}=e.target;
   setForm({...form,[name]:value,})
  }
  return (
    <>
     <form>
      <label htmlFor="Name">Name</label>
      <input type="text" value={form.name} onChange={handelInput} name="name"  id="Name" />
      <br /><br />
      <label htmlFor="Email">Email</label>
      <input type="Email" value={form.email} onChange={handelInput} name="email" id="Email"/>
      <br /><br />
      <label htmlFor="Password">Password</label>
      <input type="password" value={form.pass} onChange={handelInput} name="pass" id="Password" />
      {/* <button onClick={()=>{setEmail([]),setName([]),setPass([])}}>Clear</button> */}
      <pre>
        Name :{form.name} <br />
        Email :{form.email} <br />
        Password :{form.pass}
      </pre>
     </form>
    </>
  )
}

export default App
