import React from "react";

function Project(props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* HOVER EFFECT */}
      <div className="opacity-0 group-hover:opacity-100 ">
        <span className="text-2xl font-bold text-[#edefef] tracking-wider">
          {props.name}
        </span>
        <div className="pt-8 text-center">
          <a href={props.demoLink}>
            <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
              Demo
            </button>
          </a>
          <a href={props.link} >
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#39b2ad] text-[#edefef] font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
