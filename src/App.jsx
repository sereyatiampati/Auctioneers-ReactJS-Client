
import React, { useState, useEffect } from 'react';
import './App.css'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Signup from './components/signup/Signup'
import Footer from './components/footer/Footer';
import Bidderpage from './pages/Bidderpage/Bidderpage';


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
    <div className="body">
        <Navbar/>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/auctions' element={<Bidderpage/>}/>
          <Route path='/vendors' />
          <Route path='/contact' />
        </Routes>
        {/* <Footer/> */}
    </div>
  ); 
}
export default App;