import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      <div className="nav">
        <Link className='link' to={'/shopping'}>Shop</Link>
      </div>
    </div>
  )
}

export default Cart
