import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images1 = [
  'https://i.ibb.co/kx7DhXZ/Whats-App-Image-2024-12-12-at-15-15-40-91e08b62.jpg',
  'https://i.ibb.co/m032xh9/Whats-App-Image-2024-12-12-at-15-15-40-c3a92d43.jpg',
  'https://i.ibb.co/SN0kpmL/Whats-App-Image-2024-12-12-at-15-15-41-1f0bdf9e.jpg',
  'https://i.ibb.co/sQYjBW7/Whats-App-Image-2024-12-12-at-15-15-41-a6598a01.jpg',
  'https://i.ibb.co/5jFD02C/Whats-App-Image-2024-12-12-at-15-15-41-50f7e161.jpg',
  'https://i.ibb.co/HD7LmfG/Whats-App-Image-2024-12-12-at-17-15-29-3a8fc582.jpg',
];

const images2 = [
  'https://i.ibb.co/QX7MC45/Whats-App-Image-2024-12-12-at-17-15-30-6c2ca29c.jpg',
  'https://i.ibb.co/NjYmDX8/Whats-App-Image-2024-12-12-at-17-15-30-8230b007.jpg',
  "https://i.ibb.co/NWBZbgS/Whats-App-Image-2024-12-12-at-17-15-30-f988ad9d.jpg",
  "https://i.ibb.co/PgZsh8k/Whats-App-Image-2024-12-12-at-17-15-31-a147c1e1.jpg",
  "https://i.ibb.co/r5Ln29M/Whats-App-Image-2024-12-12-at-17-17-45-94eeee28.jpg",
  "https://i.ibb.co/XFPdn1g/Whats-App-Image-2024-12-12-at-17-17-46-58900cad.jpg",
];

const StudentGallery = () => {
  const sliderRef1 = React.useRef(null);
  const sliderRef2 = React.useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, // Same speed for both sliders
    dots: false, // No pagination dots
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      sliderRef2.current.slickGoTo(next); // Sync second slider to first
    },
  };

  const handlePrev = () => {
    sliderRef1.current.slickPrev();
    sliderRef2.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef1.current.slickNext();
    sliderRef2.current.slickNext();
  };

  return (
    <div className="w-full container mx-auto p-4 px-4 md:px-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-6xl dm:text-3xl font-bold mb-8">
          Student <span className="text-blue-400">Life</span>
        </h2>
        <div className="flex gap-4">
          {/* Combined slider buttons */}
          <div
            className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors duration-200"
            onClick={handlePrev}
          >
            <FaChevronLeft className="text-white text-xl" />
          </div>
          <div
            className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors duration-200"
            onClick={handleNext}
          >
            <FaChevronRight className="text-white text-xl" />
          </div>
        </div>
      </div>

      {/* First Slider */}
      <Slider ref={sliderRef1} {...settings}>
        {images1.map((image, index) => (
          <div key={index} className="px-2">
            <div className="overflow-hidden border-2 border-transparent rounded-lg">
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-48 sm:h-60 object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Second Slider */}
      <Slider ref={sliderRef2} {...settings}>
        {images2.map((image, index) => (
          <div key={index} className="px-2">
            <div className="overflow-hidden border-2 border-transparent rounded-lg">
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-48 sm:h-60 object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StudentGallery;
