import useCounter from "./useCounter";

function Component() {
   const [count,Increment,Decrement]=useCounter()
    return(
        <>
        <h1>{count}</h1>
        <button onClick={Increment}>Increase</button>
        <button onClick={Decrement}>Decrease</button>
        </>
    )
}
export default Component;