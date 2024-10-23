import React from "react";

const Section6 = () => {
  return (
    <div className="h-100vh bg-blue-50" id="section6">
      <div className="mx-auto container py-28 relative">
        <h1 className="font-bold text-2xl text-center mb-28">
          Үйл ажиллагааны загвар
        </h1>
        <div className="sm:flex justify-center items-center sm:space-x-10 space-x-0 sm:pt-0 pt-12">
          <div>
            <img
              src="/landing-page/diagram-mobile.svg"
              alt=""
              className="sm:hidden flex absolute left-5 top-48"
            />
          </div>
          <div className="sm:space-y-28 space-y-8 mt-[-130px] sm:text-right text-left sm:pl-0 pl-16">
            <div className=" space-y-3">
              <span className="font-semibold sm:text-4xl text-2xl ">01</span>
              <h1 className="text-[#0053AD] font-semibold text-xl">
                Захиалга авах
              </h1>
              <p className="sm:w-[360px] w-[300px] sm:text-sm text-xs">
                Өдөр бүрийн 21:00 цаг хүртэл харилцагчаас ebuuhia@gmail.com, FB
                page, Ebuuhia.mn зэрэг сувгуудаар маргаашийн хүргэлтийн
                захиалгуудыг авна.
              </p>
            </div>
            <div className=" space-y-3">
              <span className="font-semibold sm:text-4xl text-2xl">03</span>
              <h1 className="text-[#0053AD] font-semibold text-xl">Агуулах</h1>
              <p className="sm:w-[360px] w-[300px] sm:text-sm text-xs">
                23:00 - 02:00 цагийн хооронд бараа илгээмжүүдийг агуулахад
                авчирч ялган ангилна.
              </p>
            </div>
            <div className="space-y-3">
              <span className="font-semibold sm:text-4xl text-2xl">05</span>
              <h1 className="text-[#0053AD] font-semibold text-xl">
                Хүргэлт дуусах
              </h1>
              <p className="sm:w-[360px] w-[300px] sm:text-sm text-xs">
                09:00 - 18:00 цаг хүртэл хүргэлтүүд 95% хүргэгдсэн байдаг бөгөөд
                замын ачааллаас шууд хамааралтай
              </p>
            </div>
          </div>
          <div className="sm:block hidden">
            <img src="/landing-page/diagram.png" alt="diagram" />
          </div>
          <div className="sm:space-y-28 space-y-8 sm:pt-20 pt-10 text-left mb-[-50px] sm:pl-0 pl-16">
            <div className="space-y-3">
              <span className="font-semibold sm:text-4xl text-2xl">02</span>
              <h1 className="text-[#0053AD] font-semibold text-xl">
                Захиалга очих
              </h1>
              <p className="sm:w-[360px] w-[300px] sm:text-sm text-xs">
                18:00 - 23:00 цагийн хооронд хүргэлтийн ажилтан захиалгын дагуу
                маргаашийн хүргэлтийн илгээмжүүдийг очиж авна.
              </p>
            </div>
            <div className=" space-y-3">
              <span className="font-semibold sm:text-4xl text-2xl">04</span>
              <h1 className="text-[#0053AD] font-semibold text-xl">Хүргэлт</h1>
              <p className="sm:w-[360px] w-[300px] sm:text-sm text-xs">
                09:00 цагаас эхлэн хүргэлтийн ажилтнууд бүсчлэл бүрд хүргэлтэд
                гарч эхэлнэ.
              </p>
            </div>
            <div className=" space-y-3">
              <span className="font-semibold sm:text-4xl text-2xl">06</span>
              <h1 className="text-[#0053AD] font-semibold text-xl">Тайлан </h1>
              <p className="sm:w-[360px] w-[300px] sm:text-sm text-xs">
                Хүргэлтийн төлөвүүд Ebuuhia.mn д бүртгэгдэн харилцагчид тайлан
                илгээнэ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
