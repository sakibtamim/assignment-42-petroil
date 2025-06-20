import React from "react";
import Logo from "../assets/logo.png";
import Container from "./Container";

const Menu = () => {
  return (
    <div className="bg-menuBgColor">
      <Container>
        <div className="flex items-center py-7">
          <div className="w-4/12">
            <img src={Logo} alt="" />
          </div>
          <div className="w-8/12">
            <ul className="flex justify-end">
              <li>
                <a
                  className="text-white text-[16px] font-semibold font-poppins px-6"
                  href=""
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  className="text-white text-[16px] font-semibold font-poppins px-6"
                  href=""
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="text-white text-[16px] font-semibold font-poppins px-6"
                  href=""
                >
                  Service
                </a>
              </li>

              <li>
                <a
                  className="text-white text-[16px] font-semibold font-poppins px-6"
                  href=""
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  className="text-white text-[16px] font-semibold font-poppins px-6"
                  href=""
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  className="text-white text-[16px] font-semibold font-poppins px-7.5 py-3.5 border-2 border-white ml-12"
                  href=""
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
