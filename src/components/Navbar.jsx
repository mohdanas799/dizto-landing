import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleFAQClick = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="p-4">
            <h2 className="text-2xl  font-sanss font-bold">
              Welcome to <span className="text-red-500">NMIMS</span>
            </h2>
            <p className="mt-4 font-sans">
              What started with baby steps in 1981, NMIMS has today emerged as a
              globally reputed university. Always socially conscious, the Shri
              Vile Parle Kelavani Mandal (SVKM) made the decision to cater to
              the rising demand of management institutes in the country. This
              led to the birth of the Narsee Monjee Institute of Management
              Studies (NMIMS). It began humbly by offering two-year full-time
              master’s programme in management studies with 4 full time faculty,
              3162 books and an intake of 40 students above Bhaidas Hall, Vile
              Parle (West), Mumbai.
            </p>
            <p className="mt-4 font-sans">
              Built on this inspiring legacy, today, NMIMS stands proud as a
              Deemed to be University offering multiple disciplines across
              multiple campuses. What started as an institute in a small
              building has caught the attention of the world, thanks to their 17
              specialized schools. More than 17000 students and about 750
              full-time faculty members, 10 faculty members with Fulbright
              Scholarship and Humboldt International Scholarship for
              post-doctoral researchers are part of India’s most sought after
              academic community. The consistent academic quality, research
              focus, faculty from top national and global institutes and strong
              industry linkages at NMIMS have placed it amongst the nation’s
              prime centers of educational excellence and research today.
            </p>
            <p className="mt-4 font-sans">
              Over 4 decades , the NMIMS name is etched in the Indian diaspora’s
              psyche for excellence in career-led education. NMIMS empowers you
              by bringing the same educational tradition, ethic & pedagogy to
              the Distance, Online and ODL medium of learning.
            </p>
            <h2 className="text-2xl font-bold font-sanss py-8">Why Choose us?:</h2>
            <ol className="">
              <li className="py-2 font-sans">
                1. NMIMS CDOE is home to thousands of students, 55,000 alumni
              </li>
              <li className="py-2 font-sans">
                2. Students and Working professionals are accelerating their
                careers with NMIMS CDOE.
              </li>
              <li className="py-2 font-sans">
                3. Our programs exude the highest standards of academic
                leadership.
              </li>
              <li className="py-2 font-sans">
                4. In 2018, we were granted Autonomy Category I by UGC &
                bestowed with Grade A+ accreditation by NAAC
              </li>
              <li className="py-2 font-sans">
                5. Programs from NMIMS are highly regarded & recognised by top
                corporates and start-ups in India due to the academic rigour,
                industry-focused curriculum and rich academia,
              </li>
              <li className="py-2 font-sans">
                6. Students from NMIMS come from & move on to some of the top
                8000+ corporates, SMBs & start-ups of India & even overseas.
              </li>
            </ol>
            <a href="https://diztoversity.netlify.app/contact">
              <button className=" font-sanss p-5 mt-5 font-semibold rounded-lg text-white  bg-green-600">
                Get enquiry now
              </button>
            </a>
          </div>
        );
      case "programs":
        return (
          <div className="p-4">
            <p>
              NMIMS is among the best universities in India, and students from
              all over the world take part in its programs. The programs at
              NMIMS are:
            </p>
            <div className="mt-4 flex dm:flex-col gap-4 ">
              <div className="bg-white p-4 rounded-lg w-[20%] dm:w-full text-center shadow-md">
                <img
                  src="https://collegeshuru.in/wp-content/uploads/2024/02/program-icon-2.png"
                  alt="Undergraduate programs"
                  className="items-center justify-center mx-auto"
                />
                <p className="mt-2 font-sanss font-bold">Undergraduate programs</p>
              </div>
              <div className="bg-white p-4 rounded-lg w-[20%] dm:w-full text-center shadow-md">
                <img
                  src="https://collegeshuru.in/wp-content/uploads/2024/02/program-icon-1.png"
                  alt="Postgraduate programs"
                  className="items-center mx-auto"
                />
                <p className="mt-2 font-sanss font-bold">Postgraduate programs</p>
              </div>
            </div>
          </div>
        );
      case "admission":
        return (
          <div className="p-4">
            <p>
              Admission to all programs is conducted under the guidance of the
              Jain Academy of Higher Education (MAHE). Follow the steps given
              below to apply to NMIMS.
            </p>
            <div className="grid grid-cols-4 dm:grid-cols-1 gap-4 mt-4">
              <div className="text-center bg-white p-5 rounded-xl">
                <img
                  src="https://collegeshuru.in/wp-content/uploads/2024/02/1.jpg"
                  alt="Step 1"
                  className="mx-auto w-20 h-20"
                />
                <h1 className="font-bold text-2xl font-sanss ">Step 01</h1>
                <p>
                  Fill out the registration form and submit the required
                  documents.
                </p>
              </div>
              <div className="text-center bg-white p-5 rounded-xl">
                <img
                  src="https://collegeshuru.in/wp-content/uploads/2024/02/2.jpg"
                  alt="Step 2"
                  className="mx-auto w-20 h-20"
                />
                <h1 className="font-bold text-2xl font-sanss">Step 02</h1>
                <p>
                  Pay the admission processing fee via credit card/debit card or
                  net banking.
                </p>
              </div>
              <div className="text-center bg-white p-5 rounded-xl">
                <img
                  src="https://collegeshuru.in/wp-content/uploads/2024/02/3.jpg"
                  alt="Step 3"
                  className="mx-auto w-20 h-20"
                />
                <h1 className="font-bold text-2xl font-sanss">Step 03</h1>
                <p>Finish the aptitude and analytics screening test.</p>
              </div>
              <div className="text-center bg-white p-5 rounded-xl">
                <img
                  src="https://collegeshuru.in/wp-content/uploads/2024/02/4.jpg"
                  alt="Step 4"
                  className="mx-auto w-20 h-20"
                />
                <h1 className="font-bold text-2xl font-sanss">Step 04</h1>
                <p>If selected, a letter of acceptance will be granted.</p>
              </div>
            </div>
            <h2 className="text-2xl font-sanss pt-8 pb-5 font-bold">
              The Documents Required For Admission Are:
            </h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Class 10th and 12th mark sheet.</li>
              <li>UG mark sheet (if applicable).</li>
              <li>PG mark sheet (if applicable).</li>
              <li>Date of birth certificate.</li>
              <li>Passport size photographs.</li>
              <li>Transfer certificate.</li>
              <li>Character certificate.</li>
            </ul>
          </div>
        );
      case "faq":
        return (
          <div className="p-4">
            <div className="space-y-4">
              <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                <h3
                  className="font-bold cursor-pointer font-sanss text-blue-600"
                  onClick={() => handleFAQClick(0)}
                >
                  Can I apply to more than one course? Can I do it in a single
                  application?
                </h3>
                <div
                  className="overflow-hidden transition-max-height duration-500 ease-in-out"
                  style={{
                    maxHeight: activeFAQ === 0 ? "500px" : "0",
                  }}
                >
                  <p className="pt-2">
                    If the courses you’ve selected fall within the same class,
                    then you can absolutely put your options on a single
                    application form. However, if you choose to take courses
                    from different groups, then you will have to submit separate
                    forms.
                  </p>
                </div>
              </div>
              <div className="bg-green-100 p-4 rounded-lg shadow-md">
                <h3
                  className="font-bold cursor-pointer font-sanss text-green-600"
                  onClick={() => handleFAQClick(1)}
                >
                  Can I avail of any scholarships for my study at Manipal?
                </h3>
                <div
                  className="overflow-hidden transition-max-height duration-500 ease-in-out"
                  style={{
                    maxHeight: activeFAQ === 1 ? "500px" : "0",
                  }}
                >
                  <p className="pt-2">
                    There are many opportunities for scholarships to study
                    various programs at Manipal, which can be found on the
                    program’s page.
                  </p>
                </div>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                <h3
                  className="font-bold cursor-pointer font-sanss text-yellow-600"
                  onClick={() => handleFAQClick(2)}
                >
                  How do I apply for a Student Visa or PIO, or OCI?
                </h3>
                <div
                  className="overflow-hidden transition-max-height duration-500 ease-in-out"
                  style={{
                    maxHeight: activeFAQ === 2 ? "500px" : "0",
                  }}
                >
                  <p className="pt-2">
                    You can apply for a Student Visa or PIO, or OCI at the
                    nearest Indian consulate or Embassy. You’ll need to provide
                    an admission confirmation form that was issued by the
                    Director of Admissions at Manipal University Jaipur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 pt-60 dm:pt-20 p-4">
      <div className="flex space-x-4 border-b-2 overflow-x-auto">
        <button
          className={`py-2 px-4 font-sanss font-semibold ${
            activeTab === "overview" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`py-2 px-4 font-sanss font-semibold ${
            activeTab === "programs" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => setActiveTab("programs")}
        >
          Programs
        </button>
        <button
          className={`py-2 px-4 font-sanss font-semibold ${
            activeTab === "admission" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => setActiveTab("admission")}
        >
          Admission process
        </button>
        <button
          className={`py-2 px-4 font-sanss font-semibold ${
            activeTab === "faq" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => setActiveTab("faq")}
        >
          FAQ
        </button>
      </div>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default Navbar;
