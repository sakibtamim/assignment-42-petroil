import React from "react";
import Container from "./Container";

const Wellcome = () => {
  return (
    <div className="lg:py-[50px] py-[20px]">
      <Container>
        <div className=" lg:flex items-center">
          <div className="lg:w-5/12 w-full">
            <h4 className="text-[#000] font-poppins font-bold lg:text-[48px] text-[20px] lg:pr-[150px] lg:pb-0 pb-[8px]">
              The biggest supplier on the country
            </h4>
          </div>

          <div className=" lg:w-7/12 w-full">
            <div>
              <p className="text-[#6C6C6C] font-poppins font-medium lg:text-[16px] text-[12px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Wellcome;
