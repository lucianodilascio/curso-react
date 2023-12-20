import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {

  const productos = [
    { titulo: "Curry", descripcion: "Zapatilla Stephen Curry", precio: 85000},
    { titulo: "Lebron", descripcion: "Zapatilla Lebron James", precio: 90000},
    { titulo: "Jordan", descripcion: "Zapatilla Michael Jordan", precio: 95000}
  ]









  return (
    <center>
    <ItemList productos={productos}/>
    </center>
  )
}

export default ItemListContainer