function Newsletter () {
    return (
        <div className="footer">
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
      </div>
    );
}
 
export default Newsletter;