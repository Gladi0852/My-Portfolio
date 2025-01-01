import React from "react";
import ExpData from "../Data/Experience.json";

function Experience() {
  return (
    <div className="w-screen">
      <div className="w-10/12 mx-auto text-white flex flex-col justify-center items-center">
        <h1 className="mx-auto pb-1 xl:pb-3 text-3xl md:text-4xl xl:text-5xl w-fit border-b-2 xl:border-b-4 border-[#1788ae] text-[#1788AE] font-medium">
          Experiences
        </h1>
        <div className="w-full my-10 flex flex-col gap-y-20">
          {ExpData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col md:flex-row justify-between items-center rounded-xl shadow-4xl"
            >
              {/* img div */}
              <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-20 py-10 md:py-0 md:p-10">
                <img src={data.image} />
              </div>
              {/* conrent div */}
              <div className="w-full md:w-2/3 xl:w-3/4 px-5 xl:px-16 md:py-10 pb-10">
                <h1 className="text-2xl xl:text-3xl font-medium text-[#FC815C] mb-2">
                  {data.role}
                </h1>
                <div className="flex flex-col xl:flex-row justify-between mb-5 font-light text-sm xl:text-base">
                  <h3>{data.name}</h3>
                  <p>{data.duration}</p>
                </div>
                <p className="border-b xl:border-b-2 w-fit text-base">
                  Responsibilities
                </p>
                <ul className="list-disc ml-6">
                  {data.desc.map((desc, index) => (
                    <li key={index} className="py-1 text-xs xl:text-base">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
