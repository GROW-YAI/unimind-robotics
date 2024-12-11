import { Facebook, Linkedin, Youtube } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import logo from "../../assets/images/logo.png";
import tiktok from "../../assets/images/tiktok.png";


const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_aolldap", // Replace with your EmailJS service ID
                "template_85i29g8",
                form.current,
                "hmMEo4Y3ESD6Nf9Sj" // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message. Please try again later.");
                }
            );
    };

    return (
        <footer className="bg-gradient-to-r from-[#3943F7] to-[#8DB8FD] text-white py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 sm:px-6 md:px-8 text-center md:text-left">
                {/* Company Info + Social Links */}
                <div className="flex flex-col items-center md:items-start">
                    <img src={logo} alt="UniMind Robotics Logo" className="h-14 mb-4 bg-white" />
                    <p className="text-sm md:text-base leading-relaxed mb-6">
                        At UniMind Robotics, we are dedicated to innovation and creativity, delivering
                        state-of-the-art robotics solutions to simplify your life and empower your future.
                    </p>
                    <h3 className="text-base font-semibold mb-3">Social Media</h3>

                    <div className="flex space-x-4">
                        {[ 
                            { Icon: Facebook, url: "https://www.facebook.com/share/fm2WZBCYWFD5ncWA/?mibextid=LQQJ4d" },
                            { Icon: Linkedin, url: "https://www.linkedin.com/in/richard-osei-5aa83724a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
                            { Icon: () => <img src={tiktok} alt="TikTok" className="w-5 h-5" />, url: "https://www.tiktok.com/@mcblay2?_t=8s6HzM7h2G6&_r=1" },
                            { Icon: Youtube, url: "https://www.youtube.com/@mcblay521" } 
                        ].map(({ Icon, url, hoverClass = "hover:bg-white hover:text-[#3943F7]" }, idx) => (
                            <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className={`p-2 rounded border border-white ${hoverClass}`}>
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links + Help */}
                <div className="flex flex-col items-center md:items-start">
                <div className="mb-6">
                        <h3 className="text-base font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About Us", path: "/about-us" },
                                { name: "Product & Services", path: "/our-product" },
                                { name: "Education & Resources", path: "/education&resources" },
                                { name: "Gallery", path: "/gallery" },
                                { name: "Contact Us", path: "/contact-us" },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.path} className="hover:underline">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-bold mb-4">Help</h3>
                        <ul className="space-y-3">
                            {["Privacy Policy", "Customer Support", "Terms & Conditions"].map((link, idx) => (
                                <li key={idx}>
                                    <a href="/" className="hover:underline">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-base font-semibold mb-4">Contact Us</h3>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-4 w-full max-w-sm bg-white p-4 rounded-lg shadow-md"
                    >
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                            className="w-full p-2 md:p-3 bg-gray-50 text-[#3943F7] placeholder-gray-400 rounded focus:outline-none"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            required
                            className="w-full p-2 md:p-3 bg-gray-50 text-[#3943F7] placeholder-gray-400 rounded focus:outline-none"
                        />
                        <input
                            type="text"
                            name="user_phone"
                            placeholder="Phone"
                            required
                            className="w-full p-2 md:p-3 bg-gray-50 text-[#3943F7] placeholder-gray-400 rounded focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required
                            className="w-full p-2 md:p-3 bg-gray-50 text-[#3943F7] placeholder-gray-400 rounded focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full p-2 md:p-3 bg-[#3943F7] text-white font-semibold rounded hover:bg-[#647FFA]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-12 border-t border-white pt-6 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} UniMind Robotics. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
