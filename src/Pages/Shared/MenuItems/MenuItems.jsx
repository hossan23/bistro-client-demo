const MenuItems = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="flex gap-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-28"
        src={image}
        alt=""
      />
      <div>
        <h4 className="text-2xl">{name}---------</h4>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">{price}</p>
    </div>
  );
};

export default MenuItems;
