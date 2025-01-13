import { Fragment } from "react";
import './App.css'
function App (){
  const name = "Sahil";
  const age = 20;
  const city = "Gurugram";
  return(
    <Fragment>
    <div>
    <h1>First React</h1>
     <h4 style={{color:'green'}}>Name : {name}</h4>
     <h4>Age : {age}</h4>
     <h4> City: {city}</h4>
     <p>{20-20+10}</p>
    </div>
    </Fragment>
  )
}
export default App;