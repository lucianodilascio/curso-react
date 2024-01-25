import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {
  if (productos.length === 0) {
    return <div>No hay productos disponibles.</div>;
  }

  return (
    <div>
      {productos.map((producto) => (
        <Item
          key={producto.id}
          titulo={producto.titulo}
          descripcion={producto.descripcion}
          precio={producto.precio}
          categoria={producto.categoria}
          id={producto.id}
        />
      ))}
    </div>
  );
};

export default ItemList;








