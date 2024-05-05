import React, { useEffect, useState } from 'react'
import TodoItems from './TodoItems'

const Todo = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [editId, setEditId] = useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(editId){
            const newTodos = todos.map((item) => {
                if(item.id == editId){
                    return [item.id = editId, item.text = todo]
                }
                else{
                    return item
                }
                
            })
            setEditId(null)
            setTodo('')
        }
        else{
            setTodos([...todos, {id: Math.floor(Math.random() * 10000), text: todo}])
            setTodo('')
        }
    }

    useEffect(() => {
        console.log(todos)
    }, [todos])

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input value={todo} type="text" onChange={(e) => setTodo(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
        {
            todos.map((i, index) => {
                return <TodoItems key={index} todo={i} setTodos={setTodos} setTodo={setTodo} todos={todos} setEditId={setEditId} handleSubmit={handleSubmit}/>
            })
        }
    </div>
  )
}

export default Todo
