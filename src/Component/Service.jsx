import React from "react";
import uiUx from "../assets/uiux.png";
import app from "../assets/app.png";
import web from "../assets/web.png";
import { GoArrowRight } from "react-icons/go";
import Title from "./Common/Title";

const Service = () => {
  return (
    <>
      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <Title
              subTitle={"MY SERVICE"}
              mainTitle={"Provide Wide Range of Digital Services"}
            />
            <div className="flex items-center justify-between w-full">
              <div
                id="service-card"
                className="group py-[50px] w-[390px] cursor-pointer shadow-md hover:shadow-lg pr-16 pl-[35px] bg-white flex flex-col"
              >
                <img src={uiUx} alt={uiUx} className="w-[65px]" />
                <h4 className="pt-6 pb-3 font-vollkorn font-extrabold text-2xl text-primaryColor">
                  Ui/Ux Design
                </h4>
                <p className="font-jost font-normal text-base text-primaryColor max-w-[245px] pb-7">
                  Dolor repellendus tempo ribus aue quibusdam offi ciis debitis
                  rerum na aibus minima veniam.
                </p>
                <span className="group-hover:text-secondaryColor group-hover:translate-x-2 transition-transform duration-300 text-4xl text-primaryColor">
                  <GoArrowRight />
                </span>
              </div>
              <div
                id="service-card"
                className="group py-[50px] w-[390px] cursor-pointer  shadow-md hover:shadow-lg  pr-16 pl-[35px] bg-white flex flex-col"
              >
                <img src={app} alt={app} className="w-[65px]" />
                <h4 className="pt-6 pb-3 font-vollkorn font-extrabold text-2xl text-primaryColor">
                  Mobile App Design
                </h4>
                <p className="font-jost font-normal text-base text-primaryColor max-w-[245px] pb-7">
                  Dolor repellendus tempo ribus aue quibusdam offi ciis debitis
                  rerum na aibus minima veniam.
                </p>
                <span className="group-hover:text-secondaryColor group-hover:translate-x-2 transition-transform duration-300 text-4xl text-primaryColor">
                  <GoArrowRight />
                </span>
              </div>
              <div
                id="service-card"
                className="group py-[50px] w-[390px] cursor-pointer shadow-md transition-all hover:shadow-lg pr-16 pl-[35px] bg-white flex flex-col"
              >
                <img src={web} alt={web} className="w-[65px]" />
                <h4 className="pt-6 pb-3 font-vollkorn font-extrabold text-2xl text-primaryColor">
                  Web Design
                </h4>
                <p className="font-jost font-normal text-base text-primaryColor max-w-[245px] pb-7">
                  Dolor repellendus tempo ribus aue quibusdam offi ciis debitis
                  rerum na aibus minima veniam.
                </p>
                <span className="group-hover:text-secondaryColor group-hover:translate-x-2 transition-transform duration-300 text-4xl text-primaryColor">
                  <GoArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
