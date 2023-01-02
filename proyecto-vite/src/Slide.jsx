import React from "react";
import { Slide } from "react-slideshow-image";
import img1 from "./assets/canyon2.jpeg";
import img2 from "./assets/canyon3.jpeg";
import img3 from "./assets/canyontop.jpeg";
import "./slide.css";

const proprietes = {
  duration: 2000,
  transitionDuration: 400,
  infinite: true,
  indicators: true,
  arrows: true,
};
const SlideShow = () => {
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
};

export default SlideShow;
