import React from "react";

function LeftMenu() {
  return (
    <div className="w-[305px] h-[1315px] flex items-center flex-col bg-white">
      <div className="w-[219px] h-[281px]  mt-[50px] flex items-center flex-col">
        <img
          src="../../public/image/anhdaidien.jpg"
          alt="../../public/image/anhdaidien.jpg"
          className="rounded-full w-[150px] h-[150px]"
        />
        <h2 className="mt-[33px] font-semibold ">Thái Doãn Phong</h2>
        <p className="mt-[15px]">Font-end Developer</p>
        <div className="w-[218px] h-[24px] flex justify-between mt-[16px]">
          <div className="w-[24px] h-[24px] bg-amber-500 rounded-full flex items-center justify-center">
            <img src="../../public/image/Icons-facebook.png" alt="" />
          </div>
          <div className="w-[24px] h-[24px] bg-amber-500 rounded-full flex items-center justify-center">
            <img src="../../public/image/Icons-dribbble.png" alt="" />
          </div>
          <div className="w-[24px] h-[24px] bg-amber-500 rounded-full flex items-center justify-center">
            <img src="../../public/image/Icons-instagram.png" alt="" />
          </div>
          <div className="w-[24px] h-[24px] bg-amber-500 rounded-full flex items-center justify-center">
            <img src="../../public/image/Icons-linkedin.png" alt="" />
          </div>
          <div className="w-[24px] h-[24px] bg-amber-500 rounded-full flex items-center justify-center">
            <img src="../../public/image/Icons-twitter.png" alt="" />
          </div>
          <div className="w-[24px] h-[24px] bg-amber-500 rounded-full flex items-center justify-center">
            <img src="../../public/image/Icons-Youtube.png" alt="" />
          </div>
        </div>
      </div>

      <hr className="w-[220px] bg-black mt-[22px] h-[2px]" />

      {/* **********************************************Age******************************* */}
      <div className="w-[220px] h-[126px] mt-[20px] ">
        <div className="w-[220px] h-[25px] mt-[6px] flex justify-between ">
          <div className="w-[48px] h-[24px] bg-amber-500 flex items-center justify-center">
            Age:
          </div>
          <p>19</p>
        </div>
        <div className="w-[220px] h-[25px] flex justify-between mt-[9px]">
          <div className="w-[89px] h-[24px] bg-amber-500 flex items-center justify-center">
            Residence:
          </div>
          <p>Hà Nội</p>
        </div>
        <div className="w-[220px] h-[25px] flex justify-between mt-[9px]">
          <div className="w-[85px] h-[24px] bg-amber-500 flex items-center justify-center">
            Freelance:
          </div>
          <p className="text-lime-600">Available</p>
        </div>
        <div className="w-[220px] h-[25px] flex justify-between mt-[9px]">
          <div className="w-[75px] h-[24px] bg-amber-500 flex items-center justify-center">
            Address:
          </div>
          <p>Đô Lương,Nghệ An</p>
        </div>
      </div>

      <hr className="w-[220px] bg-black mt-[30px] h-[2px]" />

      {/* ********************Languages*************** */}
      <div className="w-[220px] h-[150px] mt-[24px]">
        <h2>Languages</h2>
        <div className="w-[220px] h-[24px] mt-[20px]">
          <h2 className="text-gray-600 flex justify-between">
            Bangla <span>70%</span>
          </h2>
          <div
            className="progress mt-[7px] h-[5px]"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar bg-amber-500 height:'5px'"
              style={{ width: "75%", height: "5px" }}
            ></div>
          </div>
        </div>
        <div className="w-[220px] h-[24px] mt-[17px]">
          <h2 className="text-gray-600 flex justify-between">
            English <span>70%</span>
          </h2>
          <div
            className="progress mt-[7px] h-[5px]"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar bg-amber-500 height:'5px'"
              style={{ width: "75%", height: "5px" }}
            ></div>
          </div>
        </div>
        <div className="w-[220px] h-[24px] mt-[18px]">
          <h2 className="text-gray-600 flex justify-between">
            Tiếng Việt <span>70%</span>
          </h2>
          <div
            className="progress mt-[7px] h-[5px]"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar bg-amber-500 height:'5px'"
              style={{ width: "75%", height: "5px" }}
            ></div>
          </div>
        </div>
      </div>

      <hr className="w-[220px] bg-black mt-[27px] h-[2px]" />

      {/* ******************************Skills************************************ */}
      <div className="w-[220px] h-[250px] mt-[25px]">
        <h2>Skills</h2>
        <div className="w-[220px] h-[24px] mt-[19px]">
          <h2 className="text-gray-600 flex justify-between">
            HTML <span>70%</span>
          </h2>
          <div
            className="progress mt-[7px] h-[5px]"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar bg-amber-500 height:'5px'"
              style={{ width: "75%", height: "5px" }}
            ></div>
          </div>
        </div>
        <div className="w-[220px] h-[24px] mt-[18px]">
          <h2 className="text-gray-600 flex justify-between">
            CSS <span>70%</span>
          </h2>
          <div
            className="progress mt-[7px] h-[5px]"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar bg-amber-500 height:'5px'"
              style={{ width: "75%", height: "5px" }}
            ></div>
          </div>
        </div>
        <div className="w-[220px] h-[24px] mt-[20px]">
          <h2 className="text-gray-600 flex justify-between">
            JS <span>70%</span>
          </h2>
          <div
            className="progress mt-[7px] h-[5px]"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar bg-amber-500 height:'5px'"
              style={{ width: "75%", height: "5px" }}
            ></div>
          </div>
        </div>
        <div className="w-[220px] h-[24px] mt-[18px]">
          <h2 className="text-gray-600 flex justify-between">
            PHP <span>70%</span>
          </h2>
          <div
            className="progress mt-[7px] h-[5px]"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar bg-amber-500 height:'5px'"
              style={{ width: "75%", height: "5px" }}
            ></div>
          </div>
        </div>
        <div className="w-[220px] h-[24px] mt-[20px]">
          <h2 className="text-gray-600 flex justify-between">
            WordPress<span>70%</span>
          </h2>
          <div
            className="progress mt-[7px] h-[5px]"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar bg-amber-500 height:'5px'"
              style={{ width: "75%", height: "5px" }}
            ></div>
          </div>
        </div>
      </div>

      <hr className="w-[220px] bg-black mt-[15px] h-[2px]" />

      {/* ***************Extra Skills************************************************ */}
      <div className="w-[220px] h-[148px] mt-[25px]">
        <h2>Extra Skills</h2>
        <div className="flex items-center h-[24px] w-[186px] mt-[17px]">
          <img
            src="../../public/image/icons.png"
            alt=""
            className="w-[15px] h-[15px]"
          />
          <p className="ml-[10px]">Bootstrap, Materialize</p>
        </div>
        <div className="flex items-center h-[24px] w-[186px] mt-[5px]">
          <img
            src="../../public/image/icons.png"
            alt=""
            className="w-[15px] h-[15px]"
          />
          <p className="ml-[10px]">Stylus, Sass, Less</p>
        </div>
        <div className="flex items-center h-[24px] w-[186px] mt-[5px]">
          <img
            src="../../public/image/icons.png"
            alt=""
            className="w-[15px] h-[15px]"
          />
          <p className="ml-[10px]">Gulp, Webpack, Grunt</p>
        </div>
        <div className="flex items-center h-[24px] w-[186px] mt-[5px]">
          <img
            src="../../public/image/icons.png"
            alt=""
            className="w-[15px] h-[15px]"
          />
          <p className="ml-[10px]">GIT Knowledge</p>
        </div>
      </div>
      <hr className="w-[220px] bg-black mt-[21px] h-[2px] " />

      <button className="w-[220px] h-[40px] bg-amber-500 mt-[26px]">
        Download cv
      </button>
    </div>
  );
}

export default LeftMenu;
