import "../Cart/Cart.css";
import bin from "../../assets/bin.jpg";
export default function Cart() {
  return (
    <div className="basket">
      <div className="product1">
        <div className="image">
          <img src="../../assets/cadenas.jpeg" width="240px" alt="light" />
        </div>
        <div className="price">
          <h4>Cadenas</h4>50,99 €
        </div>
        <div className="qty"> Quantity: 1</div>
        <div className="borrar">
          <img src={bin} width="24px" alt="bin" />
        </div>
      </div>
      <div className="product1">
        <div className="image">
          <img src="../../assets/cadenas.jpeg" width="240px" alt="light" />
        </div>
        <div className="price">
          <h4>Women bike</h4>2550,99 €
        </div>
        <div className="qty"> Quantity: 3</div>
        <div className="borrar">
          <img src={bin} width="24px" alt="bin" />
        </div>
      </div>
      <div className="product1">
        <div className="image">
          <img src="../../assets/cadenas.jpeg" width="240px" alt="light" />
        </div>
        <div className="price">
          <h4>Mountain bike</h4>2200 €
        </div>
        <div className="qty"> Quantity: 1</div>
        <div className="borrar">
          <img src={bin} width="24px" alt="bin" />
        </div>
      </div>

      <div className="tarjeta">
        <div className="pagar">
          <h1>Add a new payment method</h1>
          <button className="paymenttype" type="button">
            <img src="../../assets/visa.png" width="40px" alt="ggle" />
          </button>
          <button className="paymenttype " type="button">
            <img src="../../assets/visa.png" width="40px" alt="ggle" />
          </button>
          <button className="paymenttype " type="button">
            <img src="../../assets/visa.png" width="50px" alt="ggle" />
          </button>

          <div className="datas">
            <input type="text" placeholder="Titular name" />
          </div>
          <div className="cardnumber">
            <input type="number" placeholder="Card number" />
          </div>
          <div className="cvc">
            <input type="date" />
          </div>
          <button className="add"> Add this new payment card</button>
          <button className="add">Pay</button>
        </div>
      </div>
    </div>
  );
}
