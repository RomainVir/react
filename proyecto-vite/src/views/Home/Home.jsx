import Carroussel from "../../components/Carroussel/Carroussel";
import { Fragment } from "react";
export function Home({ img, title, price, buy, details }) {
  return (
    <>
      <div>
        <Carroussel />
      </div>
      <div className="cards">
        <img src={img} alt="velo" />
        <h3>{title}</h3>
        <h4>{price}</h4>
        <button>{buy}</button>
        <button>{details}</button>
      </div>
    </>
  );
}
