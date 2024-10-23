import React from "react";

const Section7 = () => {
  return (
    <div
      className="sm:h-screen h-100vh sm:py-0 py-16 mx-auto container sm:flex block justify-center items-center space-x-28"
      id="section7"
    >
      <div>
        <img
          src="/landing-page/phone.png"
          alt="phone"
          className="sm:hidden block w-[300px] mx-auto mt-10"
        />
        <h1 className="font-bold sm:text-2xl text-lg uppercase text-indigo-500 mb-2 sm:mx-0 mx-4">
          харилцагчийн
        </h1>
        <h1 className="uppercase font-bold text-4xl mb-5 sm:mx-0 mx-4">
          аппликэйшн
        </h1>
        <p className="text-sm sm:w-[450px] w-[400px] text-start mb-20 sm:mx-0 mx-4">
          Харилцагч та Ebuuhia.mn хүргэлтийн цогц системийг ашиглан хүргэлтээ
          хаана явааг хянах, захиалга өгөх, агуулахын барааны тоогоо бүртгэн,
          тайлан тооцоогоо нийлэх боломжтой. Та өөрийн утсанд тохируулан
          AppStore, GooglePlay-с сонгон татаж аваарай.
        </p>
        <div className="flex justify-between">
          <div className="space-y-6 cursor-pointer">
            <div className="flex space-x-4 items-center justify-center">
              <img src="/landing-page/playStore.png" alt="playStore" />
              <div className="">
                <p className="text-sm">GET IN ON</p>
                <p className="text-md font-bold">Google Play</p>
              </div>
            </div>
            <img src="/landing-page/googleQR.png" alt="googleQr" />
          </div>
          <div className="space-y-6 cursor-pointer">
            <div className="flex space-x-4 items-center justify-center">
              <img src="/landing-page/appStore.png" alt="appStore" />
              <div className="">
                <p className="text-sm">GET IN ON</p>
                <p className="text-md font-bold">App Store</p>
              </div>
            </div>
            <img src="/landing-page/appQr.png" alt="appQr" />
          </div>
        </div>
      </div>
      <div className="">
        <img
          src="/landing-page/phone.png"
          alt="phone"
          className="sm:block hidden md:w-[450px] 2xl:w-[500px]"
        />
      </div>
    </div>
  );
};

export default Section7;
