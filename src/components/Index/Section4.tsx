import React from "react";

const Section4 = () => {
  return (
    <div className="flex bg-blue-50" id="section4">
      <div className="relative mt-20 ml-20 scale-100 hover:scale-75 translate-x-72 duration-200">
        <img
          src="https://portal.num.edu.mn/img/num-new/library.jpg"
          alt=""
          className="w-[800px] rela shadow-inner opacity-100"
        />
        <div className="absolute border-t-[1.2px] border-l-[1.2px] w-60 h-60 border-white top-6 left-6"></div>
        <div className="text-[35px] left-[60px] text-white font-bold z-50 absolute top-[60px] text-xl">
          <p>МУИС-ИЙН ОЮУТАН</p>
          <p className="text-[#feb902] mt-4">МОНГОЛЫН ИРЭЭДҮЙ</p>
        </div>
        <div className="absolute border-b-[1.2px] border-r-[1.2px] w-60 h-60 border-white bottom-6 right-6">
          1
        </div>
      </div>
    </div>
  );
};

export default Section4;
