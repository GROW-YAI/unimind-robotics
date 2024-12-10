import Navbar from "../../components/navbar";
import robot from "../../assets/images/robot.png";
import rb from "../../assets/images/rb.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";

const Landing = () => {
    const navigate = useNavigate();
    const heroVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <motion.div
                className="bg-gradient-to-r from-[#3943F7] to-[#8DB8FD] min-h-screen flex flex-col justify-center items-center md:flex-row px-5 md:px-10 overflow-x-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.div
                    className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0"
                    variants={heroVariants}
                >
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Innovating the Future with Robotics
                    </h3>
                    <p className="text-lg md:text-xl text-white">
                        Bringing Intelligent Robotics to Schools & Individuals
                    </p>
                </motion.div>
                <motion.div
                    className="w-full md:w-1/2 flex justify-center"
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
                    }}
                >
                    <img
                        src={robot}
                        alt="robot"
                        className="max-w-full sm:max-w-[80%] object-contain"
                    />
                </motion.div>
            </motion.div>

            {/* About Us Section */}
            <motion.div
                className="py-16 px-6 md:px-12 bg-gray-100 overflow-x-hidden"
                initial={{ x: "0vw", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
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
                            We design, build, and deliver advanced robotics for educational and
                            personal use. Empower the next generation of thinkers with our innovative
                            solutions.
                        </motion.p>
                        <motion.button
                            onClick={() => navigate("/about-us")}
                            className="bg-gradient-to-r from-[#3943F7] to-[#8DB8FD] text-white px-6 py-3 rounded-md text-base md:text-lg font-medium hover:bg-green-600"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            Read More
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            <div>
                {/* Why Choose Us Section */}
                <motion.div
                    className="py-16 px-6 md:px-12 bg-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1 }}
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center text-[#3943F7] mb-8"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Why Choose UniMind Robotics?
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.3, // Delays between card animations
                                    },
                                },
                            }}
                        >
                            {[
                                {
                                    title: "Cutting-Edge Technology",
                                    description:
                                        "Latest innovations for functional, user-friendly, and adaptable robots.",
                                },
                                {
                                    title: "Customizable & Scalable",
                                    description: "Tailored solutions for individuals and classrooms.",
                                },
                                {
                                    title: "Hands-On Learning",
                                    description:
                                        "Engaging, educational experiences that involve every stage of building and programming.",
                                },
                                {
                                    title: "Support & Training",
                                    description:
                                        "Dedicated customer service and technical support to maximize your robotics investment.",
                                },
                            ].map((card, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-100 p-6 rounded-lg shadow-md"
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.9 },
                                        visible: { opacity: 1, scale: 1 },
                                    }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <h3 className="text-lg font-semibold text-[#3943F7] mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600">{card.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Customer Reviews Section */}
                <motion.div
                    className="py-16 px-6 md:px-12 bg-gray-100"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-[#3943F7] mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Customer Reviews
                        </motion.h2>
                        <motion.p
                            className="italic text-gray-600 text-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            "UniMind Robotics has transformed our classroom by making learning
                            interactive and fun. The robots are durable and easy to use for all
                            age groups."
                        </motion.p>
                    </div>
                </motion.div>

                {/* Case Studies Section */}
                <motion.div
                    className="py-16 px-6 md:px-12 bg-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-[#3943F7] mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Case Studies
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 text-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Real-world examples of how our products have improved learning
                            outcomes and inspired innovation.
                        </motion.p>
                        <motion.button
                            onClick={() => navigate("/gallery")}
                            className="bg-gradient-to-r from-[#3943F7] to-[#8DB8FD] text-white mt-4 px-6 py-3 rounded-md text-base md:text-lg font-medium hover:bg-green-600"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            Discover More
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </>
    );
};

export default Landing;
