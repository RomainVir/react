import Carroussel from "../../components/Carroussel/Carroussel";
import { Fragment } from "react";
import velo from "../../assets/canyon2.jpeg";
import SlideShow from "../../Slide";
export function Home({ img, title, price, buy, details }) {
  return (
    <>
      <div>
        <SlideShow />
      </div>
      <div>
        <Carroussel />
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
