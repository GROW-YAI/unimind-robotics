import React from "react";
import Navbar from "../../components/navbar";
import { MapPin, Mail, Phone, Users } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-[#3943F7] to-[#8DB8FD] text-white py-16 px-6">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Have questions?
          </h2>
          <div className="flex justify-center items-center space-x-2 text-sm sm:text-base text-white">
            <span>Get in touch with us today for more information or a free consultation.</span>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Address */}
          <div className="bg-[#3943F7] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
            <MapPin className="text-[#8DB8FD] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-sm">P. O. Box BI 1369, Obuasi Mangoase</p>
          </div>

          {/* Email */}
          <div className="bg-[#3943F7] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
            <Mail className="text-[#8DB8FD] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-sm">richosei199@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-[#3943F7] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
            <Phone className="text-[#8DB8FD] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-sm">(+233) 53 023 5739</p>
          </div>

          {/* Follow Us */}
          <div className="bg-[#3943F7] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
            <Users className="text-[#8DB8FD] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <p className="text-sm">UniMind Robotics – on all social platforms.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
