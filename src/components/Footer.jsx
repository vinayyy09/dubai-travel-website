import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-black text-gray-300 py-2 px-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-gray-600 py-8 pl-12">
        <div>
          <h6 className="font-bold uppercase py-2">Follow Us</h6>
          <ul>
            <li className="py-1 flex">
              <FaFacebook size={25} className="p-1 text-blue-700" /> Facebook
            </li>
            <li className="py-1 flex">
              <FaInstagram size={25} className="p-1 text-pink-700" /> Instagram
            </li>
            <li className="py-1 flex">
              <FaTwitter size={25} className="p-1 text-blue-500" /> Twitter
            </li>
            <li className="py-1 flex">
              <TiSocialPinterest size={30} className="text-red-600" /> Pinterest
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase py-2">Contact Us</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Refunds</li>
            <li className="py-1">Policies</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase py-2">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase py-4">Information</h6>
          <ul>
            <li className="py-1">Media</li>
            <li className="py-1">Cookies</li>
            <li className="py-1">Settings</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto sm:flex-row text-center text-gray-500">
        <p className="py-4">2023 Destintions, LLC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
