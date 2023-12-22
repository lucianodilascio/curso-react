import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'

const App = () => {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path='/' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route exact path='/producto/:productoId' element={<ItemDetailContainer />} />
      

      </Routes>

        <ItemDetailContainer />

      
      

    </BrowserRouter>
  )
}

export default App;