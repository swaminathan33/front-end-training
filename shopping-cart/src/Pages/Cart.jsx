import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./useContext";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  let total = 0;
  
  const handleRemove = (id) => {
    const newCartItems = cartItems.filter((i) => i[0].id !== id)
    setCartItems(newCartItems)
  }
  return (
    <div>
      <div className="nav">
        <Link className="link" to={"/shopping"}>
          Shop
        </Link>
      </div>
      <div className="cart-title">Your Cart</div>
      <div className="cart-items">
      {
        cartItems.map((c) => {
          return (
            c.map((i, index) => {
              total = total + i.price
              return (
                  <div className="cart-item" key={index}>
                    <img src={i.image} alt="" width={100} height={100} />
                    <div className="name">{i.title}</div>
                    <div className="price">$ {i.price}</div>
                    <div><button onClick={() => handleRemove(i.id)}>X</button></div>
                  </div>
              );
            })
          )
        })
      }
      </div>
      <div className="total">
        <div className="text">Total</div>
        <div className="number">{total}</div>
      </div>
      <div className="checkout">
      <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
