import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(20);
    function increment() {
        setCount(count + 1);
        
    }
    function decrement() {
        setCount(count - 1);
    }
    return(
       <div>
            
            <h1>Counter App</h1>
            <h2>Count: {count} </h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
       </div>
    )
}