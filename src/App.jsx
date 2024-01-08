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

        <Route exact path='/' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route exact path='/producto/:id' element={<ItemDetailContainer />} />
        <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
      

      </Routes>

        
      
      
      

    </BrowserRouter>
  )
}

export default App;