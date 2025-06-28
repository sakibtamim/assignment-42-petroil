import React from "react";
import Container from "./Container";
import BrandLogo01 from "../assets/brandlogo01.png";
import BrandLogo02 from "../assets/brandlogo02.png";
import BrandLogo03 from "../assets/brandlogo03.png";
import BrandLogo04 from "../assets/brandlogo04.png";

const BrandLogo = () => {
  return (
    <div className="py-[116px]">
      <Container>
        <div className="flex gap-6.5">
          <div className="w-1/4">
            <img src={BrandLogo01} alt="" className="w-full" />
          </div>
          <div className="w-1/4">
            <img src={BrandLogo02} alt="" className="w-full" />
          </div>
          <div className="w-1/4">
            <img src={BrandLogo03} alt="" className="w-full" />
          </div>
          <div className="w-1/4">
            <img src={BrandLogo04} alt="" className="w-full" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BrandLogo;
