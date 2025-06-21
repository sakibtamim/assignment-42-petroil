import React from "react";
import Container from "./Container";
import { IoMailUnreadOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-headerBgColor py-4 border-b-[5px] border-[#FFB800]">
      <Container>
        <div className="lg:flex items-center">
          <div className="w-full lg:w-3/12">
            <div className="flex items-center justify-center lg:justify-start">
              <IoMailUnreadOutline className="text-white mr-[8px] text-[20px]" />
              <p className="text-white text-[12px] font-poppins font-normal">
                mail@yourcompany.com
              </p>
            </div>
          </div>
          <div className="w-full lg:w-3/12 py-3 lg:py-0">
            <div className="flex items-center justify-center lg:justify-start">
              <LuPhoneCall className="text-white mr-[8px] text-[20px]" />
              <p className="text-white text-[12px] font-poppins font-normal">
                +896 120 5889 (Toll free)
              </p>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="flex lg:justify-end gap-5 justify-center ">
              <FaFacebookF className="text-white text-[16px]" />
              <FaTwitter className="text-white text-[16px]" />
              <FaLinkedinIn className="text-white text-[16px]" />
              <FaInstagram className="text-white text-[16px]" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
