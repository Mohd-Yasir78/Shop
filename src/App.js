
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar  from './component/reuse/Navbar'
import Home from './component/Home'
import Fertilizer from './component/Fertilizer'
import Seed from './component/Seed'
import Pesticide from './component/Pesticide'
import Register from './component/Register'
import Login from './component/Login'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/fertilizer' element={<Fertilizer/>}/>
      <Route path='/seed' element={<Seed/>}/>
      <Route path='/pesticide' element={<Pesticide/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App