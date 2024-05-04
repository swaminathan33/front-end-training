const TodoItems = ({no, display, text, setTodoList}) => {
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem('todos'))
    data = data.filter((item) => item.no != no)
    setTodoList(data)
  }

  const toggle = (no) =>{
    let data = JSON.parse(localStorage.getItem('todos'))
    for(let i = 0;i< data.length;i++){
      if (data[i].no == no) {
        if(data[i].display == ''){
          data[i].display = 'line'
        }
        else{
          data[i].display = ''
        }
        break
      }
    }
    setTodoList(data)
  }
  return (
    <div>
      <h3>
        {display ? '✔️' : '❌' } {no} . <button onClick={() => toggle(no)}>{text}</button> <button onClick={() => deleteTodo(no)}>🚮</button>
      </h3>
    </div>
  )
}

export default TodoItems
