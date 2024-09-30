import React, { useState } from "react";
import project1 from "../assets/project1.png";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "./Common/Title";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Button from "./Common/Button";
const Project = () => {
  return (
    <>
      <div className="pb-[100px] pt-[50px]">
        <div className="container">
          <div>
            <Title
              className={"items-start justify-start"}
              subTitle={"Recent Projects"}
              className2={"text-start"}
              mainTitle={"My Recent Projects"}
            />
            {/* projects */}
            <div>
              <div className="flex items-center justify-end pb-10 gap-x-4">
                <span className="prev bg-transparent hover:text-white active:scale-95 transition-all hover:bg-secondaryColor text-primaryColor text-2xl cursor-pointer p-[12px] border-2 border-[#00413d2f]">
                  <GoArrowLeft />
                </span>
                <span className="next bg-transparent hover:text-white active:scale-95 transition-all hover:bg-secondaryColor text-primaryColor text-2xl cursor-pointer p-[12px] border-2 border-[#00413d2f]">
                  <GoArrowRight />
                </span>
              </div>
              <Swiper
                slidesPerView={3}
                spaceBetween={50}
                navigation={{ nextEl: ".next", prevEl: ".prev" }}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <div className="w-full overflow-hidden cursor-pointer group  shadow-xl">
                    <div className="w-full h-[270px]">
                      <img
                        src={project1}
                        alt={project1}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* content */}
                    <div className="pt-5 pl-[30px] pb-[30px] pr-14">
                      <h5 className="font-vollkorn font-medium text-base text-secondaryColor">
                        Analytics, UI-Ux
                      </h5>
                      <h2 className="font-vollkorn font-medium text-2xl text-primaryColor pt-[10px] leading-[30px]">
                        Branding & Digital Video Campaign For George’s Cafe
                      </h2>
                      <p className="font-jost text-base font-normal text-primaryColor pt-[10px] leading-[24px] max-w-[289px]">
                        Lorem Ipsum Is Simply Dummy Text Of The Printing And
                        Typesetting Industry.
                      </p>
                      <div className="flex items-center font-jost font-medium text-lg text-primaryColor pt-6 gap-x-3">
                        View Case Studies
                        <span className="text-3xl group-hover:translate-x-1 group-hover:text-secondaryColor transition-transform">
                          <GoArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="w-full overflow-hidden cursor-pointer group  shadow-xl">
                    <div className="w-full h-[270px]">
                      <img
                        src={project1}
                        alt={project1}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* content */}
                    <div className="pt-5 pl-[30px] pb-[30px] pr-14">
                      <h5 className="font-vollkorn font-medium text-base text-secondaryColor">
                        Analytics, UI-Ux
                      </h5>
                      <h2 className="font-vollkorn font-medium text-2xl text-primaryColor pt-[10px] leading-[30px]">
                        Branding & Digital Video Campaign For George’s Cafe
                      </h2>
                      <p className="font-jost text-base font-normal text-primaryColor pt-[10px] leading-[24px] max-w-[289px]">
                        Lorem Ipsum Is Simply Dummy Text Of The Printing And
                        Typesetting Industry.
                      </p>
                      <div className="flex items-center font-jost font-medium text-lg text-primaryColor pt-6 gap-x-3">
                        View Case Studies
                        <span className="text-3xl group-hover:translate-x-1 group-hover:text-secondaryColor transition-transform">
                          <GoArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="w-full overflow-hidden cursor-pointer group  shadow-xl">
                    <div className="w-full h-[270px]">
                      <img
                        src={project1}
                        alt={project1}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* content */}
                    <div className="pt-5 pl-[30px] pb-[30px] pr-14">
                      <h5 className="font-vollkorn font-medium text-base text-secondaryColor">
                        Analytics, UI-Ux
                      </h5>
                      <h2 className="font-vollkorn font-medium text-2xl text-primaryColor pt-[10px] leading-[30px]">
                        Branding & Digital Video Campaign For George’s Cafe
                      </h2>
                      <p className="font-jost text-base font-normal text-primaryColor pt-[10px] leading-[24px] max-w-[289px]">
                        Lorem Ipsum Is Simply Dummy Text Of The Printing And
                        Typesetting Industry.
                      </p>
                      <div className="flex items-center font-jost font-medium text-lg text-primaryColor pt-6 gap-x-3">
                        View Case Studies
                        <span className="text-3xl group-hover:translate-x-1 group-hover:text-secondaryColor transition-transform">
                          <GoArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="w-full overflow-hidden cursor-pointer group  shadow-xl">
                    <div className="w-full h-[270px]">
                      <img
                        src={project1}
                        alt={project1}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* content */}
                    <div className="pt-5 pl-[30px] pb-[30px] pr-14">
                      <h5 className="font-vollkorn font-medium text-base text-secondaryColor">
                        Analytics, UI-Ux
                      </h5>
                      <h2 className="font-vollkorn font-medium text-2xl text-primaryColor pt-[10px] leading-[30px]">
                        Branding & Digital Video Campaign For George’s Cafe
                      </h2>
                      <p className="font-jost text-base font-normal text-primaryColor pt-[10px] leading-[24px] max-w-[289px]">
                        Lorem Ipsum Is Simply Dummy Text Of The Printing And
                        Typesetting Industry.
                      </p>
                      <div className="flex items-center font-jost font-medium text-lg text-primaryColor pt-6 gap-x-3">
                        View Case Studies
                        <span className="text-3xl group-hover:translate-x-1 group-hover:text-secondaryColor transition-transform">
                          <GoArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Explore more */}
            <div className="flex items-center justify-center">
              <Button btnTitle={" Explore More"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
