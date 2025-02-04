import { useTransition } from "react"

function App() {
 
  const [pending ,startTransistion] = useTransition();
   function handelbutton() {
    startTransistion(async()=>{
      await new Promise (res =>setTimeout(res,2000))
    })
  }
  return (
    <>
   <button disabled={pending} onClick={handelbutton}>Click me</button>
    </>
  )
}

export default App
