import React from "react";
import Hero from "../components/Hero";
import FranchiseBenefits from "../components/FranchiseBenefits";
import Contact from "../components/Contact";
import StudentGallery from "../components/StudentGallery";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Hero />
      <Navbar />
      <FranchiseBenefits />
      <StudentGallery />
      <Contact />
    </div>
  );
};

export default Home;
