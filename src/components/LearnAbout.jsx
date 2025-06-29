import React from "react";
import Container from "./Container";

const LearnAbout = () => {
  return (
    <div className="bg-learnAboutBg">
      <Container>
        <div className="flex items-center lg:py-[136px] py-[50px]">
          <div className="lg:w-4/12 w-1/3 ">
            <div className="lg:pt-[100px] lg:pb-[99px] lg:px-[73px] px-[10px] py-[56px]  bg-menuBgColor">
              <h3 className="lg:text-[36px] text-[16px] font-poppins text-white font-medium">
                Learn more about our company
              </h3>
            </div>
          </div>
          <div className="lg:w-8/12 w-2/3">
            <div className="bg-[url(/aboutcom.png)] lg:py-[168px] py-[80px] text-center  bg-center bg-cover">
              <a
                href="#"
                className="lg:py-[14px] py-[6px] bg-white lg:px-[30px] px-[10px] lg:text-[16px] text-[10px] font-poppins text-[#F40404] font-semibold"
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
