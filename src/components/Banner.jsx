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
        <div className="w-10/12 ">
          <h1 className="text-[64px] font-bold font-poppins text-white ">
            We exist since 1975 on the oil and gas industry.
          </h1>
        </div>
        <div className="w-2/12 mt-7.5">
          <a
            className=" text-[16px] font-semibold font-poppins text-white bg-[#F40404] px-10 py-3.5"
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
