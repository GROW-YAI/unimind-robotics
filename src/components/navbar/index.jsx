import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // User scrolled down
        setHasScrolled(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/our-product", label: "Product & Services" },
    { path: "/education&resources", label: "Education & Resources" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav>
      <div
        className={`bg-white shadow-md fixed top-0 left-0 w-full z-50 transform transition-transform duration-500 ${
          hasScrolled ? "translate-y-0" : "translate-y-0"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4 px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center bg-white">
            <img src={logo} alt="company-logo" className="h-16 sm:h-20" />
          </div>

          {/* Navigation Links */}
          <div
            ref={menuRef}
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row md:items-center absolute md:static top-20 right-0 bg-white md:bg-transparent shadow-md md:shadow-none rounded-md md:rounded-none w-3/4 md:w-auto z-40 p-4 md:p-0`}
          >
            <div className="flex flex-col md:flex-row md:space-x-8 md:ml-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block md:inline py-2 md:py-0 text-center ${
                    location.pathname === link.path
                      ? "text-[#3943F7] font-semibold"
                      : "text-black hover:text-[#3943F7]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
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
