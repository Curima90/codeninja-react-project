import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'

function App() {
 

  return (
    <>
    <Navbar />
    <div className="Content"></div>
      <Home></Home>
    </>
  )
}

export default App
