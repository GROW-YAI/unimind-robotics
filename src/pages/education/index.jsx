import Navbar from "../../components/navbar";
import pic from "../../assets/images/pic.jpg"; 
import { Lightbulb, BookOpen, DownloadCloud } from "lucide-react"; 
import { motion } from 'framer-motion';

const EducationResources = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-28 px-4 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          {/* Left Section: Text */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-xl font-semibold text-[#3943F7] uppercase tracking-wide mb-2">
              Education & Resources
            </h1>
            <motion.h2 
              className="text-3xl font-bold text-[#3943F7] leading-snug mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Unlocking the Potential of Robotics in Education
            </motion.h2>
            <p className="text-sm text-gray-700 leading-6 mb-4">
              "Robotics promotes problem-solving, creativity, and logical thinking while introducing students to real-world STEM applications."
            </p>
            <motion.h3 
              className="text-xl font-semibold text-[#3943F7] uppercase tracking-wide mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Robotics in the Classroom
            </motion.h3>
            <p className="text-sm text-gray-700 leading-6 mb-4">
              "UniMind Robotics products simplify teaching coding, programming, and STEM concepts through interactive tools."
            </p>
          </motion.div>

          {/* Right Section: Image */}
          <motion.div
            className="md:w-96 flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src={pic}
              alt="Robotics in Education"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Downloadable Resources Section */}
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <DownloadCloud className="text-[#3943F7] w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Curriculum Guides</h3>
            <p className="text-sm text-gray-700 text-center mt-2">
              Comprehensive guides to integrate robotics into your curriculum.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <BookOpen className="text-[#3943F7] w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Project Ideas</h3>
            <p className="text-sm text-gray-700 text-center mt-2">
              Creative ideas for projects to enhance students' hands-on learning experience.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Lightbulb className="text-[#3943F7] w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Tutorials & Videos</h3>
            <p className="text-sm text-gray-700 text-center mt-2">
              Step-by-step tutorials and engaging videos to guide teachers and students.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </>
  );
};

export default EducationResources;
