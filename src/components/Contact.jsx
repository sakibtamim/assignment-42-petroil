import React from "react";
import Container from "./Container";

const Contact = () => {
  return (
    <div className="py-[47px] bg-menuBgColor border-b-4 border-[#FFB800]">
      <Container>
        <div className="flex items-center ">
          <div className="w-9/12">
            <div className="">
              <h3 className="font-bold font-poppins text-[36px] text-white">
                Want to join as member branch in your area?
              </h3>
            </div>
          </div>
          <div className="w-3/12">
            <div className=" flex justify-end">
              <a
                href="#"
                className="font-poppins text-white py-[14px] px-[32px] border-2 border-white"
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
