import { Fragment } from "react";
import velo from "../../assets/canyon2.jpeg";
import Caroussel from "../Caroussel/Caroussel";
export function Home({ img, title, price, buy, details }) {
  return (
    <>
      <div>
        <Caroussel />
      </div>
      <div className="cards">
        <img src={velo} alt="velo" />
        <h3>Canyon</h3>
        <h4>1239 €</h4>
        <button>Buy</button>
        <button>Details</button>
      </div>
    </>
  );
}
