import React from "react";
import Container from "./Container";

const LearnAbout = () => {
  return (
    <div className="bg-learnAboutBg">
      <Container>
        <div className="flex py-[136px]">
          <div className="w-4/12">
            <div className="pt-[100px] pb-[99px] px-[73px] bg-menuBgColor">
              <h3 className="text-[36px] font-poppins text-white font-bold">
                Learn more about our company
              </h3>
            </div>
          </div>
          <div className="w-8/12">
            <div className="bg-[url(/aboutcom.png)] py-[168px] text-center  bg-center bg-cover">
              <a
                href="#"
                className="py-[14px] bg-white px-[30px] text-[16px] font-poppins text-[#F40404] font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LearnAbout;
