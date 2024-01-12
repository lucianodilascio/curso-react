import React, { useState } from 'react'
import { Input, Button, Text } from '@chakra-ui/react'
import Swal from 'sweetalert2'
const Form = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [purchaseId, setPurchaseId] = useState("vrx-2443")
    const handleSumbit = (e) => {

        e.preventDefault()

        Swal.fire(`Muchas Gracias ${nombre}, nos contactaremos a ${email} para finalizar el proceso de compra`);

        setEmail("")
        setNombre("")

    }





    return (
        <div className='container'>
            <form action="" className='formulario' onSubmit={handleSumbit}>
                <Input width="1000px" placeholder='Nombre y Apellido' onChange={(e) => setNombre(e.target.value)} value={nombre} />
                <Input placeholder='Correo Electronico' type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                <Button className='botonEnviar' width="200px" colorScheme='teal' variant='outline' type="sumbit">
                    Enviar Información
                </Button>


                <Text textAlign="center">
                    {`el id de de su compra es: ${purchaseId}`}
                </Text>
            </form>
        </div>
    )
}

export default Form