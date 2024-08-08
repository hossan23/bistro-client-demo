import MenuItems from "../../../components/MenuItems/MenuItems";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hook/useMenu";

const Offer = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <section>
      <SectionTitle
        heading="Today's Offer"
        subHeading="Don't miss"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {offered.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
    </section>
  );
};

export default Offer;
