import React, { createContext, useState, useEffect } from 'react'
//create context
export const CartContext = createContext()

const CartProvider = ({children})=> {
  //cart state
  const [cart, setCart] = useState([])

const addToCart = ( product, id) =>{
    console.log(`${product.title} added to the cart ${id}`)
  }
  return (
    <CartContext.Provider value={ {addToCart} }>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;