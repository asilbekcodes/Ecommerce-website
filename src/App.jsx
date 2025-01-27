import React from 'react'
import Product from './pages/Product'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Carts from './components/Carts'

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Carts' element={<Carts/>}/>
      </Routes>
      <Footer/>
    </React.Fragment>
  )
}

export default App
