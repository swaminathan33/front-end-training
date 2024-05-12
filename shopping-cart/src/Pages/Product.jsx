import React, { useEffect, useState } from 'react'

const Product = ({item, cartItems, setCartItems, items}) => {

    const handleSubmit = (id) =>{
        const ii = items.filter((i) => i.id == id)
        setCartItems([...cartItems, ii])
    }

  return (
    <div>
        <div className="card">
            <div className="img">
                <img src={item.image} alt="" />
            </div>
            <div className="title">{item.title}</div>
            <div className="price">${item.price}</div>
            {/* <div className="description">
                {item.description}
            </div> */}
            <button onClick={() => handleSubmit(item.id)}>Add to Cart</button>
        </div>
        {/* <form action="" onSubmit={(e) => handleSubmit(e)}>
            <input type="number" onChange={(e) => setCount(e.target.value)} />
            <button type='submit'>Add</button>
        </form> */}
    </div>
  )
}

export default Product
