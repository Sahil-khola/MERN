import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";

function UseMemo() {
  const [count, setcount] = useState(0);
  const [input, setInput] = useState();

  let  sum = 0
 
  const result = useMemo( function slowFunc() {
    for (let i = 0; i < 10000000; i++) {
      sum+=i;
    }
    console.log("i am slow function");
    return sum;
  },[count])
  
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        +
      </button>
      <hr />
      <input type="text" onChange={(event) => setInput(event.target.value)} />
      <h1>{input}</h1>
      <hr />
    </>
  );
}
export default UseMemo;
