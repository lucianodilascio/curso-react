import React, { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';


const CartWidget = () => {
  const { contador } = useContext(CartContext);

  return (
    <div>
      
      {contador > 0 && <span className="contador-carrito">{contador}</span>}
    </div>
  );
};

export default CartWidget;