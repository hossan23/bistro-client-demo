import Menu from "../Menu/Menu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Restaurant | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Menu />
      <Featured />
      <Testimonial />
    </>
  );
};

export default Home;
