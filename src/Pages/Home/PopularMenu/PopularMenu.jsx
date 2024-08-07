import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hook/useMenu";
import MenuItems from "../../../components/MenuItems/MenuItems";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section>
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
