import React from 'react'
import './navbar.css'

function Navbar() {
    return ( 

  <div class="logo">
 <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
        <img src="/favicon-32x32.png" alt="Logo" />
        <span class="fs-4">AuctionHub</span>
      </a>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#">HOME</a>
        <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#">AUCTIONS</a>
        <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#">VENDORS</a>
        <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#">CONTACT</a>
        <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#"> LOGOUT</a>
      </nav>
    </div>
</div>
     );
}

export default Navbar;