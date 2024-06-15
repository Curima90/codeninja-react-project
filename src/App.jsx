import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'

function App() {
 
  return (
    <>
    <Navbar />
    <div className="content"></div>
      <Home></Home>
    </>
  )
}

export default App
