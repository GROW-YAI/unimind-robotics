import Navbar from "../../components/navbar";
import robot from "../../assets/images/robot.png";
import rb from "../../assets/images/rb.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-r from-[#3943F7] to-[#8DB8FD] min-h-screen flex flex-col justify-center items-center md:flex-row px-5 md:px-10 overflow-hidden">
                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0 max-w-full">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Innovating the Future with Robotics
                    </h1>
                    <p className="text-lg md:text-xl text-white">
                        Bringing Intelligent Robotics to Schools & Individuals
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center max-w-full">
                    <img
                        src={robot}
                        alt="robot"
                        className="max-w-full h-auto sm:max-w-[80%] md:max-w-[90%] lg:max-w-[80%] object-contain"
                    />
                </div>
            </div>

            {/* About Us Section */}
            <motion.div
                className="py-16 px-6 md:px-12 bg-gray-100"
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                initial={{ x: "0vw", opacity: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                    {/* Image Section */}
                    <motion.div
                        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <img
                            src={rb}
                            alt="About Us"
                            className="w-72 h-72 md:w-80 md:h-80 object-cover"
                        />
                    </motion.div>

                    {/* Text Section */}
                    <div className="md:w-1/2">
                        <motion.h4
                            className="text-[#3943F7] uppercase tracking-wide font-semibold mb-2"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            About Us
                        </motion.h4>
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-[#3943F7] mb-4"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Welcome to UniMind Robotics
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 text-base md:text-lg mb-6"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Where we design, build, and deliver advanced robotics for educational and personal use. Our mission is to empower the next generation of thinkers and makers through innovative robotic solutions.
                        </motion.p>
                        <motion.button
                            onClick={() => navigate("/about-us")}
                            className="bg-gradient-to-r from-[#3943F7] to-[#8DB8FD] text-white px-6 py-3 rounded-md text-base md:text-lg font-medium hover:bg-green-600"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            Read More
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Why Choose Us Section */}
            <div className="py-16 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3943F7] mb-8">
                        Why Choose UniMind Robotics?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-[#3943F7] mb-2">
                                Cutting-Edge Technology
                            </h3>
                            <p className="text-gray-600">
                                Latest innovations for functional, user-friendly, and adaptable robots.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-[#3943F7] mb-2">
                                Customizable & Scalable
                            </h3>
                            <p className="text-gray-600">
                                Tailored solutions for individuals and classrooms.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-[#3943F7] mb-2">
                                Hands-On Learning
                            </h3>
                            <p className="text-gray-600">
                                Engaging, educational experiences that involve every stage of building and programming.
                            </p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-[#3943F7] mb-2">
                                Support & Training
                            </h3>
                            <p className="text-gray-600">
                                Dedicated customer service and technical support to maximize your robotics investment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="py-16 px-6 md:px-12 bg-gray-100">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3943F7] mb-6">
                        Customer Reviews
                    </h2>
                    <p className="italic text-gray-600 text-lg">
                        "UniMind Robotics has transformed our classroom by making learning interactive and fun. The robots are durable and easy to use for all age groups."
                    </p>
                </div>
            </div>

            {/* Case Studies Section */}
            <div className="py-16 px-6 md:px-12 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3943F7] mb-6">
                        Case Studies
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Real-world examples of how our products have improved learning outcomes and inspired innovation.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Landing;
