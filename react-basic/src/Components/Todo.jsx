import { useEffect, useRef, useState } from "react"
import TodoItems from "./TodoItems";

let count = 0;
const Todo = () => {
  const inputRef = useRef(null)
  const [todoList, setTodoList] = useState([])

  const add = (e) =>{
    e.preventDefault();
    setTodoList([...todoList, {no: count++, text: inputRef.current.value, display: ''}])
    inputRef.current.value = '';
    localStorage.setItem('todocount', count)
  }

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem('todos')))
    count = localStorage.getItem('todocount')
  }, [])

  useEffect(() => {
    setTimeout(() => {
      console.log(todoList)
    localStorage.setItem('todos', JSON.stringify(todoList))
    }, 100);
  }, [todoList])

  return (
    <div>
      <h1>Todo List</h1>
      <form action="" onSubmit={add}>
      <input type="text" ref={inputRef}  />
      <button type="submit">Submit</button>
      </form>
      <div className="todolist">
        {
          todoList.map((item, index) => {
            return <TodoItems setTodoList={setTodoList} no={item.no} display={item.display} text={item.text} key={index} />
          })
        }
      </div>
    </div>
  )
}

export default Todo
