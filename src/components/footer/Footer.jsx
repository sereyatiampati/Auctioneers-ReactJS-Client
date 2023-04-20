import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer id="footer" class="footer">

    <div class="footer-newsletter">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <h4>Our Newsletter</h4>
            <p>Signup to receive email updates on new product announcements, special promotions, sales and more.</p>
          </div>
          <div class="col-lg-6">
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-top">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-12 footer-info">
            <a href="index.html" class="logo d-flex align-items-center">
              {/* <img src="assets/img/logo.png" alt=""/> */}
              <span>Auctioneers</span>
            </a>
            <p className="text-left">We strive to provide the highest level of service to our clients. With our extensive knowledge and experience in the industry, we offer a reliable and transparent auction process for both buyers and sellers. Our goal is to create a trusted platform where everyone can find unique and valuable items while enjoying a seamless auction experience. Thank you for choosing us as your auctioneer partner.</p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul >
              <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Promotion</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Live Auction Support</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Online Auction Platform</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Customer Support</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-12 footer-contact text-left text-md-start">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/><br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Auctioneers</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
  );
}

export default Footer;
