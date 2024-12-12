import React from "react";

const Contact = () => {
  return (
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
              View Expected Returns
            </button>
          </div>
        </form>
      </div>
      <div className="text-center mt-24 -mb-24 bg-black text-white py-5 text-xl font-bold">
        DIZTOVERSITY
      </div>
    </div>
  );
};

export default Contact;
