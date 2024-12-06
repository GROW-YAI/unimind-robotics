import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Main Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Navbar from "../../components/navbar";
import picthree from '../../assets/images/picthree.jpg';
import picfour from '../../assets/images/picfour.jpg';
import picfive from '../../assets/images/picfive.jpg';
import picsix from '../../assets/images/picsix.jpg';
import picseven from '../../assets/images/picseven.jpg';
import pictwo from '../../assets/images/pictwo.jpg';
import pictech from '../../assets/images/pictech.jpg';

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-10 px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3943F7]">
            Our Gallery
          </h1>
          <p className="text-gray-600 mt-2">
            Explore our collection of stunning visuals.
          </p>
        </div>

        {/* Swiper Slider Section */}
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            className="rounded-lg shadow-lg"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative">
                <img
                  src={picthree}
                  alt="Gallery Image 1"
                  className="w-full h-80 md:h-96 object-contain rounded-lg"
                />
                
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative">
                <img
                  src={picfour}
                  alt="Gallery Image 2"
                  className="w-full h-80 md:h-96 object-contain rounded-lg"
                />
               
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative">
                <img
                  src={picfive}
                  alt="Gallery Image 3"
                  className="w-full h-80 md:h-96 object-contain rounded-lg"
                />
              
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="relative">
                <img
                  src={picsix}
                  alt="Gallery Image 4"
                  className="w-full h-full md:h-96 object-contain rounded-lg"
                />
                
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Gallery;
