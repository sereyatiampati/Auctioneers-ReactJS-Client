import React, { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Bidderpage from './pages/Bidderpage/Bidderpage'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Bidderpage/>
    </div>
  )
}

export default App
