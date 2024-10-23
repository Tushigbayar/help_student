import { useRouter } from "next/router";
import React from "react";

const Section1 = () => {
  const router = useRouter();
  return (
    <div className="relative" id="section1">
      <img
        src="/muis-image.jpg"
        alt="home"
        className="w-full 2xl:h-[797px] h-[615px] object-cover bg-center"
      />
      <div className="absolute sm:flex justify-between items-center top-0 sm:bg-gradient-to-l bg-gradient-to-b from-gray-200 from-50% via-gray-200 via-10% 2xl:h-[797px] h-[615px] w-full">
        <div className="mx-auto text-center sm:text-start">
          <img
            src="/landing-page/frame.png"
            alt="frame"
            className="sm:hidden flex mx-auto my-8 2xl:w-[700px] w-[300px] sm:w-[600px]"
          />
          <div className="mb-16 space-y-6">
            <p className="uppercase 2xl:text-4xl text-2xl sm:text-3xl font-bold">
              Хүргэлтийн
              <br />
              <span className="uppercase text-[#0053AD]">
                асуудлаа
              </span> бидэнд{" "}
              <span className="uppercase text-[#0053AD]">даатга</span>
            </p>
            <p className="text-sm 2xl:text-lg sm:text-lg">
              Та дараах товч дээр дарж хүргэлтээ хаана <br /> байгааг шалгах
              боломжтой.
            </p>
          </div>
        </div>
        <div className="mx-auto">
          <img
            src="/landing-page/frame.png"
            alt="frame"
            className="sm:block hidden 2xl:w-[700px] w-[300px] sm:w-[600px]"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="absolute bottom-[-35px] sm:bottom-[-65px] bg-white rounded-xl shadow-xl sm:w-[696px] sm:h-[128px] h-[65px] w-[350px] flex justify-center items-center ">
          <div className="flex space-x-3 mr-4 sm:mr-20 ">
            <img
              src="/landing-page/user.png"
              alt="user"
              className="sm:w-12 w-8 sm:h-12 h-8"
            />
            <div className="text-xs sm:text-sm">
              <p className="font-bold">10 000+</p>
              <p>Харилцагч</p>
            </div>
          </div>
          <div className="flex space-x-3 mr-4 sm:mr-20">
            <img
              src="/landing-page/map.png"
              alt="user"
              className="sm:w-12 w-8 sm:h-10 h-8"
            />
            <div className="text-xs sm:text-sm">
              <p className="font-bold">30+</p>
              <p>Бүсчлэл</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <img
              src="/landing-page/send.png"
              alt="user"
              className="sm:w-12 w-8 sm:h-12 h-8"
            />
            <div className="text-xs sm:text-sm">
              <p className="font-bold">1 000+</p>
              <p>Хүргэлт</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
