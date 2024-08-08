import { Helmet } from "react-helmet-async";
import SectionCover from "../../../components/SectionCover/SectionCover";
import coverImg from "../../../assets/menu/banner3.jpg";
import Offer from "../Offer/Offer";
import Desserts from "../Desserts/Desserts";

const Menu = () => {
    return (
        <>
      <Helmet>
        <title>Restaurant | Menu</title>
      </Helmet>
      <div className="space-y-20">
      <SectionCover
        coverImg={coverImg}
        subHeading="Would you like to try a dish?"
        heading="our menu"
        ></SectionCover>
      <Offer/>
      <Desserts/>
        </div>
    </>
    );
};

export default Menu;