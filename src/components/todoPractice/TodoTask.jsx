import React from 'react'

function TodoTask({id, title, completed}) {
  return (
    <li key={id} className="list-group-item d-flex justify-content-between">
                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                <label className="ms-2 form-check-label flex-fill" for="firstCheckbox">{title}</label>
                <span className='text-danger fw-bold'>X</span>
                </li>
  )
}

export default TodoTask
