
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Signup from './components/signup/Signup';
import './App.css'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="body">
        <Navbar/>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/auctions' />
          <Route path='/vendors' />
          <Route path='/contact' />
        </Routes>
        
    </div>
  );
}
export default App;
