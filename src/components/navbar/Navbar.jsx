import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { jwtLogoutHandler } from '../../utilities/auth';
import './navbar.css';

function Navbar({Role, setRole}) {

  return (
    <header id="header">
    <div class="container d-flex align-items-center">      
    <NavLink to='/' className="navbar-brand"><img className="logo-img" src="/actionhub-logo_uuzoyq.png" alt="HomePage" /></NavLink>
     {/* <a href="index.html" class="logo me-auto"><img src="/favicon-32x32.png" alt="" class="img-fluid"/></a> */}

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
  )
}

export default Navbar;