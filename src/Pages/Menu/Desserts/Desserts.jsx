import SectionCover from "../../../components/SectionCover/SectionCover";
import image from "../../../assets/menu/dessert-bg.jpeg";
import MenuItems from "../../../components/MenuItems/MenuItems";
import useMenu from "../../../hook/useMenu";
const Desserts = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  return (
    <section>
      <SectionCover
        coverImg={image}
        heading="DESSERTS"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></SectionCover>
      <div className="grid md:grid-cols-2 gap-4 my-10">
        {dessert.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
    </section>
  );
};

export default Desserts;
