import React, { useState, useEffect } from 'react';

import './Counter.css';

const Counter = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        // alert("Welcome");
    }, [])

    const incrementValue = () => {
        setCount(count+1);
    }

    const decrementValue = () => {
        setCount(count-1);
    }

    const resetValue = () => {
        setCount(0);
    }

    return(
        <div>
            <h1>Counter</h1>
            <h3>Value: {count}</h3>
            <button className="inc-btn" onClick={incrementValue}>Increment</button>
            <button className="dec-btn" onClick={decrementValue}>Decrement</button>
            <button className='reset' onClick={resetValue}>Reset</button>
        </div>
    );
}

export default Counter;