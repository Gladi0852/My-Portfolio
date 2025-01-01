import React from "react";
import projects from "../Data/ProjectData.json";

function AllProjects() {
  return (
    <div className="w-full mt-32 mb-20" id="projects">
      <h1 className="mx-auto pb-1 xl:pb-3 text-3xl md:text-4xl xl:text-5xl w-fit border-b-2 lg:border-b-4 border-[#1788ae] text-[#1788AE] font-medium mb-20">
        All Projects
      </h1>
      <div className="w-10/12 mx-auto flex flex-col xl:flex-row xl:flex-wrap xl:gap-y-14">
        {projects.map((proj) => (
          <div key={proj.id} className="w-full xl:w-1/2 flex-none">
            <div className="xl:border-2 xl:border-[#1788ae] rounded-2xl flex flex-col md:flex-row xl:flex-col justify-center items-center w-full xl:w-11/12 mx-auto py-20 gap-y-20 h-full">
              {/* image div */}
              <div className="z-10 flex justify-center items-center w-2/3 relative">
                <div className="absolute w-2/3 h-3/4 rounded-full shadow-3xl"></div>
                <img src={proj.image} className="z-10" />
              </div>
              {/* content div */}
              <div className="md:pl-10 xl:px-10 text-white flex flex-col gap-y-6">
                <h1
                  className="text-xl sm:text-2xl xl:text-3xl font-medium"
                  style={{
                    color: `${proj.color}`,
                  }}
                >
                  {proj.name}
                </h1>
                <p className="font-light text-xs sm:text-sm xl:text-base leading-5">
                  {proj.desc}
                </p>
                <div className="flex gap-y-2 xl:gap-y-3 gap-x-2 flex-wrap">
                  {proj.tech.map((skill, index) => (
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
