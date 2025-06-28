import React from "react";
import Gallery01 from "../assets/gallery01.png";
import Gallery02 from "../assets/gallery02.png";
import Gallery03 from "../assets/gallery03.png";
import Gallery04 from "../assets/gallery04.png";

const Gallery = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between pb-10">
        <div className="w-3/12">
          <div className="w-[98%]">
            <img src={Gallery01} className="w-full" alt="" />
          </div>
        </div>
        <div className="w-3/12 flex justify-center">
          <div className="w-[98%]">
            <img src={Gallery02} className="w-full" alt="" />
          </div>
        </div>
        <div className="w-3/12 flex justify-center">
          <div className="w-[98%]">
            <img src={Gallery03} className="w-full" alt="" />
          </div>
        </div>
        <div className="w-3/12 flex justify-end">
          <div className="w-[98%] ">
            <img src={Gallery04} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
