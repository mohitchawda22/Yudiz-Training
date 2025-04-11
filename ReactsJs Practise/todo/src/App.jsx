import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'

function App() {

  const [todo, setTodo] = useState([])

  const saveTodo = (e) => {
    e.preventDefault()
    const todoname = e.target.todoname.value
    if (!todo.includes(todoname)) {
      setTodo([...todo, todoname])
    } else {
      alert("todo already exsist...")
    }
  }

  const list = todo.map((value, index) => {
    return (
      <TodoList value={value} key={index} indexNumber={index} todo={todo} setTodo={setTodo} />
    )
  })


  return (
    <>
      <div className='todo'>
        <h1 className='h1'>TODO List</h1>
        <form className='form' onSubmit={saveTodo}>
          <input type="text" name='todoname' className="input" />
          <button className='btn btn-primary'>Save</button>
        </form>
        <ul>
          {list}
        </ul>
      </div>
    </>
  )
}


export default App

function TodoList({ value, indexNumber, todo, setTodo }) {

  const [check,setCheck]=useState(false)

  const deleteList = () => {
    const finalList = todo.filter((v, i) =>
      i != indexNumber
    )
    setTodo(finalList)
  }

  const checkClick=()=>{
    setCheck(!check)
  }
  return (
    <>
      <li className={(check) ? "check":""} onClick={checkClick } >{value} <span onClick={deleteList}>&times;</span></li>
    </>
  )
}