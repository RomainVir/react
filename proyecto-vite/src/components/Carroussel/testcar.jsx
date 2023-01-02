let React = require("react");
let ReactDOM = require("react-dom");
let Carousel = require("react-responsive-carousel").Carousel;

let DemoCarousel = React.createClass({
  render() {
    return (
      <Carousel
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
      >
        <div>
          <img src="../../assets/bin.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../assets/bin.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="assets/4.jpeg" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="assets/5.jpeg" />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src="assets/6.jpeg" />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel>
    );
  },
});
ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));
