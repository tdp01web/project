import React from "react";

function MyServices() {
  return (
    <div>
      <div className="w-[970px] h-[653px] mt-[134px] flex items-center flex-col">
        <p className="text-[32px] leading-[39.55px font-bold font-inter]">
          My Services
        </p>
        <div className="w-[438px] h-[68px] flex justify-center text-center mt-[20px]">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
        <div className="h-[500px] grid grid-cols-3 grid-rows-2 w-[970px]  mt-[50px] gap-3">
          <div className="w-[310px] h-[225px] flex items-center flex-col bg-white ">
            <img
              src="../../public/image/coding.png"
              alt=""
              className="w-[68px] h-[68px] mt-[30px]"
            />
            <p className="font-inter text-[18px] font-medium leading-[22.25px] mt-[25px]">
              web development
            </p>
            <p className="font-inter text-[15px] font-medium leading-[22.25px] mt-[16px]">
              blog, e-commerce
            </p>
          </div>
          <div className="w-[310px] h-[225px] flex items-center flex-col bg-white ">
            <img
              src="../../public/image/illustration.png"
              alt=""
              className="w-[68px] h-[68px] mt-[30px]"
            />
            <p className="font-inter text-[18px] font-medium leading-[22.25px] mt-[25px]">
              UI/UX design
            </p>
            <p className="font-inter text-[15px] font-medium leading-[22.25px] mt-[16px]">
              Mobile app, website design
            </p>
          </div>
          <div className="w-[310px] h-[225px] flex items-center flex-col bg-white ">
            <img
              src="../../public/image/Microphone.png"
              alt=""
              className="w-[68px] h-[68px] mt-[30px]"
            />
            <p className="font-inter text-[18px] font-medium leading-[22.25px] mt-[25px]">
              Sound Design
            </p>
            <p className="font-inter text-[15px] font-medium leading-[22.25px] mt-[16px]">
              Voice Over, Beat Making
            </p>
          </div>
          <div className="w-[310px] h-[225px] flex items-center flex-col bg-white mt-[2px]">
            <img
              src="../../public/image/game-development.png"
              alt=""
              className="w-[68px] h-[68px] mt-[34px]"
            />
            <p className="font-inter text-[18px] font-medium leading-[22.25px] mt-[26px]">
              game design
            </p>
            <p className="font-inter text-[15px] font-medium leading-[22.25px] mt-[19px]">
              Character Design, Props & Objects
            </p>
          </div>
          <div className="w-[310px] h-[225px] flex items-center flex-col bg-white ">
            <img
              src="../../public/image/Photographer.png"
              alt=""
              className="w-[68px] h-[68px] mt-[28px]"
            />
            <p className="font-inter text-[18px] font-medium leading-[22.25px] mt-[35px]">
              Photography
            </p>
            <p className="font-inter text-[15px] font-medium leading-[22.25px] mt-[18px]">
              Portrait, product photography
            </p>
          </div>
          <div className="w-[310px] h-[225px] flex items-center justify-center flex-col bg-white text-center">
            <p className="font-inter text-[18px] font-medium leading-[22.25px] mt-[12px]">
              Advertising
            </p>
            <p className="font-inter text-[15px] font-medium leading-[22.25px] mt-[25px] w-[260px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi.{" "}
            </p>
            <p className="mt-[10px] text-amber-500 font-bold ">ORDER NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyServices;
