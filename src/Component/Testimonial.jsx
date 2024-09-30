import React from "react";
import quoteImg from "../assets/quote.png";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../Component/Common/Title";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <>
      <div className="bg-[#F9F4F1]">
        <div className="container relative">
          <div className="absolute top-28 left-0">
            <img src={quoteImg} alt={quoteImg} />
          </div>
          <div className="py-[120px] flex flex-col items-center justify-center">
            {/* Title */}
            <Title
              subTitle={"Client Testimonial"}
              mainTitle={"Feedback From Client"}
            />
            {/* review */}
            <div className="w-full reviewslide">
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  {" "}
                  <div className="flex items-center justify-center  gap-x-7">
                    <div>
                      <div className="max-w-[570px] bg-white py-[30px] px-10 relative shadow-xl shadow-[#e5745d2d]">
                        {/* down arrow */}
                        <div className="bottom-[-21px] absolute left-[70px] text-white  text-3xl ">
                          <span className="shadow-[#e5745d2d] shadow-xl">
                            <BiSolidDownArrow />
                          </span>
                        </div>
                        {/* line */}
                        <div className="w-full h-1 bg-secondaryColor absolute top-0 left-0"></div>
                        <p className="font-jost font-normal text-base text-primaryColor">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.Lorem Ipsum is simply dummy text
                          of the printing and this typesetting industry.
                        </p>
                      </div>
                      <div className="flex items-center gap-x-5 pt-10">
                        <div className="size-[74px] rounded-full border-2 border-secondaryColor flex items-center justify-center">
                          <div className="size-[64px] rounded-full bg-[url('/src/assets/my.png')]"></div>
                        </div>
                        <div>
                          <h5 className="font-vollkorn font-semibold text-xl text-primaryColor">
                            Michale Doie
                          </h5>
                          <p className="font-jost font-normal text-sm text-primaryColor">
                            Product Designer
                          </p>
                          <div className="flex items-center gap-x-1 text-yellow-500 pt-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="max-w-[570px] bg-white py-[30px] px-10 relative shadow-xl shadow-[#e5745d2d]">
                        {/* down arrow */}
                        <div className="bottom-[-21px] absolute left-[70px] text-white  text-3xl ">
                          <span className="shadow-[#e5745d2d] shadow-xl">
                            <BiSolidDownArrow />
                          </span>
                        </div>
                        {/* line */}
                        <div className="w-full h-1 bg-secondaryColor absolute top-0 left-0"></div>
                        <p className="font-jost font-normal text-base text-primaryColor">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.Lorem Ipsum is simply dummy text
                          of the printing and this typesetting industry.
                        </p>
                      </div>
                      <div className="flex items-center gap-x-5 pt-10">
                        <div className="size-[74px] rounded-full border-2 border-secondaryColor flex items-center justify-center">
                          <div className="size-[64px] rounded-full bg-[url('/src/assets/my.png')]"></div>
                        </div>
                        <div>
                          <h5 className="font-vollkorn font-semibold text-xl text-primaryColor">
                            Michale Doie
                          </h5>
                          <p className="font-jost font-normal text-sm text-primaryColor">
                            Product Designer
                          </p>
                          <div className="flex items-center gap-x-1 text-yellow-500 pt-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="flex items-center justify-center gap-x-7">
                    <div>
                      <div className="max-w-[570px] bg-white py-[30px] px-10 relative shadow-xl shadow-[#e5745d2d]">
                        {/* down arrow */}
                        <div className="bottom-[-21px] absolute left-[70px] text-white  text-3xl ">
                          <span className="shadow-[#e5745d2d] shadow-xl">
                            <BiSolidDownArrow />
                          </span>
                        </div>
                        {/* line */}
                        <div className="w-full h-1 bg-secondaryColor absolute top-0 left-0"></div>
                        <p className="font-jost font-normal text-base text-primaryColor">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.Lorem Ipsum is simply dummy text
                          of the printing and this typesetting industry.
                        </p>
                      </div>
                      <div className="flex items-center gap-x-5 pt-10">
                        <div className="size-[74px] rounded-full border-2 border-secondaryColor flex items-center justify-center">
                          <div className="size-[64px] rounded-full bg-[url('/src/assets/my.png')]"></div>
                        </div>
                        <div>
                          <h5 className="font-vollkorn font-semibold text-xl text-primaryColor">
                            Michale Doie
                          </h5>
                          <p className="font-jost font-normal text-sm text-primaryColor">
                            Product Designer
                          </p>
                          <div className="flex items-center gap-x-1 text-yellow-500 pt-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="max-w-[570px] bg-white py-[30px] px-10 relative shadow-xl shadow-[#e5745d2d]">
                        {/* down arrow */}
                        <div className="bottom-[-21px] absolute left-[70px] text-white  text-3xl ">
                          <span className="shadow-[#e5745d2d] shadow-xl">
                            <BiSolidDownArrow />
                          </span>
                        </div>
                        {/* line */}
                        <div className="w-full h-1 bg-secondaryColor absolute top-0 left-0"></div>
                        <p className="font-jost font-normal text-base text-primaryColor">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.Lorem Ipsum is simply dummy text
                          of the printing and this typesetting industry.
                        </p>
                      </div>
                      <div className="flex items-center gap-x-5 pt-10">
                        <div className="size-[74px] rounded-full border-2 border-secondaryColor flex items-center justify-center">
                          <div className="size-[64px] rounded-full bg-[url('/src/assets/my.png')]"></div>
                        </div>
                        <div>
                          <h5 className="font-vollkorn font-semibold text-xl text-primaryColor">
                            Michale Doie
                          </h5>
                          <p className="font-jost font-normal text-sm text-primaryColor">
                            Product Designer
                          </p>
                          <div className="flex items-center gap-x-1 text-yellow-500 pt-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="flex items-center justify-center gap-x-7">
                    <div>
                      <div className="max-w-[570px] bg-white py-[30px] px-10 relative shadow-xl shadow-[#e5745d2d]">
                        {/* down arrow */}
                        <div className="bottom-[-21px] absolute left-[70px] text-white  text-3xl ">
                          <span className="shadow-[#e5745d2d] shadow-xl">
                            <BiSolidDownArrow />
                          </span>
                        </div>
                        {/* line */}
                        <div className="w-full h-1 bg-secondaryColor absolute top-0 left-0"></div>
                        <p className="font-jost font-normal text-base text-primaryColor">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.Lorem Ipsum is simply dummy text
                          of the printing and this typesetting industry.
                        </p>
                      </div>
                      <div className="flex items-center gap-x-5 pt-10">
                        <div className="size-[74px] rounded-full border-2 border-secondaryColor flex items-center justify-center">
                          <div className="size-[64px] rounded-full bg-[url('/src/assets/my.png')]"></div>
                        </div>
                        <div>
                          <h5 className="font-vollkorn font-semibold text-xl text-primaryColor">
                            Michale Doie
                          </h5>
                          <p className="font-jost font-normal text-sm text-primaryColor">
                            Product Designer
                          </p>
                          <div className="flex items-center gap-x-1 text-yellow-500 pt-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="max-w-[570px] bg-white py-[30px] px-10 relative shadow-xl shadow-[#e5745d2d]">
                        {/* down arrow */}
                        <div className="bottom-[-21px] absolute left-[70px] text-white  text-3xl ">
                          <span className="shadow-[#e5745d2d] shadow-xl">
                            <BiSolidDownArrow />
                          </span>
                        </div>
                        {/* line */}
                        <div className="w-full h-1 bg-secondaryColor absolute top-0 left-0"></div>
                        <p className="font-jost font-normal text-base text-primaryColor">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.Lorem Ipsum is simply dummy text
                          of the printing and this typesetting industry.
                        </p>
                      </div>
                      <div className="flex items-center gap-x-5 pt-10">
                        <div className="size-[74px] rounded-full border-2 border-secondaryColor flex items-center justify-center">
                          <div className="size-[64px] rounded-full bg-[url('/src/assets/my.png')]"></div>
                        </div>
                        <div>
                          <h5 className="font-vollkorn font-semibold text-xl text-primaryColor">
                            Michale Doie
                          </h5>
                          <p className="font-jost font-normal text-sm text-primaryColor">
                            Product Designer
                          </p>
                          <div className="flex items-center gap-x-1 text-yellow-500 pt-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="absolute bottom-28 right-0 -rotate-180">
            <img src={quoteImg} alt={quoteImg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
