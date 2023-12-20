import { useState } from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = () => {


    const [contador, setContador] = useState(0)


    const mostrarMensaje = () => {
        alert(`agregado al carrito ${contador} unidades`)
    }
    return (
        <div>
            <Button colorScheme='teal' size='xs'  onClick={() => setContador(contador > 0 ? contador - 1 : 0)}>
                -
            </Button>
            <Button onClick={mostrarMensaje}>
                Agregar al carrito {contador}
            </Button>
            <Button colorScheme='teal' size='xs' onClick={() => setContador(contador + 1)}>
                +
            </Button>

        </div>
    )
}

export default ItemCount