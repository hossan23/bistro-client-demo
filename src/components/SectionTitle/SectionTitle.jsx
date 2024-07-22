const SectionTitle = ({ heading, subHeading }) => {
  return (
    <>
      <div className="my-10 text-center mx-auto md:w-4/12">
        <p className="text-yellow-500 italic capitalize mb-4">
          --- {subHeading} ---
        </p>
        <h3 className="text-3xl uppercase border-y-2  py-4">{heading}</h3>
      </div>
    </>
  );
};

export default SectionTitle;
