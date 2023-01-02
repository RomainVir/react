import "../Footer/Footer.css";
import logo from "../../assets/logo.png";
export default function Footer() {
  return (
    <div classNameName="footer">
      <div className="services">
        <div className="payment">
          <img src="../src/assets/pago.png" alt="payment" width="40" />
          <h5>Secure payment</h5>{" "}
        </div>
        <div className="delivery">
          <img src="../src/assets/envio.png" alt="delivery" width="40" />
          <h5>Free delivery</h5>
        </div>

        <div className="discount">
          <img src="../src/assets/ofertas.png" alt="discount" width="40" />
          <h5>Discounts</h5>
        </div>

        <div className="guarantee">
          <img src="../src/assets/check.png" alt="Guarantee" width="40" />
          <h5>Guarantee</h5>
        </div>
      </div>

      <div className="help1">
        <div>
          <h5>Help center</h5>
        </div>
        <div>
          <h5>Customer service</h5>
        </div>
        <div>
          <h5>Contact us</h5>
        </div>
        <div>
          <h5>Call center</h5>
        </div>

        <div class="subscribe">
          <form>
            <h4>Suscribe to our newsletter and receive daily offers!</h4>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Write your email"
            />
          </form>
        </div>

        <div class="follow">
          <a class="facebook" href="https://www.facebook.com" target="_blank">
            <img src="../src/assets/facebook.png" alt="facebook" width="50" />
          </a>
          <a class="insta" href="https://www.instagram.com" target="_blank">
            <img src="../src/assets/insta.png" alt="instagram" width="50" />
          </a>
          <a class="youtube" href="https://www.youtube.com" target="_blank">
            <img src="../src/assets/youtube.png" alt="youtube" width="50" />
          </a>
        </div>
      </div>
    </div>
  );
}
