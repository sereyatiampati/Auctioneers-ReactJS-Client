import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar({user, setUser}) {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("Buyer");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    fetch("http://localhost:3000/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  };

  if (!isLoggedIn) {  
    return (
    <header id="header">
    <div class="container d-flex align-items-center">

     <a href="index.html" class="logo me-auto"><img src="/favicon-32x32.png" alt="" class="img-fluid"/></a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><NavLink to= '/'class="nav-link scrollto active" >Home</NavLink></li>
          <li><NavLink to='/auctions'class="nav-link scrollto" >Auctions</NavLink></li>
          <li><NavLink to='/vendors' class="nav-link scrollto" >Vendors</NavLink></li>
          <li><NavLink to='/contact'  class="nav-link   scrollto" >Contact</NavLink></li>
          <li><NavLink to='/login' class="nav-link scrollto">Sign-in</NavLink></li>
          <li><a class="getstarted scrollto" onClick={()=> navigate('/signup')}>Get Started</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  );
} else if (userType === 'Buyer') {
return ( 
  <header id="header">
    <div class="container d-flex align-items-center">      
     <a href="index.html" class="logo me-auto"><img src="/favicon-32x32.png" alt="" class="img-fluid"/></a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><NavLink to= '/'class="nav-link scrollto active" >Home</NavLink></li>
          <li><NavLink to='/auctions'class="nav-link scrollto" >Auctions</NavLink></li>
          <li><NavLink to='/bids' class="nav-link scrollto" >My Bid History</NavLink></li>
          <li><button style={{borderWidth: '0px', color: 'rgba(0, 0, 0, 0.459)', backgroundColor: '#e1ecff'}} onClick={handleLogout}>Logout</button></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  );
} else if (userType === 'Seller') {
  return (
    <header id="header">
    <div class="container d-flex align-items-center">
      
     <a href="index.html" class="logo me-auto"><img src="/favicon-32x32.png" alt="" class="img-fluid"/></a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><NavLink to= '/'class="nav-link scrollto active" >Home</NavLink></li>
          <li><NavLink to='/auctions'class="nav-link scrollto" >Auctions</NavLink></li>
          <li><NavLink to='/seller' class="nav-link scrollto" >Dashboard</NavLink></li>
          <li><button onClick={handleLogout} style={{borderWidth: '0px', color: 'rgba(0, 0, 0, 0.459)', backgroundColor: '#e1ecff'}} >Logout</button></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  )
}  else {
  return null; // Render nothing if the user type is unknown or undefined
}

}

export default Navbar;