import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineSkype } from "react-icons/ai";
import { FaBehance, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-primaryColor pt-[70px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <img src={logo} alt="" />
            <ul className="flex pt-14 items-center font-jost gap-x-8 font-medium text-white text-lg">
              {[
                "Home",
                "About",
                "Services",
                "Portfolio",
                "Blog",
                "Contract",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-x-8">
                  <a href="#">{item}</a>

                  {item === "Contract" ? (
                    ""
                  ) : (
                    <span className={`bg-[#ffffff36] h-5 w-[2px]`}> </span>
                  )}
                </li>
              ))}
            </ul>
            {/* social icon */}
            <div className="flex items-center gap-x-4 pt-11 pb-20">
              <div className="size-[60px] rounded-full cursor-pointer bg-secondaryColor flex items-center justify-center text-white text-3xl">
                <a href="#">
                  <AiOutlineSkype />
                </a>
              </div>
              <div className="size-[60px] rounded-full cursor-pointer bg-secondaryColor flex items-center justify-center text-white text-3xl">
                <a href="#">
                  <FaBehance />
                </a>
              </div>
              <div className="size-[60px] rounded-full cursor-pointer bg-secondaryColor flex items-center justify-center text-white text-3xl">
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            {/* sub footer */}
            <div className="font-jost font-normal text-xs border-t-2 w-full border-t-[#ffffff28] text-[#ffffff85] py-6 text-center">
              <h4>Copyright © 2023 Design By Estiak. All rights reserved.</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
