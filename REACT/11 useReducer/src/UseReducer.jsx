import { useReducer } from "react";

function Reducer(state, action) {
  if (action.type === "Inc") {
    return { count: state.count + 1 };
  } else if (action.type === "Dec") {
    return { count: state.count - 1 };
  }
}

function Component() {
  const [state, dispatch] = useReducer(Reducer, { count: 0 });

  function handelInc() {
    dispatch({ type: "Inc" });
  }
  function handelDec() {
    dispatch({ type: "Dec" });
  }

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={handelInc}>+</button>
      <button onClick={handelDec}>-</button>
    </>
  );
}
export default Component;
