import React from "react";
import Container from "./Container";
import BannerBg from "../assets/bannerbg.png";

const Banner = () => {
  return (
    <div
      className=" relative bg-cover bg-center bg-no-repeat py-64 "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BannerBg})`,
      }}
    >
      <Container>
        <div className="w-9/12 ">
          <h1 className="text-[64px] font-bold font-poppins text-white pb-7.5">
            We exist since 1975 on the oil and gas industry.
          </h1>
          <a
            className=" inline-block text-[16px] font-semibold font-poppins text-white bg-[#F40404] px-10 py-3.5"
            href=""
          >
            LEARN MORE
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
