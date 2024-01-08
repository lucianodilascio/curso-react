import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const mostrarProductos = new Promise((resolve, reject) => {
      
      setTimeout(() => {
        resolve([
          { id: 1, titulo: "Curry", descripcion: "Zapatilla Stephen Curry", precio: 85000, categoria: "zapatillas" },
          { id: 2, titulo: "Lebron", descripcion: "Zapatilla Lebron James", precio: 90000, categoria: "zapatillas" },
          { id: 3, titulo: "Jordan", descripcion: "Zapatilla Michael Jordan", precio: 95000, categoria: "zapatillas" },
          { id: 4, titulo: "Manga", descripcion: "Manga para el brazo Nike", precio: 20000, categoria: "indumentaria" },
          { id: 5, titulo: "Rodillera", descripcion: "Rodillera Nike", precio: 25000, categoria: "indumentaria" },
          { id: 6, titulo: "Vincha", descripcion: "Vincha Nike", precio: 23000, categoria: "indumentaria" }
        ]);
      }, 3000); 

      
    });

    mostrarProductos
      .then((resultado) => {
        
        setProductos(resultado);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  const productosFiltrados = categoryId
    ? productos.filter((producto) => producto.categoria === categoryId)
    : productos;

  return (
    <div>
      <ItemList productos={productosFiltrados} />
    </div>
  );
};

export default ItemListContainer;

