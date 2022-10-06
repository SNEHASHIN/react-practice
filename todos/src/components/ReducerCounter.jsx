import React, { useReducer } from "react";


const initialState = {
    value: 0,
}
const reducer=(state,action)=>{
    switch(action){
        case 'increment':return {...state, value: state.value};
        case 'decrement': return {...state, value: initialState.value};
        case 'reset': return initialState;
        default: return state;
    }
};

export function ReducerCounter(){
    const [count, dispatch] = useReducer(reducer, initialState)
    
    return (
      <>
        <h1>count- {count}</h1>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          decrement
        </button>
        <button onClick={() => dispatch({type: "reset"})}>reset</button>
      </>
    );
}