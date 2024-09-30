import { React } from "react";
import img from "../assets/blog.jpg";
import { FiArrowRight } from "react-icons/fi";
import Title from "./Common/Title";

const Blog = () => {
  return (
    <>
      <div className="pb-[100px]">
        <div className="container">
          <div className="flex items-center justify-center flex-col">
            {/* Title */}
            <Title subTitle={"Letest Blogs"} mainTitle={"Blog & Articles"} />
            <div className="flex items-center justify-between w-full">
              <div className="group max-w-[370px] shadow-sm cursor-pointer hover:translate-y-1 hover:shadow-md hover:shadow-[#00413d48] transition-all overflow-hidden">
                {/* img */}
                <div className="w-full h-[260px]">
                  <img
                    src={img}
                    alt={img}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* content */}
                <div className="pt-5 px-[30px] pb-[30px]">
                  <div className="flex items-center justify-between pb-[14px]">
                    <h4 className="font-jost font-normal text-sm text-secondaryColor">
                      By David William
                    </h4>
                    <h4 className="font-jost font-normal text-sm text-primaryColor">
                      Mar 8, 2024
                    </h4>
                  </div>
                  <h4 className="font-vollkorn font-medium text-primaryColor text-2xl max-w-[280px]">
                    Quis autem vea eum iure reprehenderit.
                  </h4>
                  <p className="font-jost font-normal text-base text-primaryColor pt-2">
                    Dolor repellendus temporibus autem rerum quibusdam officiis
                    debitis nece.
                  </p>
                  {/* read more */}
                  <div className="flex cursor-pointer group-hover:text-secondaryColor items-center gap-x-1 pt-5 font-jost font-medium text-lg text-primaryColor">
                    <a href="#">Read More</a>
                    <span className="text-2xl group-hover:translate-x-1 transition-all duration-200 group-hover:text-secondaryColor">
                      <FiArrowRight />
                    </span>
                  </div>
                </div>
              </div>
              <div className="group max-w-[370px] shadow-sm cursor-pointer hover:translate-y-1 hover:shadow-md hover:shadow-[#00413d48] transition-all overflow-hidden">
                {/* img */}
                <div className="w-full h-[260px]">
                  <img
                    src={img}
                    alt={img}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* content */}
                <div className="pt-5 px-[30px] pb-[30px]">
                  <div className="flex items-center justify-between pb-[14px]">
                    <h4 className="font-jost font-normal text-sm text-secondaryColor">
                      By David William
                    </h4>
                    <h4 className="font-jost font-normal text-sm text-primaryColor">
                      Mar 8, 2024
                    </h4>
                  </div>
                  <h4 className="font-vollkorn font-medium text-primaryColor text-2xl max-w-[280px]">
                    Quis autem vea eum iure reprehenderit.
                  </h4>
                  <p className="font-jost font-normal text-base text-primaryColor pt-2">
                    Dolor repellendus temporibus autem rerum quibusdam officiis
                    debitis nece.
                  </p>
                  {/* read more */}
                  <div className="flex cursor-pointer group-hover:text-secondaryColor items-center gap-x-1 pt-5 font-jost font-medium text-lg text-primaryColor">
                    <a href="#">Read More</a>
                    <span className="text-2xl group-hover:translate-x-1 transition-all duration-200 group-hover:text-secondaryColor">
                      <FiArrowRight />
                    </span>
                  </div>
                </div>
              </div>
              <div className="group max-w-[370px] shadow-sm cursor-pointer hover:translate-y-1 hover:shadow-md hover:shadow-[#00413d48] transition-all overflow-hidden">
                {/* img */}
                <div className="w-full h-[260px]">
                  <img
                    src={img}
                    alt={img}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* content */}
                <div className="pt-5 px-[30px] pb-[30px]">
                  <div className="flex items-center justify-between pb-[14px]">
                    <h4 className="font-jost font-normal text-sm text-secondaryColor">
                      By David William
                    </h4>
                    <h4 className="font-jost font-normal text-sm text-primaryColor">
                      Mar 8, 2024
                    </h4>
                  </div>
                  <h4 className="font-vollkorn font-medium text-primaryColor text-2xl max-w-[280px]">
                    Quis autem vea eum iure reprehenderit.
                  </h4>
                  <p className="font-jost font-normal text-base text-primaryColor pt-2">
                    Dolor repellendus temporibus autem rerum quibusdam officiis
                    debitis nece.
                  </p>
                  {/* read more */}
                  <div className="flex cursor-pointer group-hover:text-secondaryColor items-center gap-x-1 pt-5 font-jost font-medium text-lg text-primaryColor">
                    <a href="#">Read More</a>
                    <span className="text-2xl group-hover:translate-x-1 transition-all duration-200 group-hover:text-secondaryColor">
                      <FiArrowRight />
                    </span>
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

export default Blog;
