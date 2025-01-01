import React from "react";
import ProjData from "../Data/ProjectData.json";
import Button from "./Button";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="w-screen pt-10 mb-24">
      <h1 className="mx-auto pb-1 xl:pb-3 text-3xl md:text-4xl xl:text-5xl w-fit border-b-2 lg:border-b-4 border-[#1788ae] text-[#1788AE] font-medium">
        Latest Projects
      </h1>
      <div
        id="projects"
        className="w-10/12 mx-auto flex flex-col justify-center items-center"
      >
        {ProjData.slice(0, 3).map((data) => (
          <div
            key={data.id}
            className={`flex flex-col justify-between w-full py-10 md:py-0 ${
              data.id % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Image div */}
            <div
              className={`w-full md:w-1/3 xl:w-1/2 relative flex justify-center items-center py-10 md:py-20 ${
                data.id % 2 == 0
                  ? "xl:justify-end xl:pr-24"
                  : "xl:justify-start xl:pl-24"
              }`}
            >
              <div
                className={`hidden xl:block h-[1px] bg-[#1788ae] absolute top-1/2 w-3/4 -translate-y-1/2 ${
                  data.id % 2 == 0 ? "left-0" : "right-0"
                }`}
              ></div>
              <div className="z-10 flex justify-center items-center h-fit w-11/12 xl:w-7/12 relative">
                <div className="absolute w-1/2 h-3/4 rounded-full shadow-3xl"></div>
                <img src={data.image} className="z-10" />
              </div>
            </div>
            {/* Middle line */}
            <div className="w-[2px] bg-[#1788ae] relative hidden xl:block">
              <div
                className="w-5 h-5 bg-[#0e0e0e] absolute top-1/2 -translate-y-1/2 rounded-full left-1/2 -translate-x-1/2 border-2"
                style={{
                  border: `2px solid ${data.color}`,
                }}
              ></div>
            </div>
            {/* Content */}
            <div className="text-white w-full md:w-2/3 xl:w-1/2 md:py-10 xl:p-10 flex flex-col justify-center gap-5">
              <h1
                className="text-xl sm:text-2xl xl:text-3xl font-medium"
                style={{
                  color: `${data.color}`,
                }}
              >
                {data.name}
              </h1>
              <p className="font-light text-xs sm:text-sm xl:text-base leading-5">
                {data.desc}
              </p>
              <div className="flex gap-y-2 xl:gap-y-3 gap-x-2 flex-wrap">
                {data.tech.map((skill, index) => (
                  <div
                    key={index}
                    className="border-[1px] border-white px-2 py-1 xl:px-4 xl:py-2 rounded-full text-xs xl:text-base"
                  >
                    #{skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <Link to="/projects">
          <Button text="View All" />
        </Link>
      </div>
    </div>
  );
}

export default Projects;
