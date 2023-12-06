import React from "react";
import Image from "next/image";
import logo from '../assets/pfms.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/5">
          <div className="mb-4">
            <Image src={logo} alt="Logo" width={200} className="rounded-[50%]" height={200} />
          </div>
          <p className="text-sm">
          ⚡ Your trusted partner for electrical maintenance and services 👷🏻
          </p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Manpower Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Product Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Electrical Installation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Maintenance Contracts
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Request a Quote
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-xl">
              <i className="fab fa-facebook-square hover:text-blue-300"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-twitter-square hover:text-blue-400"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-linkedin hover:text-blue-500"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
