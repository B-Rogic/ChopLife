'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if(typeof window !== 'undefined'){
      const savedCard = localStorage.getItem('cartItems');
      if(savedCard) {
        setCartItems(JSON.parse(savedCard));
      }
    }
  }, [])

  useEffect(() => {
    if(isClient && typeof window !== 'undefined') {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if(existingItem) {
        return prevItems.map((cartItem) => 
          cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
      } else{
        return [...prevItems, {...item, quantity: 1}];
      }
    })
  }

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId) 
    )
  }

  const removeAllCartItem = () => {
    setCartItems([]);
  }

  const updateItemQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) => 
      prevItems.map((item) => 
        item.id === itemId ? {...item, quantity: newQuantity} : item
      ).filter(item => item.quantity > 0)
    )
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.amount * item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addItemToCart,
      removeItemFromCart,
      removeAllCartItem,
      updateItemQuantity,
      getTotalPrice,
    }}>
      {children}
    </CartContext.Provider>
  )

}

export const useCart = () => {
  return useContext(CartContext);
}
