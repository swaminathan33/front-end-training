import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <div className="nav">
        <Link className='shop-link' to={'shopping'}>Shop 🛒</Link>
      </div>
      This is just a demo homepage 😅 click the top left ⬆️ shop button for shopping site 🛒.
    </div>
  )
}

export default App
