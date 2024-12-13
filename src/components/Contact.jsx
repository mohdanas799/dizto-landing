import React from "react";
import {
  FaPhoneAlt,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <div className="relative flex items-center justify-between p-8">
            <div className="absolute left-0 top-0 h-80 w-1/4 bg-yellow-200 rounded-r-full"></div>
            <div className="absolute right-0 top-0 h-80 w-1/4 bg-blue-200 dm:mt-44 rounded-l-full"></div>
            <h2 className="relative font-sanss text-4xl dm:text-2xl font-bold text-center w-full">
              Get In Touch
            </h2>
          </div>
          <form className="p-8 space-y-4 overflow-hidden">
            <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
              <div className="w-full md:w-1/4 z-50 px-2">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Full name"
                />
              </div>
              <div className="w-full md:w-1/4 z-50 px-2">
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Email address"
                />
              </div>
              <div className="w-full md:w-1/4 z-50 px-2">
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Phone number"
                />
              </div>
              <div className="w-full md:w-1/4 z-50 px-2">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="City"
                />
              </div>
            </div>
            <div className="flex z-50 justify-center">
              <button
                type="submit"
                className="px-4 py-2 z-50 font-sanss bg-blue-600 text-white font-bold rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <section className="mx-auto">
        <div className="container mx-auto ">
          <div className="flex flex-col dm:flex-col md:flex-row items-center md:items-start mx-auto dm:mx-0  bg-gray-100 text-gray-900 shadow-lg overflow-hidden">
            <div className=" w-[50%] dm:w-full dm:flex-col flex ml-20 dm:ml-0 p-6">
              <img
                src="https://i.ibb.co/vvCkVLF/education.png"
                alt="College Shuru"
                className="w-32 h-auto "
              />
              <div className="border-l-2 dm:hidden border-gray-900 h-32 mt-5 ml-6"></div>

              <div className="mt-5">
                {/* <h3 className="text-3xl font-bold mb-4 text-blue-700">NMIMS</h3> */}
                <p className="mb-4 ml-10 dm:ml-0 text-lg leading-relaxed">
                  College Shuru was established in the year of 2012 and is the
                  perfect platform for students as it helps them to find the
                  courses they are looking for.
                </p>
              </div>
            </div>
            <div className="md:w-2/3 -mr-[80rem] dm:mr-0 dm:pt-[-70px] w-full p-6">
              <div className="space-y-2">
                <p className="flex py-1 items-center">
                  <span className="font-bold mr-4">Add: </span> Noida 201010
                </p>
                <p className="flex py-1 items-center">
                  <FaPhoneAlt color="#1d4ed8" />
                  <span className="font-bold ml-4">Call:</span> +91 8188988301
                </p>
                <p className="flex py-1 items-center">
                  <MdEmail color="#1d4ed8" />
                  <span className="font-bold ml-4">Email:</span>{" "}
                  diztoversity@gmail.com
                </p>
              </div>
              <div className="dm:flex md:flex space-x-4 mt-3 items-center text-sm gap-2 mr-5">
                <a href="#" className="text-black">
                  <FaFacebookF color="#1d4ed8" size={18} />
                </a>
                <a
                  href="https://www.instagram.com/diztoversity?igsh=MTB5amx5NjhwdXc0bQ=="
                  className="text-black"
                >
                  <FaInstagram color="#1d4ed8" size={23} />
                </a>
                <a href="#" className="text-black">
                  <FaTwitter color="#1d4ed8" size={24} />
                </a>
                <a href="#" className="text-black">
                  <FaLinkedinIn color="#1d4ed8" size={23} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className="text-center py-3">
        Copyright 2024 Diztoversity | All Rights Reserved
      </p>
    </>
  );
};

export default Contact;
