
import React, { useState, useEffect } from 'react';
import './App.css'
import Login from './components/login/login'
import NotFound from './components/404/NotFound'
import BidPage from './components/bidPage/BidPage'
import Seller from './components/seller-page/seller'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Signup from './components/signup/Signup'
import HomeFooter from './components/home/HomeFooter';
import Vendors from './components/vendors/vendors';
import HomeContact from './components/home/HomeContact';
import Newsletter from './components/home/Newsletter';
import BidderPage from './components/bidderpage/BidderPage';
// import Seller from './components/seller-page/seller';
import CreateProduct from './components/createProduct/CreateProduct';
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
          console.log(user)
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
          <Route path='/auctions' element={<BidderPage/>}/>
          <Route path='/vendors' element={<Vendors/>}/>
          <Route path='/product' element={<BidPage/>}/>
          <Route path='/contact' element={
            <>
            <HomeContact/>
            <Newsletter/>
            </>
          }/>
          <Route path='/dashboard' element={<Seller/>}/>
          <Route path="/login" element={<Login value={value} setUser={setUser}/>} />
          <Route path="/auction/:id" element={<BidPage />}/>
          <Route path='/seller' element={<Seller user ={user}/>}/>
          <Route path='/new-product' element={<CreateProduct user={user}/>}/>
          <Route path="*" element={<NotFound value={value}/>} />
        </Routes>
        <HomeFooter/>
        
    </div>
  );
}
export default App;