import React from 'react'

const TodoItems = ({todo, setTodos, todos, setEditId, handleSubmit, setTodo}) => {

    const handleDelete = (id) =>{
        const newTodos = todos.filter((i) => i.id != id)
        setTodos(newTodos)
    }

    const handleEdit = (id) => {
        setEditId(id)
        const todo = todos.filter((text) => text.id == id)
        setTodo(todo[0].text)
    }
  return (
    <div>
        <h4>
            <span>{todo.text}</span> 
            <button onClick={() => handleDelete(todo.id)}>❌</button> 
            <button onClick={() => handleEdit(todo.id)}>🖋️</button>
        </h4>
    </div>
  )
}

export default TodoItems
