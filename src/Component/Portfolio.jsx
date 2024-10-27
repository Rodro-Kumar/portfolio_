import React, { useState } from "react";
import portfolio1 from "../assets/portfolio1.png";
import { GoArrowRight } from "react-icons/go";
import Title from "../Component/Common/Title";
import Data from "../../Data/Daja.json";

const Portfolio = () => {
  console.log(Data);

  // const [all, setall] = useState(true);
  // const [branding, setbranding] = useState(false);
  // const [photography, setphotography] = useState(false);
  // const [fashion, setfashion] = useState(false);
  // const [product, setproduct] = useState(false);

  // HandleAll

  // const HandleAll = () => {
  //   setall(true);
  //   setbranding(false);
  //   setphotography(false);
  //   setfashion(false);
  //   setproduct(false);
  // };

  //   HandleBranding

  // const HandleBranding = () => {
  //   setbranding(true);
  //   setall(false);
  //   setphotography(false);
  //   setfashion(false);
  //   setproduct(false);
  // };
  // HandlePhotography
  // const HandlePhotography = () => {
  //   setphotography(true);
  //   setbranding(false);
  //   setall(false);
  //   setfashion(false);
  //   setproduct(false);
  // };

  //   HandleFashion

  // const HandleFashion = () => {
  //   setall(false);
  //   setphotography(false);
  //   setbranding(false);
  //   setfashion(true);
  //   setproduct(false);
  // };

  //   HandleProduct
  // const HandleProduct = () => {
  //   setproduct(true);
  //   setbranding(false);
  //   setall(false);
  //   setphotography(false);
  //   setfashion(false);
  // };

  // const HandleRightArrow = () => {
  //   setbranding(true);
  //   setall(false);
  // };

  const listArray = Data.map((item, index) => {
    return ["All", item.category];
  }).flat();

  const categoryData = listArray.filter(
    (item, index) => listArray.indexOf(item) === index
  );

  console.log(categoryData);

  const HandleLi = () => {};

  return (
    <>
      <div className="pb-[100px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            {/* Title */}
            <Title subTitle={"My Portfolio"} mainTitle={"My Work Example"} />
            {/* all tab */}
            <div className="flex items-center gap-x-6 pb-10">
              {categoryData.map((item, index) => {
                return (
                  <div
                    onClick={HandleLi}
                    key={index}
                    className="font-vollkorn cursor-pointer font-normal text-base text-primaryColor"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="relative w-full">
              {/* {all ? (
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
              )} */}

              {/* all project */}

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
