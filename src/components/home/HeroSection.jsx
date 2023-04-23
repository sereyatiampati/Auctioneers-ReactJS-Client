import './home.css'
import { Link } from 'react-router-dom';

function HeroSection() {

    return (
    <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>Winning bids, one click at a time</h1>
          <h2>Where auctions meet technology for a seamless bidding experience.</h2>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <Link to='/login' class="btn-get-started scrollto">Get Started </Link>
            <a href="https://youtu.be/iMmtsJlSylc" class="glightbox btn-watch-video" target="_blank" style={{textDecoration: 'none'}}><i class="bi bi-play-circle"></i><span style={{color: "#47b2e4"}}>Watch Video</span></a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="https://res.cloudinary.com/dwrwnflkr/image/upload/v1681886573/hero-img_nyhszu.png" class="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>

  </section>
     );
}
 
export default HeroSection;