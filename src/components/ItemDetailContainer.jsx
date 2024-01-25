
import React, { useState, useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import Loader from './Loader';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "zapatillas", id);

    getDoc(itemRef)
      .then((snapshot) => {
        setProducto({ ...snapshot.data(), id: snapshot.id });
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error getting document:", error);
        setLoading(false); 
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        producto && <ItemDetail producto={producto} />
      )}
    </div>
  );
};

export default ItemDetailContainer;