import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'
import ShoppingCartContext from './context/ShoppingCartContext'
import Form from './components/Form'



const App = () => {
  return (
    <BrowserRouter>

      <ShoppingCartContext>

      <NavBar />

      <Routes>

        <Route exact path='/' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route exact path='/producto/:id' element={<ItemDetailContainer />} />
        <Route exact path='/category/:id' element={<ItemListContainer />} />
        <Route exact path='/Form' element={<Form />} />
      
      </Routes>


      </ShoppingCartContext>
      
    </BrowserRouter>
  )
}

export default App;