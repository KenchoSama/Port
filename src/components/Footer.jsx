import React from "react";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src={''} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/KenLopezMartinez/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity duration-300"
            >
              <img src={navIcon1} alt="LinkedIn" className="h-8 w-8" />
            </a>
            <a
              href="https://github.com/KenchoSama"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity duration-300"
            >
              <img src={navIcon2} alt="GitHub" className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/kendoll.a.l.m/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity duration-300"
            >
              <img src={navIcon3} alt="Instagram" className="h-8 w-8" />
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-white text-sm text-center md:text-right">
            Production of Ken Lopez
          </p>
        </div>
      </div>
    </footer>
  );
};
