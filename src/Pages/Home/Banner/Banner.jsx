import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";

import img4 from "../../../assets/home/04.jpg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img4} />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
