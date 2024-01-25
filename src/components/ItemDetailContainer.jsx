import React, { useState, useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import Loader from './Loader';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducto = async () => {
      const db = getFirestore();
      const itemRef = doc(db, "zapatillas", id);

      const snapshot = await getDoc(itemRef);

      if (snapshot.exists()) {
        const data = snapshot.data();
        setProducto({ id: snapshot.id, ...data });
      }

      setLoading(false);
    };

    fetchProducto();
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <ItemDetail producto={producto} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;