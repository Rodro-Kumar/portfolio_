import React, { useState } from "react";
import portfolio1 from "../assets/portfolio1.png";
import { GoArrowRight } from "react-icons/go";
import Title from "../Component/Common/Title";
const Portfolio = () => {
  const [all, setall] = useState(true);
  const [branding, setbranding] = useState(false);
  const [photography, setphotography] = useState(false);
  const [fashion, setfashion] = useState(false);
  const [product, setproduct] = useState(false);

  // HandleAll

  const HandleAll = () => {
    setall(true);
    setbranding(false);
    setphotography(false);
    setfashion(false);
    setproduct(false);
  };

  //   HandleBranding

  const HandleBranding = () => {
    setbranding(true);
    setall(false);
    setphotography(false);
    setfashion(false);
    setproduct(false);
  };
  // HandlePhotography
  const HandlePhotography = () => {
    setphotography(true);
    setbranding(false);
    setall(false);
    setfashion(false);
    setproduct(false);
  };

  //   HandleFashion

  const HandleFashion = () => {
    setall(false);
    setphotography(false);
    setbranding(false);
    setfashion(true);
    setproduct(false);
  };

  //   HandleProduct
  const HandleProduct = () => {
    setproduct(true);
    setbranding(false);
    setall(false);
    setphotography(false);
    setfashion(false);
  };

  const HandleRightArrow = () => {
    setbranding(true);
    setall(false);
  };
  return (
    <>
      <div className="pb-[100px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            {/* Title */}
            <Title subTitle={"My Portfolio"} mainTitle={"My Work Example"} />
            {/* all tab */}
            <div className="flex items-center gap-x-6 pb-10">
              <div
                onClick={HandleAll}
                className="font-vollkorn cursor-pointer font-normal text-base text-primaryColor"
              >
                <h5
                  className={`relative after:absolute after:content:'' after:bottom-0 after:left-0 after:bg-secondaryColor after:h-[2px] after:w-full ${
                    all
                      ? "after:scale-x-100 transition-transform"
                      : "after:scale-x-0 transition-transform"
                  }`}
                >
                  All
                </h5>
              </div>
              <div
                onClick={HandleBranding}
                className="font-vollkorn cursor-pointer font-normal text-base text-primaryColor"
              >
                <h5
                  className={`relative after:absolute after:content:'' after:bottom-0 after:left-0 after:bg-secondaryColor after:h-[2px] after:w-full ${
                    branding
                      ? "after:scale-x-100 transition-transform"
                      : "after:scale-x-0 transition-transform"
                  }`}
                >
                  Branding
                </h5>
              </div>
              <div
                onClick={HandlePhotography}
                className="font-vollkorn cursor-pointer font-normal text-base text-primaryColor"
              >
                <h5
                  className={`relative after:absolute after:content:'' after:bottom-0 after:left-0 after:bg-secondaryColor after:h-[2px] after:w-full ${
                    photography
                      ? "after:scale-x-100 transition-transform"
                      : "after:scale-x-0 transition-transform"
                  }`}
                >
                  Photography
                </h5>
              </div>
              <div
                onClick={HandleFashion}
                className="font-vollkorn cursor-pointer font-normal text-base text-primaryColor"
              >
                <h5
                  className={`relative after:absolute after:content:'' after:bottom-0 after:left-0 after:bg-secondaryColor after:h-[2px] after:w-full ${
                    fashion
                      ? "after:scale-x-100 transition-transform"
                      : "after:scale-x-0 transition-transform"
                  }`}
                >
                  Fashion
                </h5>
              </div>
              <div
                onClick={HandleProduct}
                className="font-vollkorn cursor-pointer font-normal text-base text-primaryColor"
              >
                <h5
                  className={`relative after:absolute after:content:'' after:bottom-0 after:left-0 after:bg-secondaryColor after:h-[2px] after:w-full ${
                    product
                      ? "after:scale-x-100 transition-transform"
                      : "after:scale-x-0 transition-transform"
                  }`}
                >
                  Product
                </h5>
              </div>
            </div>
            <div className="relative w-full">
              {all ? (
                <div
                  onClick={HandleRightArrow}
                  className="absolute top-[20px] group cursor-pointer right-[55px] size-[50px] bg-white flex items-center justify-center text-secondaryColor rounded-full text-2xl z-40"
                >
                  <span className="group-hover:translate-x-1 transition-all duration-300">
                    <GoArrowRight />
                  </span>
                </div>
              ) : (
                ""
              )}

              {/* all project */}
              {all && (
                <div className="flex flex-wrap items-center justify-center gap-9">
                  <div className="max-w-[570px] active:scale-95 transition-all h-[520px] overflow-hidden group relative cursor-pointer">
                    <div className="bg-primaryColor group-hover:opacity-60 transition-all duration-500 opacity-0 w-full h-full absolute top-0 left-0"></div>
                    <img src={portfolio1} alt="" className="w-full h-full" />
                    <div className="w-full group-hover:bottom-0 transition-all duration-300 absolute bottom-[-100%] left-0 bg-primaryColor py-6 pl-5">
                      <h5 className="font-vollkorn font-semibold text-white text-2xl">
                        Motion Graphics
                      </h5>
                      <p className="font-jost font-normal text-base text-white">
                        Website
                      </p>
                    </div>
                  </div>
                  <div className="max-w-[570px] active:scale-95 transition-all h-[520px] overflow-hidden group relative cursor-pointer">
                    <div className="bg-primaryColor group-hover:opacity-60 transition-all duration-500 opacity-0 w-full h-full absolute top-0 left-0"></div>
                    <img src={portfolio1} alt="" className="w-full h-full" />
                    <div className="w-full group-hover:bottom-0 transition-all duration-300 absolute bottom-[-100%] left-0 bg-primaryColor py-6 pl-5">
                      <h5 className="font-vollkorn font-semibold text-white text-2xl">
                        E-Learning App
                      </h5>
                      <p className="font-jost font-normal text-base text-white">
                        IOS App
                      </p>
                    </div>
                  </div>
                  <div className="max-w-[570px] active:scale-95 transition-all h-[520px] overflow-hidden group relative cursor-pointer">
                    <div className="bg-primaryColor group-hover:opacity-60 transition-all duration-500 opacity-0 w-full h-full absolute top-0 left-0"></div>
                    <img src={portfolio1} alt="" className="w-full h-full" />
                    <div className="w-full group-hover:bottom-0 transition-all duration-300 absolute bottom-[-100%] left-0 bg-primaryColor py-6 pl-5">
                      <h5 className="font-vollkorn font-semibold text-white text-2xl">
                        Web Application
                      </h5>
                      <p className="font-jost font-normal text-base text-white">
                        Desktop
                      </p>
                    </div>
                  </div>
                  <div className="max-w-[570px] active:scale-95 transition-all h-[520px] overflow-hidden group relative cursor-pointer">
                    <div className="bg-primaryColor group-hover:opacity-60 transition-all duration-500 opacity-0 w-full h-full absolute top-0 left-0"></div>
                    <img src={portfolio1} alt="" className="w-full h-full" />
                    <div className="w-full group-hover:bottom-0 transition-all duration-300 absolute bottom-[-100%] left-0 bg-primaryColor py-6 pl-5">
                      <h5 className="font-vollkorn font-semibold text-white text-2xl">
                        Visual Design{" "}
                      </h5>
                      <p className="font-jost font-normal text-base text-white">
                        Desktop
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Branding*/}
              {branding && (
                <p>
                  At the intersection of innovation and artistry, Rodro Karmakar
                  embodies a unique approach to design and storytelling. With a
                  keen eye for detail and a passion for crafting compelling
                  visuals, I specialize in [specific skills or services, e.g.,
                  graphic design, branding, illustration].
                </p>
              )}
              {/* photography */}

              {photography && <p>Photographi</p>}

              {/* fashion */}
              {fashion && <p>fashion</p>}
              {/* product */}
              {product && <p>product</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
