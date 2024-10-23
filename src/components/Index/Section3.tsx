import React from "react";

const Section3 = () => {
  return (
    <div className="sm:flex block justify-between items-center h-[330px] sm:pt-0 pt-14 bg-[#0053AD] relative">
      <img
        src="/muis-image2.jpg"
        alt="process"
        className="sm:block hidden h-full w-full"
      />
      <div className="space-y-2 mx-auto text-center">
        {/* <p className="text-white font-bold text-xl">ТАНИЛЦУУЛГА ТАТАХ</p> */}
        {/* <div className="flex justify-center">
          <button className="flex items-center justify-center rounded-full text-[#0053AD] bg-white py-2 px-5">
            <img
              src="/landing-page/download.png"
              alt="download"
              className="mr-2"
            />
            Татах
          </button> */}
        {/* </div> */}
      </div>
      <img
        src="/landing-page/image.svg"
        alt="process"
        className="sm:hidden block"
      />
    </div>
  );
};

export default Section3;
