import { useState, UseEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const { categoryId } = useParams()
  console.log(categoryId)





  const productos = [
    { id: 1, titulo: "Curry", descripcion: "Zapatilla Stephen Curry", precio: 85000, categoria: "zapatillas" },
    { id: 2, titulo: "Lebron", descripcion: "Zapatilla Lebron James", precio: 90000, categoria: "zapatillas" },
    { id: 3, titulo: "Jordan", descripcion: "Zapatilla Michael Jordan", precio: 95000, categoria: "zapatillas" },
    { id: 4, titulo: "Manga", descripcion: "Manga para el brazo Nike", precio: 20000, categoria: "indumentaria" },
    { id: 5, titulo: "Rodillera", descripcion: "Rodillera Nike", precio: 25000, categoria: "indumentaria" },
    { id: 6, titulo: "Vincha", descripcion: "Vincha Nike", precio: 23000, categoria: "indumentaria" }
  ]


  const mostrarProductos = new Promise((resolve, reject) => {

    if (productos.length > 0) {
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


  const productosFiltrados = productos.filter((producto) => producto.categoria == categoryId)

  return (
    <div>
      {
        categoryId ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos} />
      }
    </div>
  )
}

export default ItemListContainer