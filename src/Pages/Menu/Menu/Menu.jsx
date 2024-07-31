import { Helmet } from "react-helmet-async";
import SectionCover from "../../../components/SectionCover/SectionCover";
import coverImg from "../../../assets/menu/banner3.jpg";

const Menu = () => {
    return (
        <>
      <Helmet>
        <title>Restaurant | Menu</title>
      </Helmet>
      <SectionCover
        coverImg={coverImg}
        subHeading="Would you like to try a dish?"
        heading="our menu"
      ></SectionCover>
      <SectionCover
        coverImg={coverImg}
        subHeading="Would you like to try a dish?"
        heading="our menu"
      ></SectionCover>
      <SectionCover
        coverImg={coverImg}
        subHeading="Would you like to try a dish?"
        heading="our menu"
      ></SectionCover>
    </>
    );
};

export default Menu;