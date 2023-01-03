import React from "react";
import { Slide } from "react-slideshow-image";
import img1 from "../../assets/canyon2.jpeg";
import img2 from "../../assets/canyon3.jpeg";
import img3 from "../../assets/canyon1.jpeg";
import "./caroussel.css";

const proprietes = {
  duration: 2000,
  transitionDuration: 400,
  infinite: true,
  indicators: true,
  arrows: true,
};
export default function Caroussel() {
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        <div className="each-slide">
          <div>
            <img src={img1} alt="img1" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={img2} alt="img2" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={img3} alt="img3" />
          </div>
        </div>
      </Slide>
    </div>
  );
}
