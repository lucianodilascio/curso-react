import React from 'react';
import Form from './Form';
import { useContext, useState } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import Loader from './Loader';
import { Button } from '@chakra-ui/react';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);


  const handleRemoveItem = (productId) =>{

    const newCart = cart.filter((item) => item.id !== productId);

    setCart(newCart)
    };

    const handleEmptyCart = () => {

      setCart([])
    }





    return (
      <div>
        <h1 className='carritoCompras'>Carrito de Compras</h1>
        {cart.length === 0 ? (
          <p className='carritoVacio'>El carrito está vacío</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id}>
                <p>{item.titulo}</p>
                <p>Precio: ${item.precio}</p>
                <p>Cantidad: {item.contador}</p>
                {/* Agrega botones para manipular la cantidad y eliminar el producto */}
                <Button onClick={() => handleRemoveItem(item.id)}>Eliminar</Button>
              </div>
            ))}
            {/* Agrega un botón para vaciar el carrito */}
            <Button onClick={handleEmptyCart}>Vaciar Carrito</Button>
          </div>
        )}
      </div>
    );
  };
  
  export default Cart;