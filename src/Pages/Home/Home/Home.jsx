import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Restaurant | Home</title>
      </Helmet>
      <div className="space-y-20">
        <Banner />
        <Category />
        <PopularMenu />
        <Featured />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
