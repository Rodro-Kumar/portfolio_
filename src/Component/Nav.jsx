import React from "react";
import S_logo from "../assets/s.png";
import Button from "./Common/Button";

const Nav = () => {
  return (
    <>
      <div className="py-[30px]">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* logo */}
            <div className="flex items-center gap-x-1">
              <img src={S_logo} alt={S_logo} className="w-[30px]" />
              <h5 className="font-IBMPlexSans font-bold text-primaryColor text-2xl">
                Safwan
              </h5>
            </div>
            {/* list */}
            <div>
              <ul className="flex items-center font-jost font-normal text-lg gap-x-10">
                {["Home", "Pages", "Services", "Blog", "Contact"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        className="text-primaryColor hover:text-[#E5745D] transition-all"
                        href="#"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* button */}
            <Button btnTitle={"Download CV"} className={"mt-0"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
