import React, { useState } from 'react'

const App = () => {
  const [state, setState] = useState(0);
  const increment = () =>{
    setState(state + 1)
  }
  const decrement = () => {
    setState(state - 1)
  }
  return (
    <div>
      <button onClick={increment}>+</button>
      {state}
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App
