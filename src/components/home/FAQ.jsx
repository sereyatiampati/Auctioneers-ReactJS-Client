function  FAQ(){
    return (
        <section id="faq" class="faq">

        <div class="container" data-aos="fade-up">
  
          <header class="section-header">
            <h2>F.A.Q</h2>
            <p>Frequently Asked Questions</p>
          </header>
  
          <div class="row">
            <div class="col-lg-6">

              <div class="accordion accordion-flush" id="faqlist1">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                    What types of items can be sold on an online auction platform?
                    </button>
                  </h2>
                  <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist1">
                    <div class="accordion-body">
                    Almost anything can be sold on our auction platform, including antiques, art, collectibles, electronics, and more.
                    </div>
                  </div>
                </div>
  
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                    How do I participate in an auction?
                    </button>
                  </h2>
                  <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist1">
                    <div class="accordion-body">
                    To participate in an ongoing auction, you'll need to register on our platform, then you can then browse the available items and bid on the ones you're interested in.
                    </div>
                  </div>
                </div>
  
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                    What happens if I win an item in an auction?
                    </button>
                  </h2>
                  <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist1">
                    <div class="accordion-body">
                    If you win an item in an auction, you'll typically be emailed to pay for the item plus any shipping or handling fees. The auctioneer will then ship the item to you.
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
  
            <div class="col-lg-6">
              <div class="accordion accordion-flush" id="faqlist2">
  
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-1">
                    What is a reserve price in an auction?
                    </button>
                  </h2>
                  <div id="faq2-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist2">
                    <div class="accordion-body">
                    A reserve price is the minimum price that the seller is willing to accept for an item. If the bidding doesn't reach the reserve price, the item won't be sold.
                    </div>
                  </div>
                </div>
  
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-2">
                    What happens if there is a dispute between the buyer and seller in an auction?
                    </button>
                  </h2>
                  <div id="faq2-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist2">
                    <div class="accordion-body">
                    We have a dispute resolution process in place to handle any issues that may arise between buyers and sellers.
                    </div>
                  </div>
                </div>
  
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-3">
                    How does an online auction work?
                    </button>
                  </h2>
                  <div id="faq2-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist2">
                    <div class="accordion-body">
                    Online auctions work similarly to traditional auctions. The auctioneer will post items for sale, and users can bid on those items in real-time. The highest bidder at the end of the auction wins the item and gets contacted via email.
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
}
 
export default FAQ;