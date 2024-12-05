import { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) setIsMenuOpen(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMenuOpen]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav>
            {/* Main Navbar */}
            <div className="bg-white shadow-md relative">
                <div className="container mx-auto flex items-center justify-between p-4 px-4 md:px-6">
                    {/* Logo */}
                    <div className="flex items-center bg-white">
                        <img src={logo} alt="company-logo" className="h-16 sm:h-20" />
                    </div>

                    {/* Navigation Links */}
                    <div
                        ref={menuRef}
                        className={`${isMenuOpen ? "flex" : "hidden"} flex-col md:flex md:flex-row md:items-center absolute md:static top-20 right-0 bg-white md:bg-transparent shadow-md md:shadow-none rounded-md md:rounded-none w-3/4 md:w-auto z-40 p-4 md:p-0`}
                    >
                        <div className="flex flex-col md:flex-row md:space-x-8 md:ml-auto">
                            <Link
                                to="/"
                                className="block md:inline py-2 md:py-0 text-black hover:text-[#1D6205] text-center"
                            >
                                Home
                            </Link>

                            <Link
                                to="/about-us"
                                className="block md:inline py-2 md:py-0 text-black hover:text-[#1D6205] text-center"
                            >
                                About Us
                            </Link>

                            <Link
                                to="/our-product"
                                className="block md:inline py-2 md:py-0 text-black hover:text-[#1D6205] text-center"
                            >
                                Product & Services
                            </Link>

                            <Link
                                to="/education&resources"
                                className="block md:inline py-2 md:py-0 text-black hover:text-[#1D6205] text-center"
                            >
                                Education & Resources
                            </Link>
                            <Link
                                to="/blog"
                                className="block md:inline py-2 md:py-0 text-black hover:text-[#1D6205] text-center"
                            >
                                Blog
                            </Link>
                            <Link
                                to="/contact-us"
                                className="block md:inline py-2 md:py-0 text-black hover:text-[#1D6205] text-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Hamburger Menu Icon */}
                    <button
                        className="md:hidden text-black z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
