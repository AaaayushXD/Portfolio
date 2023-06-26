import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#1b202d]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#edefef] text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#edefef] ">
          Aayush Lamichhane
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#39b2ad]">
          I'm a{" "}
          <TypeAnimation
            sequence={["Full Stack developer.", 1000, "MERN Developer.", 1000]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </h2>
        <p className="text-[#708097] py-4 max-w-[700px]">
          I am a dedicated and passionate full-stack MERN developer with a
          strong foundation in modern web development technologies.My goal is to
          leverage my skills and knowledge to contribute to innovative web
          applications that solve real-world problems.
        </p>
        <div>
          <Link to="work" smooth={true} offset={50} duration={500}>
            <button className="text-[#edefef] group border-2 px-6 py-3 my-3 flex items-center hover:bg-[#39b2ad] hover:border-[#39b2ad]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
