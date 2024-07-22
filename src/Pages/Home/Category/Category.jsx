import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";

const Category = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h4 className="text-center text-2xl uppercase -mt-10 text-white">
            salad
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h4 className="text-center text-2xl uppercase -mt-10 text-white">
            pizza
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider3} alt="" />
          <h4 className="text-center text-2xl uppercase -mt-10 text-white">
            soup
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider4} alt="" />
          <h4 className="text-center text-2xl uppercase -mt-10 text-white">
            dessert
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h4 className="text-center text-2xl uppercase -mt-10 text-white">
            salad
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h4 className="text-center text-2xl uppercase -mt-10 text-white">
            pizza
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider3} alt="" />
          <h4 className="text-center text-2xl uppercase -mt-10 text-white">
            soup
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider4} alt="" />
          <h4 className="text-center text-2xl uppercase -mt-10 text-white">
            dessert
          </h4>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
