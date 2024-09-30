import React from "react";
import aboutimg from "../assets/about.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Title from "./Common/Title";
import Button from "./Common/Button";

const About = () => {
  return (
    <>
      <div className="pb-[100px]">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* left */}
            <div>
              <img src={aboutimg} alt="" />
            </div>
            {/*right  */}
            <div>
              <Title
                subTitle={"About Me"}
                className={"items-start justify-start"}
                className2={"max-w-[570px] pb-[0] text-start"}
                mainTitle={"I Enjoy Solving Problems With Scalable Solutions"}
              />
              <div className="pt-2 font-jost font-normal text-base text-primaryColor max-w-[570px]">
                <p>
                  Quisruam est, qui dolorem ipsum quia dolor sit amet,
                  consecteaur aeci velit, sed quia non numquam eius modi tempora
                  incidunt lao magnam aliquam quaerat voluptatem reprehenderit.
                </p>
                <p className="pt-5">
                  Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
                  reprehenderit non numquam eius.
                </p>
                {/* Download cv */}
                <Button btnTitle={"Download CV"} />
              </div>
            </div>
          </div>
          {/* proggress */}
          <div className="flex items-center justify-between pt-[70px]">
            <div className="p-6 flex-col shadow-xl flex items-center justify-center gap-y-5">
              <CircularProgressbar
                value={70}
                text={`70%`}
                className="w-[160px] font-vollkorn font-bold"
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `#E5745D`,
                  textColor: "#E5745D",
                  trailColor: "#C4C4C4",
                  backgroundColor: "#3e98c7",
                })}
              />
              <h5 className="font-vollkorn font-semibold text-primaryColor text-2xl">
                Graphic Design
              </h5>
            </div>
            <div className="p-6 flex-col shadow-xl flex items-center justify-center gap-y-5">
              <CircularProgressbar
                value={85}
                text={`85%`}
                className="w-[160px] font-vollkorn font-bold"
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `#E5745D`,
                  textColor: "#E5745D",
                  trailColor: "#C4C4C4",
                  backgroundColor: "#3e98c7",
                })}
              />
              <h5 className="font-vollkorn font-semibold text-primaryColor text-2xl">
                Web Designing
              </h5>
            </div>
            <div className="p-6 flex-col shadow-xl flex items-center justify-center gap-y-5">
              <CircularProgressbar
                value={60}
                text={`60%`}
                className="w-[160px] font-vollkorn font-bold"
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `#E5745D`,
                  textColor: "#E5745D",
                  trailColor: "#C4C4C4",
                  backgroundColor: "#3e98c7",
                })}
              />
              <h5 className="font-vollkorn font-semibold text-primaryColor text-2xl">
                Brand Design
              </h5>
            </div>

            <div className="p-6 flex-col shadow-xl flex items-center justify-center gap-y-5">
              <CircularProgressbar
                value={40}
                text={`40%`}
                className="w-[160px] font-vollkorn font-bold"
                counterClockwise={true}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `#E5745D`,
                  textColor: "#E5745D",
                  trailColor: "#C4C4C4",
                  backgroundColor: "#3e98c7",
                })}
              />
              <h5 className="font-vollkorn font-semibold text-primaryColor text-2xl">
                Web Development
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
