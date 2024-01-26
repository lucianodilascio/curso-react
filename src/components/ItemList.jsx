import React from 'react';
import Item from './Item';
import { SimpleGrid } from '@chakra-ui/react';

const ItemList = ({ productos }) => {
  if (productos.length === 0) {
    return <div>No hay productos disponibles.</div>;
  }

  return (
    
    <SimpleGrid columns={{sm:'auto', md:3}} bg='#888888'>
    {    
    
      productos.map((producto) => {
        return (
            <div key={producto.id}>
        <Item
          key={producto.id}
          titulo={producto.titulo}
          descripcion={producto.descripcion}
          precio={producto.precio}
          categoria={producto.categoria}
          id={producto.id}
          imagen={producto.imagen}
        />

        </div>
        )
      })
    }
    </SimpleGrid>
  )
}


export default ItemList;








