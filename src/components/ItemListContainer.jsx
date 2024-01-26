import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Loader from './Loader';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';


const ItemListContainer = () => {
  const {id} = useParams()
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setContador } = useContext(CartContext);

  useEffect(() => {

    setContador(0);
    const db = getFirestore();
    const itemsCollection = collection(db, "zapatillas");

    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductos(docs);
      })
      
      .finally(() => {
        setLoading(false);
      });
    }, []);
    
    const productosFiltrados = productos.filter((producto) => producto.categoria == id)
    
  return (
    <div>
      <h1 className='nuestrosProductos'>Nuestros Productos</h1>
      {loading ? (
        <Loader />
      ) : (
        <div>
          { id ? <ItemList productos={productosFiltrados} /> :  <ItemList productos={productos}  />}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;

