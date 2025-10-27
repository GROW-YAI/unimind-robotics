import Navbar from "../../components/navbar";
import aboutpic from '../../assets/images/aboutpic.jpg';
import picthree from '../../assets/images/picthree.jpg';
import IMG3 from '../../assets/images/IMG3.jpg';
import picfive from '../../assets/images/picfive.jpg';
import IMG16 from '../../assets/images/IMG16.jpg';
import IMG18 from '../../assets/images/IMG18.jpg';
import pictwo from '../../assets/images/pictwo.jpg';
import pictech from '../../assets/images/pictech.jpg';
import IMG13 from '../../assets/images/IMG13.jpg';
import IMG11 from '../../assets/images/IMG11.jpg';
import IMG12 from '../../assets/images/IMG12.jpg';
import IMG14 from '../../assets/images/IMG14.jpg';
import IMG15 from '../../assets/images/IMG15.jpg';
import IMG22 from '../../assets/images/IMG22.jpg';
import IMG23 from '../../assets/images/IMG23.jpg';
import IMG25 from '../../assets/images/IMG25.jpg';
import IMG24 from '../../assets/images/IMG24.jpg';
import IMG17 from '../../assets/images/IMG17.jpg';
import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";



const Product = () => {
  const navigate = useNavigate();
  const CURRENCY = "GH₵";

  // UI state
  const [view, setView] = useState("grid"); // or "list"
  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8); // load more

  const products = [
    { id: "edu-001", category: "education", title: "Educational Robots for Schools", description: "Programmable robots, STEM kits, Robot-building kits.", imageUrl: picfive, price: 500 },
    { id: "ind-001", title: "The Uni 1.0 Smart Car Kit", description: "a fun, interactive coding kit for kids 7+, teaching STEM skills with Arduino Uno, block coding, and hands-on projects.", imageUrl: IMG3, price: 650 },
    { id: "cust-001", category: "custom", title: "Robot Car Chassis Kit", description: "Base platform for building Arduino or Raspberry Pi robots with motors and wheels.", imageUrl: IMG16, price: 95 },
    // { id: "parts-001", title: "Robotics Accessories & Parts", description: "Components, Sensors, Tools for robot creation.", imageUrl: IMG18, price: 500 },
    { id: "edu-002", title: "L298N Motor Driver Shield", description: "Arduino shield that controls DC and stepper motors with 2 L293D ICs, driving up to 4 DC motors or 2 stepper motors", imageUrl: IMG11, price: 55 },
    { id: "edu-003", title: "Light Emitting Diode", description: "Common output component in Arduino projects, lighting up when set to HIGH and turning off when set to LOW, with polarity-sensitive anode and cathode legs.", imageUrl: IMG12, price: 8 },
    { id: "ind-002", title: "Jumper Wires (Dupont Cables)", description: "Flexible, reusable cables for temporary connections between components on breadboards.", imageUrl: IMG13, price: 60 },
    { id: "ind-003", title: "Tower Pro SG90 Micro Servo", description: "Compact, 180-degree rotation servo motor for robotics, RC, and Arduino projects, controlled via PWM signals.", imageUrl: IMG14, price: 40 },
    { id: "cust-002", title: "HC-SR04 Ultrasonic Distance Sensor", description: "Ultrasonic sensor that measures distance using sound waves.", imageUrl: IMG15, price: 25 },
    { id: "cust-003", title: "Breadboard", description: "Solderless platform for building and testing electronic circuits with easy component insertion and removal.", imageUrl: IMG17, price: 30 },
    { id: "parts-002", title: "Arduino", description: " microcontroller board that acts as the of electronic projects, controlling outputs and reading inputs based on programmed instructions.", imageUrl: IMG25, price: 160 },
    { id: "parts-003", title: "Geared Motor", description: "C motor with a gearbox for increased torque and precise movement, suitable for robotics, automation, and projects requiring controlled movement, and can be controlled with Arduino using a motor driver module", imageUrl: IMG22, price: 40 },
    { id: "edu-004", title: "IR Sensor", description: "Detects objects or motion by emitting infrared light and sensing reflections, sending a digital signal to Arduino for applications like obstacle avoidance and proximity sensing.", imageUrl: IMG24, price: 22 },
    { id: "ind-004", title: "Buzzer", description: "output device that produces sound or alerts in Arduino projects, available as active or passive types, and can be controlled using digital signals.", imageUrl: IMG23, price: 8.00 },
  ];

  const services = [
    { title: "Robotics Training for Schools", description: "Workshops for teachers and students to integrate robotics into classrooms.", imageUrl: pictwo },
    { title: "Technical Support & Consultation", description: "Personalized support and project consultations.", imageUrl: pictech },
    { title: "Robotics Competitions & Events", description: "Organiziprojectsng and sponsoring robotics challenges to promote learning and engagement.", imageUrl: aboutpic },
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

  const [showScrollButton, setShowScrollButton] = useState(false);

    // Handle scroll events
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

    // derive categories
    const categories = useMemo(() => {
      const set = new Set(["all", ...products.map(p => p.category || "other")]);
      return Array.from(set);
    }, []);

    const filtered = useMemo(() => {
      return products.filter(p => category === "all" ? true : (p.category || "other") === category).slice(0, visibleCount);
    }, [products, category, visibleCount]);

  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-16">
        <div className="max-w-screen-xl mx-auto px-8 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex gap-2 items-center">
            <label className="font-semibold text-gray-700 mr-2">Category</label>
            <select value={category} onChange={e => { setCategory(e.target.value); setVisibleCount(8); }} className="border rounded px-2 py-1">
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          <div className="flex gap-2 items-center">
            <button onClick={() => setView("grid")} className={`px-3 py-1 rounded ${view === "grid" ? "bg-[#3943F7] text-white" : "bg-white border"}`}>Grid</button>
            <button onClick={() => setView("list")} className={`px-3 py-1 rounded ${view === "list" ? "bg-[#3943F7] text-white" : "bg-white border"}`}>List</button>
          </div>
        </div>

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
          <div className={view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" : "space-y-4"}>
            {filtered.map((product, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 ${view === "grid" ? "hover:scale-105" : ""}`}
                variants={cardVariants}
              >
                <div className={view === "grid" ? "" : "flex gap-4 items-center"}>
                  <img className={view === "grid" ? "w-full h-96 object-cover" : "w-32 h-24 object-cover flex-shrink-0"} src={product.imageUrl} alt={product.title} />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#3943F7] mb-2">{product.title}</h3>
                    <p className="text-sm text-gray-700">{product.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-bold text-gray-900">{CURRENCY}{product.price}</span>
                      <button onClick={() => navigate("/contact-us", { state: { productId: product.id, productTitle: product.title } })} className="bg-[#3943F7] text-white px-3 py-1 rounded hover:bg-[#2e34c9]">Order Now</button>
                    </div>
                  </div>
                </div>
               </motion.div>
             ))}
           </div>

          {/* Load more */}
          {filtered.length < products.filter(p => category === "all" ? true : (p.category || "other") === category).length && (
            <div className="max-w-screen-xl mx-auto px-8 my-6 text-center">
              <button onClick={() => setVisibleCount(v => v + 8)} className="bg-[#3943F7] text-white px-4 py-2 rounded">Load more</button>
            </div>
          )}
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="max-w-screen-xl mx-auto m-24 px-8"
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

export default Product;
