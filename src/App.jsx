import React from 'react'
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