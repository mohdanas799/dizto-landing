import React from "react";
import Hero from "../components/Hero";
import FranchiseBenefits from "../components/FranchiseBenefits";
import MediaCoverage from "../components/MediaCoverage";
import Awards from "../components/Awards";
import Contact from "../components/Contact";
import StudentGallery from "../components/StudentGallery";

const Home = () => {
  return (
    <div className="">
      <Hero/>
      <FranchiseBenefits/>
      <MediaCoverage/>
      <Awards/>
      <StudentGallery/>
      <Contact/>
    </div>
  );
};

export default Home;
