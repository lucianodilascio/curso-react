import React from 'react'
import Form from './Form';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const Cart = () => {

const {cart,setCart} = useContext(CartContext);


  

  return (
    <div>
      <h1>{cart}</h1>
      <Form />
    </div>
  )
}

export default Cart;