import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Header = () => {
  const router = useRouter();

  useEffect(() => {
    document.querySelectorAll("[data-scroll-to]").forEach((item) => {
      item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-scroll-to");
        const targetElement = document.querySelector(targetId!);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          console.error(`Element with ID ${targetId} not found`);
        }
      });
    });
  }, []);

  return (
    <div className="bg-white h-20 shadow-xl">
      <div className="fixed flex items-center justify-center w-full bg-white h-20  z-50 2xl:space-x-96 xl:space-x-44">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center sm:ml-0 pr-20 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <img
              src="https://portal.num.edu.mn/img/num-new/logo-blue.png"
              alt="logo"
              className="h-10"
            />
            <h1 className="pl-4 text-[18px] font-extrabold text-[#0053AD] uppercase">
              Монгол улсын их сургууль
            </h1>
          </div>
          <div className="space-x-6 sm:flex ml-14 hidden">
            <p
              className="text-[#0053AD] font-semibold text-md cursor-pointer"
              data-scroll-to="#section1"
            >
              Нүүр
            </p>
            <p
              className="text-[#0053AD] font-semibold text-md cursor-pointer"
              data-scroll-to="#section2"
            >
              Үйлчилгээ
            </p>
            <p
              className="text-[#0053AD] font-semibold text-md cursor-pointer"
              data-scroll-to="#section4"
            >
              Бидний тухай
            </p>
            <p
              className="text-[#0053AD] font-semibold text-md cursor-pointer"
              data-scroll-to="#section6"
            >
              Үйл ажиллагаа
            </p>
            <p
              className="text-[#0053AD] font-semibold text-md cursor-pointer"
              data-scroll-to="#section7"
            >
              Аппликэйшн
            </p>
            <p
              className="text-[#0053AD] font-semibold text-md cursor-pointer"
              data-scroll-to="#section8"
            >
              Бүсчлэл
            </p>
            <p
              className="text-[#0053AD] font-semibold text-md cursor-pointer"
              data-scroll-to="#section9"
            >
              Коммик
            </p>
          </div>
          <div className="sm:flex items-center hidden">
            <div className="border-l border-[#0053AD] h-8 mx-4"></div>
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </button>
            <button className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
