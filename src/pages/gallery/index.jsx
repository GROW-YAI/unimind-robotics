import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Main Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
import picthree from '../../assets/images/picthree.jpg';
import picfour from '../../assets/images/picfour.jpg';
import picfive from '../../assets/images/picfive.jpg';
import picsix from '../../assets/images/picsix.jpg';

const Gallery = () => {
  return (
    <>
      <Navbar />
      <motion.div
        className="bg-gray-100 min-h-screen mt-28 py-10 px-6 md:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-[#3943F7]">
            Our Gallery
          </h3>
          <p className="text-gray-700 mt-2">
            Explore our collection of stunning visuals.
          </p>
        </motion.div>

        {/* Swiper Slider Section */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            className="rounded-lg shadow-lg"
            effect="fade"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={picthree}
                  alt="Gallery Image 1"
                  className="w-full h-80 md:h-96 object-contain rounded-lg"
                />
              </motion.div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={picfour}
                  alt="Gallery Image 2"
                  className="w-full h-80 md:h-96 object-contain rounded-lg"
                />
              </motion.div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={picfive}
                  alt="Gallery Image 3"
                  className="w-full h-80 md:h-96 object-contain rounded-lg"
                />
              </motion.div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={picsix}
                  alt="Gallery Image 4"
                  className="w-full h-80 md:h-96 object-contain rounded-lg"
                />
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Gallery;
