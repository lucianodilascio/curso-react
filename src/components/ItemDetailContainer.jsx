import React from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
const ItemDetailContainer = ({greeting }) => {

    const {categoriaId} = useParams()
  
    const productos = [
      { id: 1, titulo: "Curry", descripcion: "Zapatilla Stephen Curry", precio: 85000, categoria:"zapatillas" },
      { id: 2, titulo: "Lebron", descripcion: "Zapatilla Lebron James", precio: 90000, categoria:"zapatillas" },
      { id: 3, titulo: "Jordan", descripcion: "Zapatilla Michael Jordan", precio: 95000, categoria:"zapatillas" },
      { id: 4, titulo: "Manga", descripcion: "Manga para el brazo Nike", precio: 20000, categoria:"indumentaria" },
      { id: 5, titulo: "Rodillera", descripcion: "Rodillera Nike", precio: 25000, categoria:"indumentaria" },
      { id: 6, titulo: "Vincha", descripcion: "Vincha Nike", precio: 23000, categoria:"indumentaria"}
    ]
  
  
    const mostrarProductos = new Promise((resolve, reject) => {
  
      if (productos.lenght > 0) {
        setTimeout(() => {
          resolve(productos)
        }, 3000)
      } else {
        reject("no se obtuvieron productos")
      }
  
    })
  
    mostrarProductos
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })
  
  
  
    return (
      <center>
        <ItemDetail productos={productos} />
        
      </center>
    )
  }

export default ItemDetailContainer