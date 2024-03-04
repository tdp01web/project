import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";
import MyServices from "./MyServices";
import PricePlans from "./PricePlans.JSX";
import RecommenDations from "./RecommenDations";
import Education from "./Education";
import Portfolio from "./Portfolio";
import WorkHistory from "./WorkHistory";
import Blog from "./Blog";
import FormLayout from "./FormLayout";
import ListImage from "./ListImage";
import Footer from "./Footer";

function MainMenu() {
  return (
    <div className="flex items-center flex-col w-[970px] ml-[30px]   ">
      <div className="w-[970px] h-[467px]  relative bg-white">
        <img
          src="../../public/image/ff.png"
          alt=""
          className="absolute w-[16px] h-[16px] mt-[29px] ml-[40px]"
        />
        <img
          src="../../public/image/ttt.png"
          alt=""
          className="absolute w-[16px] h-[16px] mt-[422px] ml-[90px]"
        />
        <img
          src="../../public/image/aa.png"
          alt=""
          className="absolute w-[16px] h-[16px] mt-[333px] ml-[380px]"
        />
        <img
          src="../../public/image/ff.png"
          alt=""
          className="absolute w-[16px] h-[16px] mt-[380px] ml-[560px]"
        />
        <img
          src="../../public/image/dd.png"
          alt=""
          className="absolute w-[16px] h-[16px] mt-[427px] ml-[920px]"
        />
        <img
          src="../../public/image/kk.png"
          alt=""
          className="absolute w-[16px] h-[16px] mt-[70px] ml-[900px]"
        />
        <img
          src="../../public/image/ttt.png"
          alt=""
          className="absolute w-[16px] h-[16px] mt-[52px] ml-[523px]"
        />
        <div className="absolute w-[500px] h-[118px] mt-[93px] ml-[60px] ">
          <p className="text-[48px] font-extrabold font-inter leading-[59.33px]">
            I’m Thái Doãn Phong{" "}
            <span className="text-amber-500">Front-end</span> Developer
          </p>
        </div>
        <div className="w-[424px] h-[88px] mt-[229px] absolute ml-[60px]">
          <p className="font-normal font-inter text-[16px] leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </p>
        </div>
        <button className="absolute w-[154px] h-[51px] bg-amber-500 mt-[342px] ml-[60px] rounded-[10px]">
          HIRE ME
        </button>
        <img
          src="../../public/image/hehe.png"
          alt=""
          className="absolute w-[325.72px] h-[459.09px] mt-[8px] ml-[588px]"
        />
      </div>
      <MyServices />
      <PricePlans />
      <RecommenDations />
      <Education />
      <WorkHistory />
      <Portfolio />
      <Blog />
      <FormLayout />
      <ListImage />
      <Footer />
    </div>
  );
}

export default MainMenu;
