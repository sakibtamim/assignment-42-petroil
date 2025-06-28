import React from "react";

const Service = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center">
        <div className="w-1/2 flex justify-end">
          <div className="w-4/12  mr-[149px]">
            <div className=" ">
              <h2 className="text-[64px]  font-poppins text-block font-bold">
                Our Services
              </h2>
              <p className="text-[16px]  font-poppins text-[#6C6C6C] font-medium">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-1/2 bg-cover bg-center flex justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/servicebg01.png')`,
          }}
        >
          <div className=" pt-[147px] pb-[139px] ">
            <div className="w-full">
              <h1 className="lg:text-[36px] font-poppins text-white font-bold pb-[19px]">
                Modern natural oil and gas
              </h1>
              <a
                href="#"
                className="py-[14px] px-[30px] bg-[#F40404] text-white font-semibold  font-poppins"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div
          className="w-1/2 bg-cover bg-center flex justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/servicebg02.png')`,
          }}
        >
          <div className=" pt-[147px] pb-[139px] ">
            <div className="w-full">
              <h1 className="lg:text-[36px] font-poppins text-white font-bold pb-[19px]">
                Supply of national industries.
              </h1>
              <a
                href="#"
                className="py-[14px] px-[30px] bg-[#F40404] text-white font-semibold  font-poppins"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div
          className="w-1/2 bg-cover bg-center flex justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/servicebg03.png')`,
          }}
        >
          <div className=" pt-[147px] pb-[139px] ">
            <div className="w-full">
              <h1 className="lg:text-[36px] font-poppins text-white font-bold pb-[19px]">
                National fuel distribution and supply.
              </h1>
              <a
                href="#"
                className="py-[14px] px-[30px] bg-[#F40404] text-white font-semibold  font-poppins"
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
