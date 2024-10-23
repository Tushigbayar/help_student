import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#154185]">
        <div className="sm:flex block sm:mx-auto container sm:py-16 py-10  justify-between">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/footer-muis.png" alt="logoWhite" className="w-60" />
            </div>
          </div>
          <div className=" space-y-5 sm:block hidden">
            <h1 className="text-white text-lg flex justify-center font-semibold uppercase">
              Холбоосууд
            </h1>
            <div className="flex items-center space-x-2">
              <img src="/list.png" alt="" className="w-4" />
              <p className="text-sm w-[284px] text-opacity-40 text-white lowercase">
                БАЙГАЛЬ ЭХ ЛИЦЕЙ АХЛАХ СУРГУУЛЬ, ЭКОЛОГИЙН БОЛОВСРОЛЫН ТӨВ
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/list.png" alt="" className="w-4" />
              <p className="text-sm w-[284px] text-opacity-40 text-white">
                Дотоод дүрэм журам
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/list.png" alt="" className="w-4" />
              <p className="text-sm w-[284px] text-opacity-40 text-white">
                Захиргааны зөвлөлийн мэдээлэл
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/list.png" alt="" className="w-4" />
              <p className="text-sm w-[284px] text-opacity-40 text-white">
                Ажлын байр
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/list.png" alt="" className="w-4" />
              <p className="text-sm w-[284px] text-opacity-40 text-white">
                Дотуур утасны жагсаалт
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/list.png" alt="" className="w-4" />
              <p className="text-sm w-[284px] text-opacity-40 text-white">
                Диплом шалгах
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/list.png" alt="" className="w-4" />
              <p className="text-sm w-[284px] text-opacity-40 text-white">
                Тэтгэлэг
              </p>
            </div>
          </div>

          <div className="text-white space-y-5 sm:mt-0 mt-10">
            <h1 className="text-white text-lg font-semibold uppercase flex justify-center ">
              Холбоо барих
            </h1>
            <p className="text-sm w-[284px] text-opacity-40 text-white">
              Их сургуулийн гудамж - 1, Бага тойруу, Сүхбаатар дүүрэг,
              Улаанбаатар
            </p>
            <p className="text-sm w-[284px] text-opacity-40 text-white">
              75754400, 77307730-1163
            </p>
            <p className="text-sm w-[284px] text-opacity-40 text-white">
              news@num.edu.mn
            </p>
            <p className="text-sm w-[284px] text-opacity-40 text-white">
              https://www.facebook.com/MUIS1942
            </p>
            <p className="text-sm w-[284px] text-opacity-40 text-white">
              https://twitter.com/num_edu
            </p>
            <p className="text-sm w-[284px] text-opacity-40 text-white">
              https://www.youtube.com/channel/UCfWHF5c7a
            </p>
          </div>
        </div>
      </div>

      <div className="sm:mx-auto mx-8 container sm:flex py-2 text-[#154185] text-sm justify-center items-center sm:m-0 m-2">
        <p>
          © 2016-2020 МОНГОЛ УЛСЫН ИХ СУРГУУЛЬ, МЭДЭЭЛЛИЙН ТЕХНОЛОГИЙН ГАЗАР
        </p>
      </div>
    </>
  );
};

export default Footer;
