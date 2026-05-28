import { useState } from 'react'


import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './pages/Home'
import CardPizza from './components/CardPizza'
import Footer from './components/Footer'
import PizzaDetail from './pages/pizzadetail'

import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'

import Pizza from './components/Pizza'
import E404 from './pages/E404'
import Profiles from './pages/Profiles'

import './App.css'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
   
    
     <Routes>
   
      <Route path='/' element={<Home/>}/>
      <Route path='/pizza/:id' element={<PizzaDetail/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Profile' element={<Profiles/>}/>
      <Route path='*' element={<E404/>}/> 
   
    </Routes>
   
  
   
    </> 
  )
}

export default App