import React from "react";

function Blog() {
  return (
    <div>
      <div className="mt-[105px] w-[970px]  h-[640px] flex items-center flex-col">
        <p className="text-[32px] leading-[39.55px]">Blog</p>
        <div className="w-[438px] h-[68px] flex justify-center text-center mt-[31px]">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
        <div className="h-[474px]  w-full mt-[50px] flex">
          <div className="w-[310px] h-[474px] bg-white flex items-center flex-col">
            <img src="../../public/image/Imagea.png" alt="" />
            <div className="w-[268px] h-auto mt-[25px]">
              <p className="text-[18px] font-semibold ">
                How to make web tempates
              </p>
              <p className="mt-5px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna{" "}
              </p>
              <p className="mt-[10px] text-[18px] text-amber-500">
                {" "}
                Learn more
              </p>
            </div>
          </div>

          {/* ô thứ 2 */}
          <div className="w-[310px] h-full bg-white flex items-center flex-col ml-[20px] mr-[20px]">
            <img src="../../public/image/Iamged.png" alt="" />
            <div className="w-[268px] h-auto mt-[10px]">
              <p className="text-[18px] font-semibold ">
                How to make web tempates
              </p>
              <p className="mt-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna{" "}
              </p>
              <p className="mt-[10px] text-[18px] text-amber-500">
                {" "}
                Learn more
              </p>
            </div>
          </div>

          {/* ô thứ 3 */}
          <div className="w-[310px] h-full bg-white flex items-center flex-col">
            <img src="../../public/image/Imagec.png" alt="" />
            <div className="w-[268px] h-auto mt-[10px]">
              <p className="text-[18px] font-semibold ">
                How to make web tempates
              </p>
              <p className="mt-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna{" "}
              </p>
              <p className="mt-[10px] text-[18px] text-amber-500">
                {" "}
                Learn more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
