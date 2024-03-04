import React from "react";

function Portfolio() {
  return (
    <div>
      <div className="mt-[70px] w-[970px] h-[1160px] flex items-center flex-col ">
        <p className="text-[32px] leading-[39.55px]">Portfolio</p>
        <div className="w-[438px] h-[68px] flex justify-center text-center mt-[24px]">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
        <ul className="flex w-[60%] justify-between mt-[50px]">
          <li>
            <a href="" className="hover:text-amber-500 font-semibold">
              All categories
            </a>
          </li>
          <li>
            <a href="" className="hover:text-amber-500 font-semibold">
              UI Design
            </a>
          </li>
          <li>
            <a href="" className="hover:text-amber-500 font-semibold">
              Web Templates
            </a>
          </li>
          <li>
            <a href="" className="hover:text-amber-500 font-semibold">
              Logo
            </a>
          </li>
          <li>
            <a href="" className="hover:text-amber-500 font-semibold">
              Branding
            </a>
          </li>
        </ul>
        <div className="w-full  h-[940px]  mt-[46px] grid grid-cols-3 grid-rows-3 gap-3">
          <div className="w-[310px] h-[300px]">
            <img src="../../public/image/Image1.png" alt="" />
          </div>
          <div className="w-[310px] h-[300px]">
            <img src="../../public/image/Image2.png" alt="" />
          </div>
          <div className="w-[310px] h-[300px]">
            <img src="../../public/image/Image3.png" alt="" />
          </div>
          <div className="w-[310px] h-[300px]">
            <img src="../../public/image/Image4.png" alt="" />
          </div>
          <div className="w-[310px] h-[300px]">
            <img src="../../public/image/Image5.png" alt="" />
          </div>
          <div className="w-[310px] h-[300px]">
            <img src="../../public/image/Image6.png" alt="" />
          </div>
          <div className="w-[310px] h-[300px]">
            <img src="../../public/image/Image7.png" alt="" />
          </div>
          <div className="w-[310px] h-[300px]">
            <img src="../../public/image/Image8.png" alt="" />
          </div>
          <div className="w-[310px] h-[300px]">
            <img src="../../public/image/Image9.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
