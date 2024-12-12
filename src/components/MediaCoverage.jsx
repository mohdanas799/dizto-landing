import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { useRef } from "react";

const MediaCoverage = () => {
  const swiperRef = useRef(null);

  const departments = [
    {
      icon: "https://www.footprintseducation.in/landingpage/franchise_v2/assets/images/icons/Indian-Express.png",
    },
    {
      icon: "https://www.footprintseducation.in/landingpage/franchise_v2/assets/images/icons/Forbes.png",
    },
    {
      icon: "https://www.footprintseducation.in/landingpage/franchise_v2/assets/images/icons/India-Today.png",
    },
    {
      icon: "https://www.footprintseducation.in/landingpage/franchise_v2/assets/images/icons/TED.png",
    },
    {
      icon: "https://www.footprintseducation.in/landingpage/franchise_v2/assets/images/icons/Indian-Express.png",
    },
    {
      icon: "https://www.footprintseducation.in/landingpage/franchise_v2/assets/images/icons/Indian-Express.png",
    },
    {
      icon: "https://www.footprintseducation.in/landingpage/franchise_v2/assets/images/icons/Forbes.png",
    },
    {
      icon: "https://www.footprintseducation.in/landingpage/franchise_v2/assets/images/icons/India-Today.png",
    },
  ];

  return (
    <>
      <div className="relative container mx-auto">
        <h2 className="text-center text-6xl dm:text-3xl my-10 font-bold mb-8">Media <span className="text-blue-400">Coverage</span></h2>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          loop
          className="mySwiper w-[70%]"
        >
          {departments.map((dept, index) => (
            <SwiperSlide key={index}>
              <div className="relative text-center">
                <img
                  src={dept.icon}
                  alt={dept.name}
                  className="w-20 h-20 mx-auto mb-4"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MediaCoverage;
