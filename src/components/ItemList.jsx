import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    console.log(productos)
    return (
        <div>

            {
                productos.map((p) => {
                    return (

                        <Item
                            titulo={p.titulo}
                            descripcion={p.descripcion}
                            precio={p.precio}
                        />
                    )
                })
            }

        </div>
    )
}

export default ItemList