
import React, { useState, useEffect } from 'react';
import './App.css'
import Login from './pages/login/login'
import NotFound from './pages/404/NotFound'
import BidPage from './pages/bid/BidPage'
import Seller from './pages/seller-page/seller'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Signup from './components/signup/Signup'


function App() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("jwt");

  // auto-login
  useEffect(() => {
    fetch("http://localhost:3000/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });        
      }
    });
  }, []);

  const [loggedIn, setLoggedIn] = useState(false);
  const value = [loggedIn, setLoggedIn];
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/auctions' />
          <Route path='/vendors' />
          <Route path='/contact' />
          <Route path="/login" element={<Login value={value}/>} />
          <Route path='/product-bid' element={<BidPage/>}/>
          <Route path='/seller' element={<Seller/>}/>
          <Route path="*" element={<NotFound value={value}/>} />
        </Routes>
        
    </div>
  );
}
export default App;