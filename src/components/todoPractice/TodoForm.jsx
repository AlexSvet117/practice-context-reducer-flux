import React, { useContext, useReducer, useState } from 'react'
import { ACTIONS, storeReducer } from '../store/storeReducer'
import { initialState } from '../reducerPractice/StoreReducer'
import { initialStore } from '../store/initialStore'
import StoreContext from '../store/storeContext';

function TodoForm() {

// const [store, dispatch] = useReducer(storeReducer, initialStore())
const [store, dispatch] = useContext(StoreContext);
const [input, setInput] = useState('')

const handleOnSubmit = (e) => {
    e.preventDefault();

    const task = {
        id: Date.now(),
        title: input,
        completed: false
    }

    dispatch({type: ACTIONS.ADD_TODO, payload: task})

    setInput('')

}

  return (
    <form className='mt-4' onSubmit ={handleOnSubmit}>
      <div className="input-group">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input" disabled/>
  </div>
  <input 
  onChange={(e) => (setInput(e.target.value))}
  value={input} 
  type="text" className="form-control" aria-label="Text input with radio button"/>
  <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
</div>
    </form>
  )
}

export default TodoForm
