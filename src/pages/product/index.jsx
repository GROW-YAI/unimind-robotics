import Navbar from "../../components/navbar";
import aboutpic from '../../assets/images/aboutpic.jpg';
import picthree from '../../assets/images/picthree.jpg';
import picfour from '../../assets/images/picfour.jpg';
import picfive from '../../assets/images/picfive.jpg';
import picsix from '../../assets/images/picsix.jpg';
import picseven from '../../assets/images/picseven.jpg';
import pictwo from '../../assets/images/pictwo.jpg';
import pictech from '../../assets/images/pictech.jpg';
import { motion } from 'framer-motion';

const Product = () => {
  const products = [
    { title: "Educational Robots for Schools", description: "Programmable robots, STEM kits, Robot-building kits.", imageUrl: picfive },
    { title: "Robots for Individuals", description: "Hobbyist kits, Interactive robots, Drones.", imageUrl: picfour },
    { title: "Custom Robotics Solutions", description: "Robotic arms, Automation robots, AI-based systems.", imageUrl: picsix },
    { title: "Robotics Accessories & Parts", description: "Components, Sensors, Tools for robot creation.", imageUrl: picseven },
  ];

  const services = [
    { title: "Robotics Training for Schools", description: "Workshops for teachers and students to integrate robotics into classrooms.", imageUrl: pictwo },
    { title: "Technical Support & Consultation", description: "Personalized support and project consultations.", imageUrl: pictech },
    { title: "Robotics Competitions & Events", description: "Organizing and sponsoring robotics challenges to promote learning and engagement.", imageUrl: aboutpic },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-16">
        {/* Header Section */}
        <div className="max-w-screen-xl mx-auto mt-28 px-8 text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-[#3943F7] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Products & Services
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We offer a wide range of robotics products designed for educational institutions and individuals.
            Each product fosters creativity, critical thinking, and hands-on learning.
          </motion.p>
        </div>

        {/* Products Section */}
        <motion.div
          className="max-w-screen-xl mx-auto px-8 mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h3
            className="text-2xl font-semibold text-[#3943F7] mb-6"
            variants={cardVariants}
          >
            Our Products
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                variants={cardVariants}
              >
                <img className="w-full h-96 object-cover" src={product.imageUrl} alt={product.title} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#3943F7] mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-700">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="max-w-screen-xl mx-auto px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h3
            className="text-2xl font-semibold text-[#3943F7] mb-6"
            variants={cardVariants}
          >
            Our Services
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                variants={cardVariants}
              >
                <img className="w-full h-48 object-cover" src={service.imageUrl} alt={service.title} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#3943F7] mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-700">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Product;
