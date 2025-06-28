import React from "react";
import Container from "./Container";

const Banner = () => {
  return (
    <div
      className={`relative bg-[url(../../public/bannerbg.png)] bg-cover bg-center bg-no-repeat lg:py-64 py-10 `}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/bannerbg.png')`,
      }}
    >
      <Container>
        <div className="w-9/12  pl-4 lg:pl-0">
          <h1 className="lg:text-[64px] text-[16px] font-bold font-poppins text-white lg:pb-7.5 pb-3.5">
            We exist since 1975 on the oil and gas industry.
          </h1>
          <a
            className=" inline-block lg:text-[16px] text-[8px] lg:font-semibold font-normal font-poppins text-white bg-[#F40404] lg:px-10 lg:py-3.5 px-3 py-1"
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
