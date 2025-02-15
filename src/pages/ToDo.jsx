import { useContext } from "react"
import StoreContext from "../components/store/storeContext"
import TodoForm from "../components/todoPractice/TodoForm"
import { useEffect } from "react"
import TodoList from "../components/todoPractice/TodoList"


function ToDo() {

    useEffect(()=> {
        const html = document.querySelector('html')
        html.setAttribute('data-bs-theme', 'dark')
    }, [])


  return (
    <div className="mt-2 container col-sm-12 col-md-10 col-ld-8">
        <div>
            <h2 className="text-center">Do more, think less ...</h2>
        </div>
      <TodoForm/>
      <TodoList/>
    </div>
  )
}

export default ToDo
