import Navbar from "../../components/navbar";
import pic from "../../assets/images/pic.jpg";
import { Lightbulb, BookOpen, Leaf } from "lucide-react";
import pictwo from '../../assets/images/pictwo.jpg';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          {/* Left Section: Text */}
          <div className="md:w-1/2">
            <h1 className="text-xl font-semibold text-[#3943F7] uppercase tracking-wide mb-2">
              About Us
            </h1>
            <h2 className="text-3xl font-bold text-[#3943F7] leading-snug mb-4">
              UniMind Robotics is reshaping the future of technology
            </h2>
            <p className="text-sm text-gray-700 leading-6 mb-4">
              "UniMind Robotics is a leading robotics company dedicated to
              revolutionizing the way we learn, work, and innovate. We
              specialize in designing and manufacturing high-quality,
              customizable robots for educational institutions and individuals.
              Our robots are not just products—they are gateways to the future
              of technology, offering hands-on learning experiences that engage
              and inspire."
            </p>
            <h3 className="text-xl font-semibold text-[#3943F7] uppercase tracking-wide mb-2">Mission</h3>
            <p className="text-sm text-gray-700 leading-6 mb-4">
              "To make robotics accessible, educational, and empowering for all.
              We aim to ignite curiosity and foster innovation, enabling
              students and hobbyists to create, learn, and grow through
              hands-on robotics experiences."
            </p>
            <h3 className="text-xl font-semibold text-[#3943F7] uppercase tracking-wide mb-2">Vision</h3>
            <p className="text-sm text-gray-700 leading-6">
              "To become a global leader in educational robotics, bridging the
              gap between innovation and learning, and to help shape the future
              of robotics."
            </p>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-96 flex-shrink-0">
            <img
              src={pic}
              alt="Robot showcase"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Values Section */}


        <div className="relative py-20 px-6 sm:px-10 w-full md:px-16 lg:px-24 mt-32">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${pictwo})` }}
          >
            <div className="absolute inset-0 bg-[#3943F7] opacity-50"></div> {/* Dark overlay */}
          </div>
          {/* Content */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-5xl z-10">
            <div className="group bg-black bg-opacity-40 text-white p-4 rounded-xl shadow-md flex flex-col justify-center items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <Lightbulb className="text-white w-10 h-10 sm:w-12 sm:h-12 mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-white text-center">Innovation</h3>
              <p className="text-xs sm:text-sm text-white text-center mt-2">
                Pushing the boundaries of technology to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="group bg-black bg-opacity-40 text-white p-4 rounded-xl shadow-md flex flex-col justify-center items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <BookOpen className="text-white w-10 h-10 sm:w-12 sm:h-12 mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-white text-center">Education</h3>
              <p className="text-xs sm:text-sm text-white text-center mt-2">
                Transforming learning experiences and inspiring the next generation of engineers, designers, and problem-solvers.
              </p>
            </div>

            <div className="group bg-black bg-opacity-40 text-white p-4 rounded-xl shadow-md flex flex-col justify-center items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <Leaf className="text-white w-10 h-10 sm:w-12 sm:h-12 mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-white text-center">Sustainability</h3>
              <p className="text-xs sm:text-sm text-white text-center mt-2">
                Designing eco-friendly, energy-efficient robots for a sustainable future.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutUs;
