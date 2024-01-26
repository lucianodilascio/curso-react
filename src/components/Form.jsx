import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { Text, Input, Button } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [orderId, setOrderId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { cart } = useContext(CartContext);
    const db = getFirestore();
    const ordersCollection = collection(db, 'orden');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!nombre || !email) {
        Swal.fire('Error', 'Ambos campos son requeridos', 'error');
        return;
      }
  
      try {
        setIsLoading(true); 
  
        const docRef = await addDoc(ordersCollection, {
          cliente: { nombre, email },
          items: cart,
          date: Date(),
        });
  
        setOrderId(docRef.id);
  
        Swal.fire(`Muchas Gracias ${nombre}!!, nos contactaremos a ${email} para finalizar el proceso de compra`);
  
        setEmail('');
        setNombre('');
      } catch (error) {
        Swal.fire('Hubo un error al procesar su pedido');
      } finally {
        setIsLoading(false); 
      }
    };
  
    return (
      <div className='container'>
        <p className='contactenos'>Contactenos! a la brevedad le informaremos sobre su compra</p>
        <form action='' className='formulario' onSubmit={handleSubmit}>
          <Input width='1000px' placeholder='Nombre y Apellido' onChange={(e) => setNombre(e.target.value)} value={nombre} />
          <Input placeholder='Correo Electronico' type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
          <Button className='botonEnviar' width='200px' colorScheme='teal' variant='outline' type='submit' disabled={isLoading}>
            {isLoading ? <Spinner /> : 'Enviar Información'}
          </Button>
          <Text textAlign='center'>{`El ID de su compra es: ${orderId}`}</Text>
        </form>
      </div>
    );
  };
  
  export default Form;