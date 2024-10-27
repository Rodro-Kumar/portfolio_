import heroIMg from "../assets/hero.png";
import vector from "../assets/shape.png";
import Button from "./Common/Button";
const Hero = () => {
  return (
    <>
      <div className="bg-primaryColor relative">
        {/* vector */}
        <div className="absolute top-0 left-0">
          <img src={vector} alt={vector} />
        </div>
        <div className="container">
          <div className="flex relative z-50">
            {/* Left */}
            <div className="py-52">
              <h1 className="font-vollkorn font-bold text-[90px] text-white leading-[100px]">
                Hello! <br /> I’m Rodro Karmakar
              </h1>

              <p className="font-jost font-normal text-xl text-[#ffffff7e] max-w-[670px] pt-2">
                I’am freelance{" "}
                <span className="text-white">Frontend developer</span> based in
                Indonesia who loves to craft attractive design experiences for
                the web.
              </p>
              {/* Contact me btn */}
              <Button />
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="absolute top-0 right-0 w-[650px] h-full">
          <img
            src={heroIMg}
            alt={heroIMg}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
