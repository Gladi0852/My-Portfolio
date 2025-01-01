import React from "react";
import Banner from "../Component/Banner";
import Projects from "../Component/Projects";
import Experience from "../Component/Experience";
import About from "../Component/About";
import Certification from "../Component/Certification";
import Contact from "../Component/Contact";

function HomePage() {
  return (
    <>
      <Banner />
      <Projects />
      <Experience />
      <About />
      <Certification />
      <Contact />
    </>
  );
}

export default HomePage;
