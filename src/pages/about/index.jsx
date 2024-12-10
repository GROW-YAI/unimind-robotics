import Navbar from "../../components/navbar";
import pic from "../../assets/images/pic.jpg";
import { Lightbulb, BookOpen, Leaf } from "lucide-react";
import pictwo from "../../assets/images/pictwo.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-28 px-4 py-10">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Left Section: Text */}
          <motion.div className="md:w-1/2" variants={textVariants}>
            <h3 className="text-xl font-semibold text-[#3943F7] uppercase tracking-wide mb-2">
              About Us
            </h3>
            <h3 className="text-3xl font-bold text-[#3943F7] leading-snug mb-4">
              UniMind Robotics is reshaping the future of technology
            </h3>
            <p className="text-sm text-gray-700 leading-6 mb-4">
              "UniMind Robotics is a leading robotics company dedicated to
              revolutionizing the way we learn, work, and innovate. We
              specialize in designing and manufacturing high-quality,
              customizable robots for educational institutions and individuals.
              Our robots are not just products—they are gateways to the future
              of technology, offering hands-on learning experiences that engage
              and inspire."
            </p>
            <h3 className="text-xl font-semibold text-[#3943F7] uppercase tracking-wide mb-2">
              Mission
            </h3>
            <p className="text-sm text-gray-700 leading-6 mb-4">
              "To make robotics accessible, educational, and empowering for all.
              We aim to ignite curiosity and foster innovation, enabling
              students and hobbyists to create, learn, and grow through
              hands-on robotics experiences."
            </p>
            <h3 className="text-xl font-semibold text-[#3943F7] uppercase tracking-wide mb-2">
              Vision
            </h3>
            <p className="text-sm text-gray-700 leading-6">
              "To become a global leader in educational robotics, bridging the
              gap between innovation and learning, and to help shape the future
              of robotics."
            </p>
          </motion.div>

          {/* Right Section: Image */}
          <motion.div
            className="md:w-96 flex-shrink-0"
            variants={imageVariants}
          >
            <img
              src={pic}
              alt="Robot showcase"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="relative py-20 px-6 sm:px-10 w-full md:px-16 lg:px-24 mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${pictwo})` }}
          >
            <div className="absolute inset-0 bg-[#3943F7] opacity-50"></div>{" "}
            {/* Dark overlay */}
          </div>
          {/* Content */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-5xl z-10">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                text: "Pushing the boundaries of technology to deliver cutting-edge solutions.",
              },
              {
                icon: BookOpen,
                title: "Education",
                text: "Transforming learning experiences and inspiring the next generation of engineers, designers, and problem-solvers.",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                text: "Designing eco-friendly, energy-efficient robots for a sustainable future.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="group bg-black bg-opacity-40 text-white p-4 rounded-xl shadow-md flex flex-col justify-center items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                variants={cardVariants}
                whileHover={{ scale: 1.1 }}
              >
                <value.icon className="text-white w-10 h-10 sm:w-12 sm:h-12 mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-white text-center">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-white text-center mt-2">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
