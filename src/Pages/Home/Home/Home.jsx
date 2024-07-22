import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
  return (
    <>
      <Banner />
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Category />
    </>
  );
};

export default Home;
