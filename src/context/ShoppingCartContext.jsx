import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [contador, setContador] = useState(0);

  const agregarAlCarrito = (producto, contador) => {
    const nuevoCarrito = [...cart];
    const enCarritoIndex = nuevoCarrito.findIndex((item) => item.id === producto.id);

    if (enCarritoIndex !== -1) {
      nuevoCarrito[enCarritoIndex].contador += contador;

      if (contador < 0 && nuevoCarrito[enCarritoIndex].contador < 0) {
        nuevoCarrito[enCarritoIndex].contador = 0;
      }
    } else {
      nuevoCarrito.push({ ...producto, contador });
    }

    setCart(nuevoCarrito);
    
  };

  const sumar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const cantidadEnCarrito = () => {
    return cart.reduce((acc, producto) => acc + producto.contador, 0);
  };

  const calcularPrecioTotal = () => {
    return cart.reduce((acc, producto) => acc + producto.precio * producto.contador, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        sumar,
        restar,
        contador,
        setContador,
        cantidadEnCarrito,
        agregarAlCarrito,
        calcularPrecioTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;