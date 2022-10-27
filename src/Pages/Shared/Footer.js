import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from '../../Assets/programmer.png'

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-teal-800 text-gray-100">
      <div className="container flex flex-col justify-between py-7 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link
            to="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <img className="h-12 w-12" src={img} alt="" />
            <span className="self-center text-2xl font-semibold text-blue-500 uppercase">
              Fancy<span className="text-orange-500">Coder</span>
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-50">Courses</h3>
            <ul className="space-y-1">
              <li>
                <Link  to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link  to="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-50">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link  to="/">
                  Privacy
                </Link>
              </li>
              <li>
                <Link  to="/">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-gray-50">Developers</h3>
            <ul className="space-y-1">
              <li>
                <Link  to="/">
                  Public API
                </Link>
              </li>
              <li>
                <Link  to="/">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-gray-50">Social media</div>
            <div className="flex justify-start space-x-3">
              <Link
                to="/"
                title="Facebook"
                className="flex items-center p-1"
              >
                <FaFacebook></FaFacebook>
              </Link>
              <Link
                to="/"
                title="Twitter"
                className="flex items-center p-1"
              >
                <FaTwitter></FaTwitter>
              </Link>
              <Link
                to="/"
                title="Instagram"
                className="flex items-center p-1"
              >
               <FaInstagram></FaInstagram>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 text-sm text-center text-gray-400">
        © 2022 Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
