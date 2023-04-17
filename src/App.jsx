import { useState } from 'react'
import './App.css'
import { Banner } from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
    </div>
  )
}

export default App
