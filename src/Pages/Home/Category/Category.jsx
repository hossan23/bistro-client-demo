import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
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
          <h4 className="text-center text-2xl uppercase  text-white">salad</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h4 className="text-center text-2xl uppercase  text-white">pizza</h4>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider3} alt="" />
          <h4 className="text-center text-2xl uppercase  text-white">soup</h4>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider4} alt="" />
          <h4 className="text-center text-2xl uppercase  text-white">
            dessert
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h4 className="text-center text-2xl uppercase  text-white">salad</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h4 className="text-center text-2xl uppercase  text-white">pizza</h4>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider3} alt="" />
          <h4 className="text-center text-2xl uppercase  text-white">soup</h4>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slider4} alt="" />
          <h4 className="text-center text-2xl uppercase  text-white">
            dessert
          </h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
