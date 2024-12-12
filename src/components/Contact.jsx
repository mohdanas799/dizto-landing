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
            <h2 className="relative text-2xl font-bold text-center w-full">
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
                className="px-4 py-2 z-50 bg-blue-600 text-white font-bold rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <section className="bg-gradient-to-r mx-auto from-blue-500 to-green-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start mx-32 dm:mx-0  bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className=" w-40 p-6">
              <img
                src="https://i.ibb.co/vvCkVLF/education.png"
                alt="College Shuru"
                className="w-44 h-auto "
              />
            </div>
            <div className="md:w-2/3 w-full p-6">
              <h3 className="text-3xl font-bold mb-4 text-blue-700">NMIMS</h3>
              <p className="mb-4 text-lg leading-relaxed">
                College Shuru was established in the year of 2012 and is the
                perfect platform for students as it helps them to find the
                courses they are looking for.
              </p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="font-bold">Add:</span> 2nd Floor, B1/638A,
                  Janakpuri, New Delhi, Delhi 110058
                </p>
                <p className="flex items-center">
                  <FaPhoneAlt color="#1d4ed8" />
                  <span className="font-bold ml-4">Call:</span> +91 8799726836
                </p>
                <p className="flex items-center">
                  <MdEmail color="#1d4ed8" />
                  <span className="font-bold ml-4">Email:</span>{" "}
                  admission@collegeshuru.in
                </p>
              </div>
              <div className="hidden md:flex space-x-4 mt-3 items-center text-sm gap-2 mr-5">
                <a href="#" className="text-black">
                  <FaFacebookF color="#1d4ed8" size={18} />
                </a>
                <a href="https://www.instagram.com/diztoversity?igsh=MTB5amx5NjhwdXc0bQ=="
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
          Copyright 2024 Diztoversity | Developed By ♥️ . All Rights Reserved
        </p>
    </>
  );
};

export default Contact;
