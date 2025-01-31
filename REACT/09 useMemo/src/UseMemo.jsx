import React, { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState();
  function clickHandel() {
    setCount(count + 1);
  }
  function inputHandel(event) {
    setInput(event.target.value);
  }
  const result = useMemo(function slowFunction() {
    let sum = 0;
    for (let i = 0; i<100000; i++) {
      sum+=1;
    }
    console.log('i am slow function');
    return sum
    
  }, [input]);

  return (
    <center>
      <h1>Use memo hook in React js</h1>
      <h1>{count}</h1>
      <button onClick={clickHandel}>+</button>
      <hr />
      <input type="text" onChange={inputHandel} />
      <h1>input : {result}</h1>
    </center>
  );
};

export default UseMemo;
