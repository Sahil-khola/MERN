import { useEffect, useRef, useState } from "react";

function Component (){
    const [input,setInput]=useState()
    const render = useRef(0)
    
    useEffect(()=>{
        render.current = render.current+1
    })

    function handelInput(event) {
        setInput(event.target.value)
    }
    
    return(
        <>
         <input type="text" value={input} onChange={handelInput} />
         <p>the component is render is {render.current}</p>
        </>
    )
}
export default Component;