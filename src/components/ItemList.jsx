import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    
    return (
        <div>

            {
                productos.map((productos) => {
                    return (

                        <Item 
                            key={productos.id}
                            titulo={productos.titulo}
                            descripcion={productos.descripcion}
                            precio={productos.precio}
                            categoria= {productos.categoria}
                            id={productos.id}
                        />
                    )
                })
            }

        </div>
    )
}

export default ItemList;