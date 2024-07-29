import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";

import quote from "../../../assets/quote.png";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      <SectionTitle
        subHeading="what our clients say"
        heading="TESTIMONIALS"
      ></SectionTitle>
      <div className="">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center justify-center mx-20 text-center my-10 space-y-10">
                <img src={quote} alt="" />
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p>{review.details}</p>
                <h4 className="text-3xl text-orange-500">{review.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
