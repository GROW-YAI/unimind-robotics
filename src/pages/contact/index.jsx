import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
import { MapPin, Mail, Phone, Users } from "lucide-react";
import whatsapp from "../../assets/images/whatsapp.png";

const Contact = () => {
  return (
    <>
      <Navbar />
      <motion.div
        className="bg-gradient-to-r from-[#3943F7] to-[#8DB8FD] text-white py-16 px-6 mt-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Have questions?</h2>
          <p className="text-sm sm:text-base text-white">
            Get in touch with us today for more information or a free consultation.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            { Icon: MapPin, title: "Address", text: "P. O. Box BI 1369, Obuasi Mangoase" },
            { Icon: Mail, title: "Email", text: "richosei199@gmail.com" },
            { Icon: Phone, title: "Phone", text: "(+233) 53 023 5739" },
            { Icon: Users, title: "Follow Us", text: "UniMind Robotics – on all social platforms." },
          ].map(({ Icon, title, text }, index) => (
            <motion.div
              key={index}
              className="bg-[#3943F7] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="text-[#8DB8FD] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* WhatsApp Section */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="https://wa.me/233553109542"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#3943F7] rounded-full shadow-md hover:shadow-lg transition duration-300 w-24 h-24"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={whatsapp} alt="WhatsApp" className="w-full" />
          </motion.a>
        </motion.div>

        <motion.div
          className="text-center text-sm mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>Tap the WhatsApp icon to chat with us directly!</p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;
