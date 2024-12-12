import React from 'react';

const FranchiseBenefits = () => {
  const data = [
    {
      id: 1,
      icon: '💰', // You can replace this with the appropriate image or icon
      title: '~ 35% Annual Return',
      description: 'Earn as much as 20 Lacs per year in Profit',
      bgColor: 'bg-white',
    },
    {
      id: 2,
      icon: '📉',
      title: 'No Revenue Share Till 40 Children',
      description: 'Pay Revenue Share only when you are profitable',
      bgColor: 'bg-white',
    },
    {
      id: 3,
      icon: '🎒',
      title: '120 Admissions Guaranteed',
      description: 'In 2 Years or else get compensation',
      bgColor: 'bg-white',
    },
    {
      id: 4,
      icon: '💸',
      title: 'Option to Sell Back',
      description: 'Sell the centre back at 4 times profit',
      bgColor: 'bg-white',
    },
    {
      id: 5,
      icon: '✅',
      title: '100% Success Rate',
      description: 'Zero Closed-Down centres till date',
      bgColor: 'bg-white',
    },
    {
      id: 6,
      icon: '🤝',
      title: 'Partnership Model',
      description: 'Marketing, Technology, Hiring support with complete handholding',
      bgColor: 'bg-white',
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl dm:text-3xl font-bold mb-14">
          Why Choose <span className="text-blue-600">Footprints Franchise</span>
        </h2>
        <div className="grid grid-cols-1 w-[70%] dm:w-[90%]   mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-lg shadow-lg ${item.bgColor}`}
            >
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseBenefits;
