import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img src="images/Logo.jpg" alt="College Logo" className="h-24 w-auto mb-2" />
          <p className="text-sm">&copy; {new Date().getFullYear()} Atal Bihari College</p>
        </div>

        {/* Contact Us Section */}
        <div className="text-center md:text-left text-sm leading-6">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>ATAL BEHARI COLLEGE</p>
          <p>BASUDEVPUR, BHADRAK</p>
          <p>ODISHA-756125</p>
          <p>
            <a href="http://www.abcollegebasudevpur.org.in" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
              www.abcollegebasudevpur.org.in
            </a>
          </p>
          <p>Email: <a href="mailto:abcollege@gmail.com" className="text-blue-400 hover:underline">abcollege@gmail.com</a></p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.facebook.com/abcollege1963?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/abcollege_1963?igsh=dGE3c2NscXd2MzJi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/@a.b.college?si=ZvzhbyG6FyNwq-K3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
