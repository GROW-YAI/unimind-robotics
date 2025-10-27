import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import picthree from '../../assets/images/picthree.jpg';
import picfour from '../../assets/images/picfour.jpg';
import picfive from '../../assets/images/picfive.jpg';
import picsix from '../../assets/images/picsix.jpg';
import IMG4 from '../../assets/images/IMG4.jpg';
import IMG8 from '../../assets/images/IMG8.jpg';
import IMG9 from '../../assets/images/IMG9.jpg';
import IMG10 from '../../assets/images/IMG10.jpg';
import IMG19 from '../../assets/images/IMG19.jpg';
import Footer from "../../components/footer";
import { i } from "framer-motion/client";

const Gallery = () => {

  const [showScrollButton, setShowScrollButton] = useState(false);

    // Handle scroll events to toggle button visibility
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top logic
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
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
                  src={IMG4}
                  alt="Gallery Image 4"
                  className="w-full h-80 md:h-96 object-contain rounded-lg"
                />
              </motion.div>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={IMG8}
                  alt="Gallery Image 5"
                  className="w-full h-80 md:h-96 object-contain rounded-lg"
                />
              </motion.div>
            </SwiperSlide>

            {/* Slide 6 */}
            <SwiperSlide>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={IMG9}
                  alt="Gallery Image 6"
                  className="w-full h-80 md:h-96 object-contain rounded-lg"
                />
              </motion.div>
            </SwiperSlide>

            {/* Slide 7 */}
            <SwiperSlide>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={IMG10}
                  alt="Gallery Image 7"
                  className="w-full h-80 md:h-96 object-contain rounded-lg"
                />
              </motion.div>
            </SwiperSlide>

            {/* Slide 8 */}
            <SwiperSlide>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={IMG19}
                  alt="Gallery Image 8"
                  className="w-full h-80 md:h-96 object-contain rounded-lg"
                />
              </motion.div>
            </SwiperSlide>

            {/* Slide 9 */}
            <SwiperSlide>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={picsix}
                  alt="Gallery Image 9"
                  className="w-full h-80 md:h-96 object-contain rounded-lg"
                />
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </motion.div>

       {/* Scroll to Top Button */}
       {showScrollButton && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-[#3943F7] text-white p-4 rounded-full shadow-lg hover:bg-[#8DB8FD] focus:outline-none"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                >
                    ↑
                </motion.button>
            )}

      <Footer/>
    </>
  );
};

export default Gallery;
