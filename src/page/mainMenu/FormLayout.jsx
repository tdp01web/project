import React from "react";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
function FormLayout() {
  return (
    <div className="w-full h-[755px] flex mt-[95px]">
      <div className="w-[570px] relative ">
        <p className="font-bold text-[32px] font-inter leading-[39px]">
          Leave us your info
        </p>
        <div className="bg-white w-full h-[665px] mt-[50px]">
          <form action="" className="flex flex-col items-center">
            <div className="form-group col-md-9 mt-[25px] w-[521px]">
              <label htmlFor="inputEmail4">Your Full Name ( Required)</label>
              <input
                type="email"
                className="form-control mt-[10px] h-[50px]"
                id="inputEmail4"
              />
            </div>
            <div className="form-group col-md-9 mt-[20px] w-[521px]">
              <label htmlFor="inputEmail4">Your Full Name ( Required)</label>
              <input
                type="email"
                className="form-control mt-[10px] h-[50px]"
                id="inputEmail4"
              />
            </div>
            <div className="form-group col-md-9 mt-[20px] w-[521px]">
              <label htmlFor="inputEmail4">Your Full Name ( Required)</label>
              <input
                type="email"
                className="form-control mt-[10px] h-[50px]"
                id="inputEmail4"
              />
            </div>
            <div className="form-group col-md-9 mt-[25px] w-[521px]">
              <label htmlFor="inputNote">Your Full Name (Required)</label>
              <textarea
                id="inputNote"
                className="form-control mt-[8px] h-[210px]"
                placeholder="Write your note here..."
              />
            </div>
            <button className="w-[150px] h-[35px] bg-amber-500 mt-[23px] rounded-[10px] left-[25px] bottom-[25px] absolute">
              Send message
            </button>
          </form>
        </div>
      </div>
      <div className="w-[370px] ml-[30px] ">
        <p className="font-bold text-[32px] font-inter leading-[39px]">
          Leave us your info
        </p>
        <div className="flex flex-col items-center w-full h-auto mt-[50px]">
          <div className="w-full h-[210px] bg-white flex flex-col items-center">
            <div className="rounded-full w-[40px] h-[40px] bg-amber-500 flex justify-center items-center mt-[25px]">
              <img src="../../public/image/location.png" alt="" />
            </div>
            <div className="w-[90%] text-[18px] h-[25px] flex justify-between items-center mt-[30px]">
              <p>Country:</p>
              <p>Viet Nam</p>
            </div>
            <div className="w-[90%] h-[25px] flex justify-between items-center mt-[15px] text-[18px]">
              <p>City:</p>
              <p>Ha Noi</p>
            </div>
            <div className="w-[90%] text-[18px] h-[25px] flex justify-between items-center mt-[10px]">
              <p>Streat:</p>
              <p>Dan Phuong</p>
            </div>
          </div>

          {/* ô 2 */}
          <div className="w-full h-[210px] bg-white flex flex-col items-center mt-[18px]">
            <div className="rounded-full w-[40px] h-[40px] bg-amber-500 flex justify-center items-center mt-[20px]">
              <LocalPostOfficeIcon />
            </div>
            <div className="w-[90%] text-[18px] h-[25px] flex justify-between items-center mt-[39px]">
              <p>Email:</p>
              <p>thaidoanphong@gmail.com</p>
            </div>
            <div className="w-[90%] text-[18px] h-[25px] flex justify-between items-center mt-[14px]">
              <p>Skype:</p>
              <p>Phong</p>
            </div>
            <div className="w-[90%] h-[25px] flex justify-between items-center mt-[12px] text-[18px]">
              <p>Telegram:</p>
              <p>0353113243</p>
            </div>
          </div>

          {/* ô 3 */}
          <div className="w-full h-[210px] bg-white flex flex-col items-center mt-[17px]">
            <div className="rounded-full w-[40px] h-[40px] bg-amber-500 flex justify-center items-center mt-[25px]">
              <AdUnitsIcon />
            </div>
            <div className="w-[90%] h-[25px] flex justify-between items-center mt-[30px] text-[18px]">
              <p>Support services:</p>
              <p>Phong</p>
            </div>
            <div className="w-[90%] h-[25px] flex justify-between items-center mt-[13px] text-[18px]">
              <p>Office:</p>
              <p>Ptcrop</p>
            </div>
            <div className="w-[90%] h-[25px] flex justify-between items-center mt-[13px] text-[18px]">
              <p>Personal:</p>
              <p>0353113254</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLayout;
