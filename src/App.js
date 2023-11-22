import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from "react-router-dom"
import Side from './Pages/Side'
const App = () => {
  return (
    <Routes>
   
     
      <Route exact path="/" element={ <Home />}/>
      <Route exact path="/Side" element={ <Side />}/>
    </Routes>
  )
}

export default App