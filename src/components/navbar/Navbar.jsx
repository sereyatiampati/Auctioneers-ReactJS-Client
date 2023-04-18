import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="logo">
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
          <img src="/favicon-32x32.png" alt="Logo" />
          <span className="fs-4">AuctionHub</span>
        </a>
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">HOME</a>
          <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">AUCTIONS</a>
          <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">VENDORS</a>
          <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">CONTACT</a>
          {isLoggedIn ? (
            <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#" onClick={handleLogout}>LOGOUT</a>
          ) : (
            <button className="me-3 py-2 btn btn-primary" onClick={handleLogin}>SIGN IN</button>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;