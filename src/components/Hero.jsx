import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Hero = () => {
  const [counterOn, setCounterOn] = useState(false);

  const data = [
    {
      id: 1,
      icon: "https://www.footprintseducation.in/landingpage/franchise_v2/assets/images/icons/india.svg", // You can replace this with an actual image if needed
      number: 19,
      label: "Cities",
      bgColor: "bg-yellow-100",
    },
    {
      id: 2,
      icon: "https://www.footprintseducation.in/landingpage/franchise_v2/assets/images/icons/school.svg", // You can replace this with an actual image if needed
      number: 161,
      label: "Centres",
      bgColor: "bg-gray-100",
    },
    {
      id: 3,
      icon: "https://www.footprintseducation.in/landingpage/franchise_v2/assets/images/icons/family.svg", // You can replace this with an actual image if needed
      number: 43768,
      label: "Delighted Parents",
      bgColor: "bg-purple-100",
    },
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <div className="">
        <div className="relative bg-white pt-24  p-5 w-full h-full">
          <h1 className="absolute top-2 left-14 dm:left-5 text-cyan-600 text-4xl font-bold">
            <img
              src="https://i.ibb.co/vvCkVLF/education.png"
              className="w-16 ml-16 dm:ml-2"
            />
          </h1>
          <img
            src="https://i.ibb.co/c8JGRGB/bannaer.jpg" // Replace with your image URL
            alt="Preschool Background"
            className="w-full h-screen dm:h-44 rounded-xl"
          />
        </div>
        <div className=" relative w-[32%] dm:w-full bg-white rounded-3xl ml-[56rem] dm:ml-0 dm:mt-0 mt-[-39rem] p-8">
          <h2 className="text-2xl font-sanss font-bold text-gray-800 mb-4">
            Enter Your Details
          </h2>

          {/* Form */}
          <form className="space-y-4 font-sans">
            <div>
              <label htmlFor="fullName" className="block font-sans text-gray-600 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full p-3 border border-gray-300 font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-sans text-gray-600 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block font-sans text-gray-600 mb-1">
                  Phone Number *
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-3 border border-gray-300 font-sans rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="city" className="block font-sans text-gray-600 mb-1">
                  Select an option *
                </label>
                <select
                  id="options"
                  value={selectedValue}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md font-sans p-3 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base"
                >
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option value="option1">AMITY UNIVERSITY</option>
                  <option value="option2">MANIPAL UNIVERSITY</option>
                  <option value="option3">DPU UNIVERSITY</option>
                  <option value="option4">SIKKIM MANIPAL UNIVERSITY </option>
                  <option value="option5">VGU UNIVERSITY</option>
                  <option value="option6">LPU UNIVERSITY</option>
                  <option value="option7">SHOOLINI UNIVERSITY</option>
                  <option value="option8">AIN UNIVERSITY</option>
                  <option value="option9">LM UNIVERSITY</option>
                  <option value="option10">UTTARANCHAL UNIVERSITY</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="container mx-auto text-center py-12 dm:mt-1 mt-32">
          <h2 className="text-6xl dm:text-4xl font-bold mb-16">Our Presence</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {data.map((item) => (
              <div
                key={item.id}
                className={`flex items-center justify-center p-6 rounded-lg shadow-md ${item.bgColor} w-[22rem]`}
              >
                <img src={item.icon} className="w-20 h-20 mb-4" />
                <div className="text-left ml-10">
                  <div className="text-3xl font-bold">
                    {counterOn ? (
                      <CountUp start={0} end={item.number} duration={2} />
                    ) : (
                      0
                    )}
                  </div>
                  <div className="text-lg">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollTrigger> */}
    </>
  );
};

export default Hero;
