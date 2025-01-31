import {NameContext} from './App'
const C = () => {
  return (
   <NameContext.Consumer>
    {
        (val)=>{
            return(
            <h1>Name : {val}</h1>
            )
        }
    }
   </NameContext.Consumer>
  )
}

export default C
