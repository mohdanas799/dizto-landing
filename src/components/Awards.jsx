import React from 'react';

const awards = [
  { year: 2023, title: 'Leading Preschool in India', by: 'BW Education' },
  { year: 2018, title: 'Best Preschool', by: 'Silicon India' },
  { year: 2023, title: 'Innovation for Curriculum', by: 'BW Education' },
  { year: 2017, title: 'Best Preschool by Brainfeed', by: 'School Excellence Awards' },
];

// const team = [
//   { name: 'Raj Singhal', position: 'CEO, B.Tech - IIT-Delhi', image: 'https://www.footprintseducation.in/assets/images/team-img/Purvesh-Sharma.webp' },
//   { name: 'Purvesh Sharma', position: 'COO, B.Tech - IIT-Delhi', image: 'https://www.footprintseducation.in/assets/images/team-img/Purvesh-Sharma.webp' },
//   { name: 'Ashish Aggarwal', position: 'CO-Founder, M.Tech-IITD, MBA-IIM-C', image: 'https://www.footprintseducation.in/assets/images/team-img/Purvesh-Sharma.webp' },
//   { name: 'Amita Bhardwaj', position: 'Chief Delivery Officer', image: 'https://www.footprintseducation.in/assets/images/team-img/Purvesh-Sharma.webp' },
// ];

const Awards = () => {
  return (
    <div className="bg-gray-100 p-8">
      {/* Awards Section */}
      <div className="text-center mb-16">
        <h2 className="text-6xl dm:text-3xl font-bold mb-8">Awards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[80%] dm:w-[100%] mx-auto justify-center">
          {awards.map((award, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 py-16">
              <div className="text-yellow-500 text-6xl mb-8 text-center">🏆</div>
              <h3 className="text-2xl font-bold text-center">{award.year}</h3>
              <p className="text-gray-700 text-center">{award.title}</p>
              <p className="text-gray-500 text-sm text-center">{award.by}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Team Section */}
      {/* <div className="text-center">
        <h2 className="text-6xl dm:text-3xl font-bold mb-8">Our <span className="text-blue-400">Team</span></h2>
        <p className="text-gray-600 mb-12">Our Qualified Professionals Who are pointing the children towards a brighter future.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[85%] dm:w-[100%] mx-auto gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-60 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-700">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Awards;
