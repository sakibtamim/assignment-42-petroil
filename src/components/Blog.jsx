import React from "react";
import Container from "./Container";
import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {
  return (
    <div className="lg:py-[100px] py-[50px] bg-learnAboutBg">
      <Container>
        <div className="lg:flex  ">
          <div className="lg:w-4/12 lg:justify-start flex justify-center mb-4 lg:mb-0">
            <div
              className="pt-[75px]  pb-[55px]  pl-[46px]  pr-[44px]   bg-center bg-cover w-[90%]"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/blogbg01.png')`,
              }}
            >
              <h4 className="lg:text-[24px] text-[16px] lg:pb-[50px] pb-[30px] font-poppins text-white font-bold">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h4>
              <a
                href="#"
                className="lg:py-[10px] lg:px-[20px] py-[6px] px-[10px] bg-blogBtnColor  lg:text-[12px] text-[10px] font-poppins text-white font-medium"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="lg:w-4/12 flex justify-center mb-4 lg:mb-0">
            <div
              className="pt-[75px]  pb-[55px]  pl-[46px]  pr-[44px]   bg-center bg-cover w-[90%]"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/blogbg02.png')`,
              }}
            >
              <h4 className="lg:text-[24px] text-[16px] lg:pb-[50px] pb-[30px] font-poppins text-white font-bold">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h4>
              <a
                href="#"
                className="lg:py-[10px] lg:px-[20px] py-[6px] px-[10px] bg-blogBtnColor  lg:text-[12px] text-[10px] font-poppins text-white font-medium"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="lg:w-4/12 flex lg:justify-end justify-center">
            <div
              className=" pt-[75px]  pb-[55px]  pl-[46px]  pr-[44px]   bg-center bg-cover w-[90%]"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/blogbg03.png')`,
              }}
            >
              <h4 className="lg:text-[24px] text-[16px] lg:pb-[50px] pb-[30px] font-poppins text-white font-bold">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h4>
              <a
                href="#"
                className="lg:py-[10px] lg:px-[20px] py-[6px] px-[10px] bg-blogBtnColor  lg:text-[12px] text-[10px] font-poppins text-white font-medium"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:justify-end flex justify-center items-center pt-[29px]">
          <a
            href=""
            className="lg:text-[16px] text-[10px] font-poppins text-black font-semibold"
          >
            MORE FROM THE BLOG
          </a>
          <IoIosArrowForward className="lg:text-[22px] text-[14px] text-black font-bold" />
        </div>
      </Container>
    </div>
  );
};

export default Blog;
