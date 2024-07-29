import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-style text-white bg-fixed">
      <SectionTitle
        subHeading="Check it out"
        heading="featured item"
      ></SectionTitle>
      <div className="flex justify-between items-center space-x-10 p-10 bg-slate-500 bg-opacity-50">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <h3>March 20, 2023</h3>
          <p>
            WHERE CAN I GET SOME? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error voluptate facere, deserunt dolores maiores
            quod nobis quas quasi. Eaque repellat recusandae ad laudantium
            tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="text-white border-b-2 p-4 rounded-lg text-lg font-bold hover:bg-black">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
