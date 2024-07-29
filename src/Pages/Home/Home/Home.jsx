import Menu from "../Menu/Menu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <Menu />
      <Featured />
      <Testimonial />
    </>
  );
};

export default Home;
