import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

const App = () => {
  return (
    <div>

      <NavBar />
      <ItemListContainer  greeting={"Bienvenidos a Basquetmania!"} />

    </div>
  )
}

export default App