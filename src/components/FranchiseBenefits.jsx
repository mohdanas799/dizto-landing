// import React from 'react';

// const FranchiseBenefits = () => {
//   const data = [
//     {
//       id: 1,
//       icon: '💰', // You can replace this with the appropriate image or icon
//       title: '~ 35% Annual Return',
//       description: 'Earn as much as 20 Lacs per year in Profit',
//       bgColor: 'bg-white',
//     },
//     {
//       id: 2,
//       icon: '📉',
//       title: 'No Revenue Share Till 40 Children',
//       description: 'Pay Revenue Share only when you are profitable',
//       bgColor: 'bg-white',
//     },
//     {
//       id: 3,
//       icon: '🎒',
//       title: '120 Admissions Guaranteed',
//       description: 'In 2 Years or else get compensation',
//       bgColor: 'bg-white',
//     },
//     {
//       id: 4,
//       icon: '💸',
//       title: 'Option to Sell Back',
//       description: 'Sell the centre back at 4 times profit',
//       bgColor: 'bg-white',
//     },
//     {
//       id: 5,
//       icon: '✅',
//       title: '100% Success Rate',
//       description: 'Zero Closed-Down centres till date',
//       bgColor: 'bg-white',
//     },
//     {
//       id: 6,
//       icon: '🤝',
//       title: 'Partnership Model',
//       description: 'Marketing, Technology, Hiring support with complete handholding',
//       bgColor: 'bg-white',
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-12">
//       <div className="container mx-auto text-center">
//         <h2 className="text-6xl dm:text-3xl font-bold mb-14">
//           Why Choose <span className="text-blue-600">Footprints Franchise</span>
//         </h2>
//         <div className="grid grid-cols-1 w-[70%] dm:w-[90%]   mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {data.map((item) => (
//             <div
//               key={item.id}
//               className={`p-6 rounded-lg shadow-lg ${item.bgColor}`}
//             >
//               <div className="text-6xl mb-4">{item.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-gray-500">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FranchiseBenefits;


import React from 'react';

const courses = [
  {
    title: "MBA",
    description: "Master of Business Administration is a 2-year postgraduate course available in full-time, part-time, executive (evening & weekend MBA courses), and distance learning modes with a wide range of specializations."
  },
  {
    title: "MA JCM",
    description: "Master of Journalism and Mass Communication is a 2-year Master’s programme that has been designed to provide an in-depth and critical understanding of the Indian Media and Mass Communication channels."
  },
  {
    title: "BCA",
    description: "Bachelor of Computer Application is a 3-year undergraduate programme that imparts students with the basic knowledge of software development and computer application."
  },
  {
    title: "MCA",
    description: "Master of Computer Applications is a 2 to 3 year postgraduate degree course which grants the learners with theoretical and practical knowledge necessary for success in an IT world that is constantly changing."
  },
  {
    title: "MCOM",
    description: "Masters of Commerce, is a two-year postgraduate program designed for individuals aspiring to build a career in fields such as accounting, banking, investment, financial services, economics, and marketing."
  },
  {
    title: "BCOM",
    description: "Bachelor of Commerce. It is a commerce based degree that lasts for three or four years at the undergraduate level and gives students a wide understanding in different areas of business and commerce."
  }
];

const FranchiseBenefits = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our <span className="text-blue-600">Course</span></h2>
        <div className="grid gap-4 md:grid-cols-2 mx-44 dm:mx-0 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseBenefits;
