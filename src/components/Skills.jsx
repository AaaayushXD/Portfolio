import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import NODE from "../assets/node.png";
import MONGO from "../assets/mongo.png";
import GITHUB from "../assets/github.png";
import TAILWIND from "../assets/tailwind.png";
import REACTIMG from "../assets/react.png";


export const Skills = () => {
  return (
    <div name="skill" className=" w-full h-screen  bg-[#1b202d] text-[#edefef]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#39b2ad]">
            Skills
          </p>
          <p className="py-4 text-xl text-[#708097] ">
            These are the technologies I've worked with: 
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSS} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={JS} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={NODE} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">Node JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={MONGO} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={REACTIMG} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={GITHUB} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={TAILWIND} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">TailWind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};
