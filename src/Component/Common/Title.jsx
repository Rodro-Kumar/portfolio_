import React from "react";

const Title = ({ subTitle, mainTitle, className, className2 }) => {
  return (
    <div
      className={`flex  flex-col  ${
        className ? className : "items-center justify-center"
      }`}
    >
      <div className="flex items-center gap-x-4">
        <div className="relative inline-block">
          <div className="bg-secondaryColor w-[60px] h-[2px]"></div>
          <div className="size-[10px] rounded-full bg-secondaryColor absolute top-[50%] -translate-y-[50%] right-0"></div>
        </div>
        <h5 className="font-vollkorn font-medium text-lg text-secondaryColor">
          {subTitle ? subTitle : "MY SERVICES"}
        </h5>
      </div>
      <h2
        className={`font-vollkorn text-[50px] font-medium text-primaryColor pt-[10px] pb-10  text-center leading-[60px] ${
          className2 ? className2 : "max-w-[527px]"
        }`}
      >
        {mainTitle ? mainTitle : "Provide Wide Range of Digital Services"}
      </h2>
    </div>
  );
};

export default Title;
