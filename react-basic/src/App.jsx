import React from 'react'
import './index.css'

function MyButton() {
  return (
    <button className='btn'>
      'I am a button'
    </button>
  )
}

const App = () => {
  return (
    <div>
      <MyButton />
    </div>
  )
}

export default App
