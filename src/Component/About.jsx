import React from "react";
import pritam from "../assets/pritam.png";
import skillPhoto from "../assets/skillicon.png";
import skills from "../Data/Skills.json";

function About() {
  return (
    <div className="w-10/12 mx-auto py-10 my-10">
      <h1 className="mx-auto pb-1 xl:pb-3 text-3xl md:text-4xl xl:text-5xl w-fit border-b-2 xl:border-b-4 border-[#1788ae] text-[#1788AE] font-medium">
        About Me
      </h1>
      {/* about my info */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center text-white py-10 gap-y-10">
        <div className="w-full md:w-2/3 xl:w-1/2 font-light text-sm md:text-base xl:text-lg leading-6 xl:leading-8 tracking-wider flex flex-col gap-y-5 text-justify md:pr-5 xl:pr-0">
          <p>
            Hi!! I am a passionate and dedicated Software Developer with a
            strong foundation in designing and building modern web applications.
            I recently completed my{" "}
            <span className="font-normal">
              Master of Computer Applications (MCA) from NIT Raipur in 2024
            </span>
            , following a{" "}
            <span className="font-normal">
              Bachelor’s degree in Computer Applications from Narula Institute
              of Technology, Kolkata in 2021
            </span>
            .
          </p>
          <p>
            With hands-on experience from internships at{" "}
            <span className="font-normal">Avyaan Management Pvt. Ltd.</span> as
            a <span className="font-normal">Software Developer</span>, I have
            honed my skills in developing scalable, responsive, and
            user-friendly applications. My expertise spans both front-end and
            back-end development, leveraging my knowledge of the MERN stack and
            modern tools to deliver impactful projects.
          </p>
          <p>
            I’m deeply interested in creating seamless user experiences,
            exploring innovative technologies, and continuously improving my
            craft. Whether it’s designing dynamic user interfaces, building
            efficient RESTful APIs, or integrating animations for an engaging
            experience, I thrive on solving challenging problems.
          </p>
        </div>
        {/* photo */}
        <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/2 flex justify-center items-center relative">
          <div className="w-1/2 md:w-full lg:w-1/2 rounded-b-full overflow-hidden relative z-20">
            <img src={pritam} alt="" />
          </div>
          <div className="w-1/4 aspect-square absolute bottom-0 rounded-full left-1/2 -translate-x-1/2 shadow-5xl z-10"></div>
        </div>
      </div>
      {/* about my skill */}
      <div className="w-full py-10 flex flex-col md:flex-row justify-between items-center gap-y-10">
        <div className="w-full md:w-1/3 xl:w-1/2 flex justify-center items-center">
          <img src={skillPhoto} alt="" className="w-1/2 md:w-full xl:w-1/2" />
        </div>
        <div className="w-full md:w-2/3 xl:w-1/2 text-white flex flex-col gap-y-3 md:pl-5 xl:pl-0">
          {skills.map((skill) => (
            <div key={skill.id} className="flex flex-col gap-y-1">
              <p className="text-lg xl:text-xl text-[#1788AE]">
                {skill.skill_cat}
              </p>
              <div className="flex flex-wrap gap-y-2 gap-x-2 xl:gap-x-4">
                {skill.skills.map((skillData, index) => (
                  <div
                    key={index}
                    className="border border-[#1788ae] px-3 py-2 md:py-1 xl:py-2 rounded-full text-xs md:text-base xl:text-lg"
                  >
                    {skillData}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
