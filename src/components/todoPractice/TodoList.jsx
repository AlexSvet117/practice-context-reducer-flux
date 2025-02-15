import React from 'react'
import { useContext} from 'react'
import StoreContext from '../store/storeContext'
import TodoTask from './TodoTask'


function TodoList() {

    const [store, dispatch] = useContext(StoreContext)

  return (
    <div className='mt-3 border rounded-2'>
        <h3 className='text-center'>Todos...</h3>
        <ul className = "list-group p-2">
            {store.todos.map((task) => (
                <TodoTask  {...task} />

            ))}
        </ul>
      
    </div>
  )
}

export default TodoList
