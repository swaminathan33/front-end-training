import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <div className="nav">
        <Link className='link' to={'/'} >Home</Link>
        <Link className='link' to={'shopping'}>Shop</Link>
      </div>
      Simple Home page 
    </div>
  )
}

export default App
