import { createContext, useState } from "react";

export const CartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

const [cart, setCart] = useState([])

const agregarAlCarrito = (producto, contador) => {
    
 const agregarItem = {...producto, contador}

 const nuevoCarrito = [...cart]

 const enCarrito = nuevoCarrito.find ((item) => item.id === producto.id)
 if (enCarrito) {
    enCarrito.contador += contador
 } else {
    nuevoCarrito.push(agregarItem)
 }
 setCart(nuevoCarrito);


}



const [contador, setContador] = useState(0)


const sumar = () => {

    if (contador < 10) {
        setContador(contador + 1)
    }
}

const restar = () => {

    if (contador > 0) {
        setContador(contador - 1)
    }
}

const cantidadEnCarrito = () => {
    return cart.reduce((acc, producto) => acc + producto.contador, 0)
}




    return (
        <CartContext.Provider value={{cart, setCart, sumar, restar, contador, setContador, cantidadEnCarrito, agregarAlCarrito}}>
            {children}
        </CartContext.Provider>
    )
}


export default ShoppingCartProvider