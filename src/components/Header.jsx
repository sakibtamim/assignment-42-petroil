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
    <header className="bg-headerColor py-4 border-b-[5px] border-[#FFB800]">
      <Container>
        <div className="flex items-center">
          <div className="w-3/12">
            <div className="flex items-center">
              <IoMailUnreadOutline className="text-white mr-[5px] text-[20px]" />
              <p className="text-white text-[12px] font-poppins font-normal">
                mail@yourcompany.com
              </p>
            </div>
          </div>
          <div className="w-3/12">
            <div className="flex items-center">
              <LuPhoneCall className="text-white mr-[5px] text-[20px]" />
              <p className="text-white text-[12px] font-poppins font-normal">
                +896 120 5889 (Toll free)
              </p>
            </div>
          </div>
          <div className="w-6/12">
            <div className="flex justify-end gap-5">
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
