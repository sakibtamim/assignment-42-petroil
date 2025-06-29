import React from "react";
import Gallery01 from "../assets/gallery01.png";
import Gallery02 from "../assets/gallery02.png";
import Gallery03 from "../assets/gallery03.png";
import Gallery04 from "../assets/gallery04.png";

const Gallery = () => {
  return (
    <section className="w-full px-2">
      <div className="flex flex-wrap justify-between lg:pb-10 pb-5 gap-1.5">
        <div className="lg:w-[24%] w-[49%]">
          <div className="w-[100%]">
            <img src={Gallery01} className="w-full" alt="" />
          </div>
        </div>
        <div className="lg:w-[24%] w-[49%] ">
          <div className="w-[100%]">
            <img src={Gallery02} className="w-full" alt="" />
          </div>
        </div>
        <div className="lg:w-[24%] w-[49%] ">
          <div className="w-[100%]">
            <img src={Gallery03} className="w-full" alt="" />
          </div>
        </div>
        <div className="lg:w-[24%] w-[49%]">
          <div className="w-[100%] ">
            <img src={Gallery04} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
