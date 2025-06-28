import React from "react";
import Container from "./Container";
import FooterLogo from "../assets/footerlogo.png";
import FooterCertificate01 from "../assets/footercer01.png";
import FooterCertificate02 from "../assets/footercer02.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { LuMapPinned } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <div className="py-[129px] bg-footerBgColor">
        <Container>
          <div className="flex">
            <div className="w-5/12 ">
              <div className="pb-[33px]">
                <img src={FooterLogo} alt="" />
              </div>
              <ul>
                <div className="flex items-center">
                  <MdOutlineMailLock className="text-[20px] text-white" />
                  <li>
                    <a
                      href="#"
                      className="font-poppins text-white font-normal pl-[5px] text-[14px]"
                    >
                      mail@yourcompany.com
                    </a>
                  </li>
                </div>
                <div className="flex items-center py-[15px]">
                  <FiPhoneCall className="text-[20px] text-white" />
                  <li>
                    <a
                      href="#"
                      className="font-poppins text-white font-normal pl-[5px] text-[14px]"
                    >
                      +896 120 5889 (Toll free)
                    </a>
                  </li>
                </div>
                <div className="flex items-center">
                  <LuMapPinned className="text-[20px] text-white" />
                  <li>
                    <a
                      href="#"
                      className="font-poppins text-white font-normal pl-[5px] text-[14px]"
                    >
                      101 Baker Street, New York, USA, 12345
                    </a>
                  </li>
                </div>
              </ul>
              <div className="flex pt-[30px] gap-[12px]">
                <a
                  href="#"
                  className="p-[7px] bg-menuBgColor rounded-full text-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="p-[7px] bg-menuBgColor rounded-full text-white"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="p-[7px] bg-menuBgColor rounded-full text-white"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="p-[7px] bg-menuBgColor rounded-full text-white"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="w-2/12 pt-[30px]">
              <div className="">
                <h3 className="pb-[15px] text-white font-poppins font-bold text-[16px] ">
                  Company
                </h3>
                <ul>
                  <li className="pb-[15px]">
                    <a
                      href="#"
                      className="font-poppins font-normal text-[14px] text-white "
                    >
                      Home
                    </a>
                  </li>
                  <li className="pb-[15px]">
                    <a
                      href="#"
                      className="font-poppins font-normal text-[14px] text-white"
                    >
                      About
                    </a>
                  </li>
                  <li className="pb-[15px]">
                    <a
                      href="#"
                      className="font-poppins font-normal text-[14px] text-white"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-poppins font-normal text-[14px] text-white"
                    >
                      Gallery
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-2/12 pt-[30px]">
              <div className="">
                <h3 className="pb-[15px] text-white font-poppins font-bold text-[16px] ">
                  Others
                </h3>
                <ul>
                  <li className="pb-[15px]">
                    <a
                      href="#"
                      className="font-poppins font-normal text-[14px] text-white "
                    >
                      Blog
                    </a>
                  </li>
                  <li className="pb-[15px]">
                    <a
                      href="#"
                      className="font-poppins font-normal text-[14px] text-white"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="pb-[15px]">
                    <a
                      href="#"
                      className="font-poppins font-normal text-[14px] text-white"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-poppins font-normal text-[14px] text-white"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-3/12 pt-[30px] lg:pl-[60px]">
              <div className="">
                <h3 className="pb-[15px] font-poppins font-bold text-[16px] text-white">
                  Certificate
                </h3>
                <div className="flex justify-between gap-[5px]">
                  <div className="">
                    <img src={FooterCertificate01} alt="" />
                  </div>
                  <div className="">
                    <img src={FooterCertificate02} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-footerBtmBgColor">
        <Container>
          <div className="w-full ">
            <p className="py-[42px] text-[#6C6C6C] font-poppins font-medium">
              © Copyright 2022 by AltDesain Studio – All right reserved.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
