import Navbar from "../../components/navbar";
import pic from "../../assets/images/pic.jpg"; 
import { Lightbulb, BookOpen, DownloadCloud } from "lucide-react"; 

const EducationResources = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          {/* Left Section: Text */}
          <div className="md:w-1/2">
            <h1 className="text-xl font-semibold text-[#3943F7] uppercase tracking-wide mb-2">
              Education & Resources
            </h1>
            <h2 className="text-3xl font-bold text-[#3943F7] leading-snug mb-4">
              Unlocking the Potential of Robotics in Education
            </h2>
            <p className="text-sm text-gray-700 leading-6 mb-4">
              "Robotics promotes problem-solving, creativity, and logical thinking while introducing students to real-world STEM applications."
            </p>
            <h3 className="text-xl font-semibold text-[#3943F7] uppercase tracking-wide mb-2">Robotics in the Classroom</h3>
            <p className="text-sm text-gray-700 leading-6 mb-4">
              "UniMind Robotics products simplify teaching coding, programming, and STEM concepts through interactive tools."
            </p>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-96 flex-shrink-0">
            <img
              src={pic}
              alt="Robotics in Education"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Downloadable Resources Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
            <DownloadCloud className="text-[#3943F7] w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Curriculum Guides</h3>
            <p className="text-sm text-gray-700 text-center mt-2">
              Comprehensive guides to integrate robotics into your curriculum.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
            <DownloadCloud className="text-[#3943F7] w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Project Ideas</h3>
            <p className="text-sm text-gray-700 text-center mt-2">
              Creative ideas for projects to enhance students' hands-on learning experience.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
            <DownloadCloud className="text-[#3943F7] w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Tutorials & Videos</h3>
            <p className="text-sm text-gray-700 text-center mt-2">
              Step-by-step tutorials and engaging videos to guide teachers and students.
            </p>
          </div>
        </div>

        

        {/* Success Stories Section */}
        {/* <div className="mt-10">
          <h3 className="text-2xl font-semibold text-[#3943F7] mb-6">Success Stories</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg w-full md:w-1/3">
              <p className="text-sm text-gray-700 mb-4">
                "Our students are more engaged and motivated than ever before, thanks to the hands-on learning with UniMind Robotics."
              </p>
              <h4 className="text-lg font-semibold text-[#3943F7]">School A - STEM Program</h4>
            </div>

            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg w-full md:w-1/3">
              <p className="text-sm text-gray-700 mb-4">
                "UniMind Robotics has transformed our classroom into an interactive learning environment where students thrive."
              </p>
              <h4 className="text-lg font-semibold text-[#3943F7]">School B - Robotics Club</h4>
            </div>

            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg w-full md:w-1/3">
              <p className="text-sm text-gray-700 mb-4">
                "With UniMind Robotics, our students have built real-world projects that they’re proud of!"
              </p>
              <h4 className="text-lg font-semibold text-[#3943F7]">School C - Tech Initiative</h4>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default EducationResources;
