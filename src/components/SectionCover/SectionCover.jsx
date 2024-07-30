import { Parallax, Background } from "react-parallax";

const SectionCover = ({ coverImg, heading, subHeading }) => {
  return (
    <>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={coverImg}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="hero h-[400px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
              <p className="mb-5">{subHeading}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default SectionCover;
