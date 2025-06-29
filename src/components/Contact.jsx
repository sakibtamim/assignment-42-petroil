import React from "react";
import Container from "./Container";

const Contact = () => {
  return (
    <div className="lg:py-[47px] py-[26px] bg-menuBgColor border-b-4 border-[#FFB800]">
      <Container>
        <div className="flex items-center ">
          <div className="w-9/12">
            <h3 className="lg:font-bold font-semibold font-poppins lg:text-[36px] text-[14px] text-white">
              Want to join as member branch in your area?
            </h3>
          </div>
          <div className="w-3/12">
            <div className=" flex justify-end">
              <a
                href="#"
                className="font-poppins text-white lg:py-[14px] lg:px-[32px] py-[6px] px-[10px] lg:border-2 border-1 lg:text-[16px] text-[12px] border-white"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
