import React from "react";
import Container from "./Container";

const Wellcome = () => {
  return (
    <div className="py-[50px]">
      <Container>
        <div className=" flex items-center">
          <div className="w-4/12">
            <h4 className="text-[#000] font-popps font-bold text-[48px] pr-[50px]">
              The biggest supplier on the country
            </h4>
          </div>
          <div className="w-1/12"></div>
          <div className=" w-7/12 ">
            <div>
              <p className="text-[#6C6C6C] font-popps font-medium text-[16px]">
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
