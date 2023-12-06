import React from "react";
import "../index.css";
import FORKITFY from "../assets/forktify.png";
import MAPTY from "../assets/mapty.png";
import NETFLIX from "../assets/netflix.png";
import LAMACHAT from "../assets/LamaChat.png";
import Project from "./Project";
import FOODDELIGHT from "../assets/foodDelight.png";
import F1 from "../assets/f1.png";

export const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#1b202d] text-[#edefef]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full my-5">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#39b2ad]">
            Work
          </p>
          <p className="py-6 text-[#708097] text-xl">
            Check out some of my recent projects
          </p>
        </div>

        {/* Card Container*/}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Grid Item */}
          {/* First ITem */}
          <Project
            name="F1"
            image={F1}
            link="https://github.com/AaaayushXD/f1"
            demoLink="f1-dev-da093.web.app"
          />
          {/* Second Item */}
          <Project
            name="Messaging App"
            image={LAMACHAT}
            link="https://github.com/AaaayushXD/LamaChat"
            demoLink="https://lamachatapp.netlify.app/"
          />
          {/* THIRD ITEM */}
          <Project
            name="Food Delight"
            image={FOODDELIGHT}
            link="https://github.com/AaaayushXD/ifa_project"
            demoLink="https://aayush-ifaproject.netlify.app"
          />
          {/* fOURTH ITEM */}
          <Project
            name="Mapty Application"
            image={MAPTY}
            link="https://github.com/AaaayushXD/mapty"
            demoLink="https://mapty-aayush.netlify.app/"
          />
          {/* fIFTH ITEM */}
          <Project
            name="Forktify Application"
            image={FORKITFY}
            link="https://github.com/AaaayushXD/forkify"
            demoLink="https://forktify-aayushl.netlify.app/"
          />
          {/* SIXTH ITEM */}
          <Project
            name="Netflix Clone"
            image={NETFLIX}
            link="https://github.com/AaaayushXD/Netflix-clone"
            demoLink="https://netflixclone-aayush.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
};
