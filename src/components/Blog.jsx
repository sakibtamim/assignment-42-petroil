import React from "react";
import Container from "./Container";
import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {
  return (
    <div className="py-[100px] bg-learnAboutBg">
      <Container>
        <div className="flex">
          <div className="w-4/12">
            <div
              className="pt-[75px] pb-[55px] pl-[46px] pr-[44px]  bg-center bg-cover w-[90%]"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/blogbg01.png')`,
              }}
            >
              <h4 className="text-[24px] pb-[50px] font-poppins text-white font-bold">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h4>
              <a
                href="#"
                className="py-[10px] px-[20px] bg-blogBtnColor  text-[12px] font-poppins text-white font-semibold"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="w-4/12 flex justify-center">
            <div
              className="w-[90%] pt-[75px] pb-[55px] pl-[46px] pr-[44px]  bg-center bg-cover"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/blogbg02.png')`,
              }}
            >
              <h4 className="text-[24px] pb-[50px] font-poppins text-white font-bold">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h4>
              <a
                href="#"
                className="py-[10px] px-[20px] bg-blogBtnColor text-[12px] font-poppins text-white font-semibold"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="w-4/12 flex justify-end">
            <div
              className=" w-[90%] pt-[75px] pb-[55px] lg:pl-[46px] pr-[44px]  bg-center bg-cover"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/blogbg03.png')`,
              }}
            >
              <h4 className="lg:text-[24px] pb-[50px] font-poppins text-white font-bold">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h4>
              <a
                href="#"
                className="py-[10px] px-[20px] bg-blogBtnColor text-[12px] font-poppins text-white font-semibold"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="w-full justify-end flex pt-[29px]">
          <h4 className="text-[16px] font-poppins text-black font-bold">
            MORE FROM THE BLLOG
          </h4>
          <IoIosArrowForward className="text-[24px] text-black font-bold" />
        </div>
      </Container>
    </div>
  );
};

export default Blog;
