import React from "react";
import StarIcon from "@mui/icons-material/Star";
function RecommenDations() {
  return (
    <div>
      <div className="mt-[70px] w-[970px] h-[550px] flex items-center flex-col ">
        <p className="text-[32px] leading-[39.55px] font-inter font-bold">
          Recommendations
        </p>
        <div className="w-[438px] h-[68px] flex justify-center text-center mt-[23px]">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
        <div className="w-full h-[335px] mt-[50px] flex justify-between">
          <div className="w-[310px] h-[335px] bg-white">
            <div className="flex pt-[25px] pl-[23px]">
              <StarIcon style={{ color: "yellow" }} />
              <StarIcon style={{ color: "yellow" }} />
              <StarIcon style={{ color: "yellow" }} />
              <StarIcon style={{ color: "yellow" }} />
              <StarIcon style={{ color: "yellow" }} />
            </div>
            <p className="pt-[12px] pl-[23px] font-inter font-medium text-[18px] leading-[22px] w-full">
              Great Quality!
            </p>
            <p className="w-[262px] h-[89px] mt-[16px] ml-[23px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....
            </p>
            <div className="mt-[30px] ml-[24px] flex">
              <img
                src="../../public/image/anhdaidien.jpg"
                alt=""
                className="w-[80px] h-[80px] rounded-full"
              />
              <div className="ml-[20px]  flex flex-col justify-center">
                <p>James Gouse</p>
                <p>Graphic Designer</p>
              </div>
            </div>
          </div>
          {/* ô 2 */}
          <div className="w-[310px] h-[335px] bg-white">
            <div className="flex pt-[25px] pl-[23px]">
              <StarIcon style={{ color: "yellow" }} />
              <StarIcon style={{ color: "yellow" }} />
              <StarIcon style={{ color: "yellow" }} />
              <StarIcon style={{ color: "yellow" }} />
              <StarIcon style={{ color: "yellow" }} />
            </div>
            <p className="pt-[12px] pl-[23px] font-inter font-medium text-[18px] leading-[22px] w-full">
              Great Quality!
            </p>
            <p className="w-[262px] h-[89px] mt-[16px] ml-[23px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....
            </p>
            <div className="mt-[30px] ml-[24px] flex">
              <img
                src="../../public/image/anhdaidien.jpg"
                alt=""
                className="w-[80px] h-[80px] rounded-full"
              />
              <div className="ml-[20px]  flex flex-col justify-center">
                <p>James Gouse</p>
                <p>Graphic Designer</p>
              </div>
            </div>
          </div>
          {/* ô 3 */}
          <div className="w-[310px] h-[335px] bg-white">
            <div className="flex pt-[25px] pl-[23px]">
              <StarIcon style={{ color: "yellow" }} />
              <StarIcon style={{ color: "yellow" }} />
              <StarIcon style={{ color: "yellow" }} />
              <StarIcon style={{ color: "yellow" }} />
              <StarIcon style={{ color: "yellow" }} />
            </div>
            <p className="pt-[12px] pl-[23px] font-inter font-medium text-[18px] leading-[22px] w-full">
              Great Quality!
            </p>
            <p className="w-[262px] h-[89px] mt-[16px] ml-[23px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....
            </p>
            <div className="mt-[30px] ml-[24px] flex">
              <img
                src="../../public/image/anhdaidien.jpg"
                alt=""
                className="w-[80px] h-[80px] rounded-full"
              />
              <div className="ml-[20px]  flex flex-col justify-center">
                <p>James Gouse</p>
                <p>Graphic Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommenDations;
