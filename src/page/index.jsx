import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LeftMenu from "./leftMenu/LeftMenu";
import RightMenu from "./rightMenu/RightMenu";
import MainMenu from "./mainMenu/MainMenu";

function Page() {
  return (
    <Router>
      {/* Bọc ứng dụng trong BrowserRouter */}
      <div className="bg-gray-400 w-full h-auto">
        <div className="flex w-[1440px] h-auto bg-gray-400 mx-auto">
          <LeftMenu />
          <MainMenu />
          <RightMenu />
        </div>
      </div>
    </Router>
  );
}

export default Page;
