import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Container from "./Container";
import { IoMenu, IoCloseOutline } from "react-icons/io5";

const Menu = () => {
  const [show, setShow] = useState(false);

  let handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="bg-menuBgColor">
      <Container>
        <div className="flex items-center py-7">
          <div className="w-4/12">
            <img src={Logo} alt="" />
          </div>
          <div className="w-8/12">
            <ul
              className={`lg:flex justify-end lg:static lg:py-0 py-2 duration-300 ease-in-out ${
                show == true
                  ? "bg-headerBgColor absolute left-0 top-[206px] w-full"
                  : " absolute left-[-1000px] top-[206px] w-full"
              }`}
            >
              <li>
                <a
                  className="text-white lg:text-[16px] text-[14px] lg:font-semibold font-medium font-poppins lg:px-6 lg:py-3.5 inline-block px-5 py-2"
                  href=""
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  className="text-white lg:text-[16px] text-[14px] lg:font-semibold font-medium font-poppins lg:px-6 lg:py-3.5 inline-block px-5 py-2"
                  href=""
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="text-white lg:text-[16px] text-[14px] lg:font-semibold font-medium font-poppins lg:px-6 lg:py-3.5 inline-block px-5 py-2"
                  href=""
                >
                  Service
                </a>
              </li>

              <li>
                <a
                  className="text-white lg:text-[16px] text-[14px] lg:font-semibold font-medium font-poppins lg:px-6 lg:py-3.5 inline-block px-5 py-2"
                  href=""
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  className="text-white lg:text-[16px] text-[14px] lg:font-semibold font-medium font-poppins lg:px-6 lg:py-3.5 inline-block px-5 py-2"
                  href=""
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  className="text-white lg:text-[16px] text-[14px] lg:font-semibold font-medium font-poppins lg:px-7.5 lg:py-3.5 border-2 border-white lg:ml-12 ml-4 lg:my-0 my-2 inline-block px-4 py-2"
                  href=""
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:hidden " onClick={handleShow}>
            {show ? (
              <IoCloseOutline className="text-[34px]  text-headerBgColor" />
            ) : (
              <IoMenu className="text-[34px] text-headerBgColor" />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
