import "../Cart/Cart.css";
import bin from "../../assets/bin.jpg";
import cadenas from "../../assets/cadenas.jpeg";
import velo from "../../assets/canyon3.jpeg";
import velo2 from "../../assets/canyon2.jpeg";
export default function Cart() {
  return (
    <div className="basket">
      <div className="product1">
        <div className="image">
          <img src={cadenas} width="240px" alt="light" />
        </div>
        <div className="price">
          <h4>Cadenas</h4>50,99 €
        </div>
        <div className="qty"> Quantity: 2</div>
        <div className="borrar">
          <img src={bin} width="24px" alt="bin" />
        </div>
      </div>
      <div className="product1">
        <div className="image">
          <img src={velo} width="240px" alt="light" />
        </div>
        <div className="price">
          <h4>Women bike</h4>2550,99 €
        </div>
        <div className="qty"> Quantity: 1</div>
        <div className="borrar">
          <img src={bin} width="24px" alt="bin" />
        </div>
      </div>
      <div className="product1">
        <div className="image">
          <img src={velo2} width="240px" alt="light" />
        </div>
        <div className="price">
          <h4>Mountain bike</h4>2200 €
        </div>
        <div className="qty"> Quantity: 1</div>
        <div className="borrar">
          <img src={bin} width="24px" alt="bin" />
        </div>
      </div>
      <div className="pay">
        <button>Go to payment</button>
      </div>
    </div>
  );
}
