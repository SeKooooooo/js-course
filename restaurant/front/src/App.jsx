import { useState } from 'react'
import './App.css'
import MenuPage from './pages/MenuPage/MenuPage'
import {Route,Routes} from 'react-router-dom'
import BasketPage from './pages/BasketPage/BasketPage'

function App() {

  return (
    <>
       <Routes>  
          <Route path="/" element={<MenuPage/>}/>
          <Route path="/basket" element={<BasketPage/>}/>
        </Routes>
    </>
  )
}

export default App
