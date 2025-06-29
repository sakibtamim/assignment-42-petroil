import React from "react";

const Service = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center px-2 gap-2 lg:gap-0">
        <div className="lg:w-1/2 w-[48%]   flex lg:justify-end ">
          <div className="lg:w-4/12  lg:mr-[149px] w-full">
            <div className=" ">
              <h2 className="lg:text-[64px] text-[18px]  font-poppins text-block font-medium">
                Our Services
              </h2>
              <p className="lg:text-[16px] text-[10px]  font-poppins text-[#6C6C6C] font-medium">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-[48%] bg-cover bg-center lg:pl-[116px] pl-[10px]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/servicebg01.png')`,
          }}
        >
          <div className=" lg:pt-[147px]  lg:pb-[139px] py-[50px]">
            <div className="w-full">
              <h1 className="lg:text-[36px] text-[12px]  font-poppins text-white lg:font-bold font-medium pb-[19px]">
                Modern natural oil and gas
              </h1>
              <a
                href="#"
                className="lg:text-[16px] text-[10px] lg:py-[14px] py-[6px] lg:px-[30px] px-[8px] bg-[#F40404] text-white font-semibold  font-poppins"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-[48%] bg-cover bg-center lg:pl-[116px] pl-[10px]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/servicebg02.png')`,
          }}
        >
          <div className=" lg:pt-[147px]  lg:pb-[139px] py-[50px] ">
            <div className="w-full">
              <h1 className="lg:text-[36px] text-[12px]  font-poppins text-white lg:font-bold font-medium pb-[19px]">
                Supply of national industries.
              </h1>
              <a
                href="#"
                className="lg:text-[16px] text-[10px] lg:py-[14px] py-[6px] lg:px-[30px] px-[8px] bg-[#F40404] text-white font-semibold  font-poppins"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-[48%] bg-cover bg-center lg:pl-[116px] pl-[10px]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/servicebg03.png')`,
          }}
        >
          <div className=" lg:pt-[147px]  lg:pb-[139px] py-[50px] ">
            <div className="w-full">
              <h1 className="lg:text-[36px] text-[12px]  font-poppins text-white lg:font-bold font-medium pb-[19px]">
                National fuel distribution and supply.
              </h1>
              <a
                href="#"
                className="lg:text-[16px] text-[10px] lg:py-[14px] py-[6px] lg:px-[30px] px-[8px] bg-[#F40404] text-white font-semibold  font-poppins"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
