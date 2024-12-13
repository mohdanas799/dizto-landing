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
        <h2 className="text-3xl font-bold text-center font-sanss mb-8">Our <span className="text-blue-600">Course</span></h2>
        <div className="grid gap-4 md:grid-cols-2 mx-44 dm:mx-0 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-sanss font-bold mb-2">{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseBenefits;
