import React, { useState } from 'react'
import { useReducer } from "react"
import { reducer, initialState } from './StoreReducer'


function DemoReducer() {
    // two mandatory things provide: reducer function, initial state
    const [state, dispatch ] = useReducer(reducer, initialState)



  return (
    <div className='container text-center'>
        <div className="botder border-2 border-dark-subtle rounded-3 p-4 mt-4"></div>
        <h5>Counter</h5>
        <h4>{state.counter}</h4>
        <button onClick = {() => dispatch({type: 'INCREMENT'})} className='btn btn-success m-2'>Increment</button>
        <button onClick = {() => dispatch({type: 'DECREMENT'})} className='btn btn-danger ms-2'>Decrement</button>
    </div>
  )
}

export default DemoReducer
