import React, { useEffect, useState } from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'

const Shopping = () => {
  const [items, setItems] = useState([])
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      setItems(data)
      setLoading(false)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <div className="nav">
        <div className="head">Shopify</div>
        <div className="links">
        <Link className='link' to={'/'}>Home</Link>
        <Link className='link' to={'cart'}>Cart</Link>
        </div>
      </div>
     <div className="shopping-items">
     {
      loading 
      ? 
      <h2 className='loading'>Loading..</h2>
       : 
      
        items.map((item, index) => {
          return <Product item={item} key={index} count={count} setCount={setCount} />
        })
      
     }
     </div>
    </div>
  )
}

export default Shopping
