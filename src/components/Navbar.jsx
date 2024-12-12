// import React, { useState } from "react";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   const toggleNav = () => {
//     setNavOpen(!navOpen);
//   };

//   return (
//     <>
//       <div className="bg-gray-100 pr-24  dm:pr-1">
//         <div className="container mx-auto flex justify-end py-2 space-x-4 text-sm px-4 md:px-0">
//           <div className="flex items-center text-md space-x-1">
//             <FaEnvelope color="#F0BC71" />
//             <span>info@hbtmc.edu.in</span>
//           </div>
//           <div className="flex items-center text-md space-x-1">
//             <FaPhoneAlt color="#F0BC71" />
//             <span>022 2620 7254</span>
//           </div>
//         </div>
//       </div>

//       <nav className="w-full z-999 bg-white shadow-md">
//         <div className="container mx-auto px-24 dm:px-4 py-4 flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <img src="https://via.placeholder.com/400x250?" alt="Logo" className="h-12" />
//             <span className="text-xl font-semibold text-blue-600">
//               College Shuru
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-8 text-gray-600">
//             <li>
//               <a href="#home" className="hover:text-blue-500">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="hover:text-blue-500">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#universities" className="hover:text-blue-500">
//                 Universities
//               </a>
//             </li>
//             <li>
//               <a href="#blog" className="hover:text-blue-500">
//                 Blog
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="hover:text-blue-500">
//                 Contact Us
//               </a>
//             </li>
//           </ul>

//           {/* Mobile Menu Icon */}
//           <div className="md:hidden">
//             <button onClick={toggleNav}>
//               {navOpen ? (
//                 <FaTimes className="h-6 w-6" />
//               ) : (
//                 <FaBars className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {navOpen && (
//           <ul className="md:hidden bg-white w-full px-8 py-4 space-y-4 shadow-lg text-gray-600">
//             <li>
//               <a href="#home" className="block hover:text-blue-500">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="block hover:text-blue-500">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#universities" className="block hover:text-blue-500">
//                 Universities
//               </a>
//             </li>
//             <li>
//               <a href="#blog" className="block hover:text-blue-500">
//                 Blog
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="block hover:text-blue-500">
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;
