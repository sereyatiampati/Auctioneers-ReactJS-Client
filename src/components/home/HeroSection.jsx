import './home.css'
function HeroSection() {
    return (
      <section id="hero">
      <div class="hero-container" data-aos="fade-in">
        <h1>Winning bids, one click at a time</h1>
        <h2>Where auctions meet technology for a seamless bidding experience</h2>
        <img src="https://res.cloudinary.com/dwrwnflkr/image/upload/v1681796876/hero-img_pb1lnk.png" alt="Auctioneer Image" data-aos="zoom-out" data-aos-delay="100"/>
        <a href="#get-started" class="btn-get-started scrollto">Get Started</a>
        {/* <div class="btns">
          <a href="#"><i class="fa fa-apple fa-3x"></i> App Store</a>
          <a href="#"><i class="fa fa-play fa-3x"></i> Google Play</a>
          <a href="#"><i class="fa fa-windows fa-3x"></i> windows</a>
        </div> */}
      </div>
    </section>
     );
}
 
export default HeroSection;