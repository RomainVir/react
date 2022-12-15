export function Footer () {
return(

    <div classNameName="footer">
      <div className="services">
      
        <div className="payment">
            <img src="./assets/pago.png" alt="payment" width="40" />
        <h5>Secure payment</h5> </div>
        <div className="delivery">
             <img src="/HTML/Logos/envio.png" alt="delivery" width="40"/>
       <h5>Free delivery</h5></div>
        
        <div className="guarantee">
            <img src="/HTML/Logos/pago.png" alt="Guarantee" width="40"/>
        <h5>Guarantee</h5></div>
    
        <div className="discount">
            <img src="/HTML/Logos/ofertas.png" alt="Discounts" width="40"/>
        <h5>Discounts</h5></div>
      </div>
      
      
     <div classNameName="container-footer">
      
      <div className="help1">
        <ul>
        <div><li>Help center</li></div>
        <div><li>Customer service</li></div>
        <div><li>Contact us</li></div>
        <div><li>Call center</li></div>
    
       </ul>
      </div>
      <div class="help2">
        <ul>
        <div><li>Privacy</li></div>
        <div><li>Terms and conditions</li></div>
        <div><li>Reviews</li></div>
        <div><li>Privacy and cookies</li></div>
        </ul>
      </div>
      

      <div class="subscribe">
        
        <form>
          <h4>Suscribe to our newsletter and receive daily offers!</h4>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Write your email"/>
            
            <label for="button">I accept the terms and conditions</label>
            
            <input type="radio" value="OK"/>
            <input class="sub-bouton" type="button" value="Subscribe" type="submit"/>
            
          </form>
        </div>
        </div>
        </div>
    
)
}