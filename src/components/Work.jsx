import React from "react";
import "../index.css";
import FORKITFY from "../assets/forktify.png";
import BANKIST from "../assets/bankist.png";
import MAPTY from "../assets/mapty.png";
import SIMONSAYS from "../assets/simon-says.png";
import TODOLIST from "../assets/todolist.png";
import NETFLIX from "../assets/netflix.png";
import Project from "./Project";

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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Grid Item */}
          {/* First ITem */}
          <Project
            name="Forktify Application"
            image={FORKITFY}
            githubLink="https://github.com/AaaayushXD/forkify"
            demoLink="https://forktify-aayushl.netlify.app/"
          />
          {/* Second Item */}
          <Project
            name="Bankist Application"
            image={BANKIST}
            githubLink="https://github.com/AaaayushXD/Bankist"
            demoLink="https://bankist-aayush.netlify.app/"
          />
          {/* THIRD ITEM */}
          <Project
            name="Mapty Application"
            image={MAPTY}
            githubLink="https://github.com/AaaayushXD/mapty"
            demoLink="https://mapty-aayush.netlify.app/"
          />
          {/* fOURTH ITEM */}
          <Project
            name="Simon Says"
            image={SIMONSAYS}
            githubLink="https://github.com/AaaayushXD/simon-says"
            demoLink="https://aayush-simon-says.netlify.app/"
          />
          {/* fIFTH ITEM */}
          <Project
            name="Netflix Clone"
            image={NETFLIX}
            githubLink="https://github.com/AaaayushXD/Netflix-clone"
            demoLink="https://netflixclone-aayush.netlify.app/"
          />
          {/* SIXTH ITEM */}
          <Project
            name="To do list"
            image={TODOLIST}
            githubLink="https://github.com/AaaayushXD/ToDoList"
            demoLink="https://todolist-aayush.onrender.com/"
          />
        </div>
      </div>
    </div>
  );
};
