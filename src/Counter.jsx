import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter) 
    console.log(counter);
    const incrementHandler = (amount) => {
        dispatch({type: "increment", amount: amount})
    }
    const decrementHandler = (amount) => {
        dispatch({type: "decrement", amount: amount})
    }
    const toggleCounterHandler = () => {
        dispatch({type : "toggle"})
    }
    return ( 
        <div>
            
            <h1>Redux Counter</h1>
            <div>Counter value {counter}</div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
            <div>
                <button onClick={() => incrementHandler(1)}>Increment (+)</button>
                
                <button onClick={() => decrementHandler(1)} >Decrement (-)</button>

                <button onClick={() => incrementHandler(5)}>Increment (+5)</button>

                <button onClick={() => decrementHandler(5)}>Increment (-5)</button>
            </div>
        </div>
     );
}

export default Counter;