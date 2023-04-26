import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { jwtLogoutHandler } from '../../utilities/auth';
import './navbar.css';

function Navbar({user, setUser}) {
  const navigate = useNavigate();
  const isGuest = () => user == null;
  const isBuyer = () => 'buyer_id' in user;
  const isSeller = () => 'seller_id' in user;

  function navbarLogoutHandler() {
    setUser(null);
    jwtLogoutHandler(navigate);
  }

  if (isGuest()) {
    return (
    <header id="header">
    <div class="container d-flex align-items-center">
    <NavLink to='/' className="logo me-auto"><img src="/favicon-32x32.png" alt="" class="img-fluid"/><span className='logo-name'> Auctioneers</span></NavLink>
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
} else if (isBuyer()) {
return ( 
  <header id="header">
    <div class="container d-flex align-items-center">
    <NavLink to='/' className="logo me-auto"><img src="/favicon-32x32.png" alt="" class="img-fluid"/><span className='logo-name'> Auctioneers</span></NavLink>    
      <nav id="navbar" class="navbar">
        <ul>
          <li><NavLink to= '/'class="nav-link scrollto active" >Home</NavLink></li>
          <li><NavLink to='/auctions'class="nav-link scrollto" >Auctions</NavLink></li>
          <li><NavLink to='/bids' class="nav-link scrollto" >My Bid History</NavLink></li>
          <li><button style={{borderWidth: '0px', color: 'rgba(0, 0, 0, 0.459)', backgroundColor: '#e1ecff'}} onClick={navbarLogoutHandler}>Logout</button></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  );
} else if (isSeller()) {
  return (
    <header id="header">
    <div class="container d-flex align-items-center">  
    <NavLink to='/' className="logo me-auto"><img src="/favicon-32x32.png" alt="" class="img-fluid"/><span className='logo-name'> Auctioneers</span></NavLink>    

      <nav id="navbar" class="navbar">
        <ul>
          <li><NavLink to= '/'class="nav-link scrollto active" >Home</NavLink></li>
          <li><NavLink to='/auctions'class="nav-link scrollto" >Auctions</NavLink></li>
          <li><NavLink to='/seller' class="nav-link scrollto" >Dashboard</NavLink></li>
          <li><button onClick={navbarLogoutHandler} style={{borderWidth: '0px', color: 'rgba(0, 0, 0, 0.459)', backgroundColor: '#e1ecff'}} >Logout</button></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  )
}
}

export default Navbar;