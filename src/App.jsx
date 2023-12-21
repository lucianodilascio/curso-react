import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/cart'


const App = () => {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        
      <Route  path = '/' element={ <ItemListContainer/>} />
      <Route  path = '/cart' element={ <Cart/>} />
      <Route  exact path = '/categoria/:categoriaId' element={ <ItemListContainer/>} />
      <Route  exact path = '/producto/:productoId' element={ <ItemDetailContainer/>} />

      
      </Routes>
      
      
      
      <ItemListContainer  greeting={"Bienvenidos a Basquetmania!"} />


    </BrowserRouter>
  )
}

export default App;