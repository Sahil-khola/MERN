import { useEffect, useRef, useState } from "react";

function Component() {
    const count = useRef(0);
    function handel() {
        count.current= (count.current+1)
        console.log(`clicked ${count.current} times`)
    }
    useEffect(()=>{
        console.log('the component have been rerender')
    })
    return(
        <>
        <button onClick={handel}>Click me</button>
        </>
    )
}
export default Component;