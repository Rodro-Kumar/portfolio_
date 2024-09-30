import React from "react";

const Button = ({ btnTitle, HandleContact, className }) => {
  return (
    <button
      onClick={HandleContact}
      className={`cursor-pointer font-jost font-medium text-lg text-white py-4 px-10  border-white border-2 bg-secondaryColor  outline outline-secondaryColor outline-[5px] hover:bg-[#ce6a56]
         ${className ? className : "mt-8"}`}
    >
      {btnTitle ? btnTitle : " Contact Us"}
    </button>
  );
};

export default Button;
