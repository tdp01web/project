import React from "react";
import { Button, Link, Tooltip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TextsmsIcon from "@mui/icons-material/Textsms";
import PaymentIcon from "@mui/icons-material/Payment";
import PersonIcon from "@mui/icons-material/Person";
import ModeIcon from "@mui/icons-material/Mode";
import BadgeIcon from "@mui/icons-material/Badge";

const icons = [
  { icon: <HomeIcon />, title: "Home" ,link:"/mainMenu/Blog"},
  { icon: <PaymentIcon />, title: "Payment" },
  { icon: <PersonIcon />, title: "Person" },
  { icon: <BadgeIcon />, title: "Badge" },
  { icon: <ModeIcon />, title: "Mode" },
  { icon: <TextsmsIcon />, title: "Textsms" },
];

function RightMenu() {
  return (
    <div className="h-[1315px] w-[108px] bg-white ml-[30px] flex justify-center items-center">
      <div className="">
        {icons.map((item, index) => (
          <Tooltip key={index} title={item.title} arrow placement="top">
            <Link to={item.link}>
            <button className="w-[50px] mt-[35px] h-[50px] rounded-full bg-[#F0F0F6] hover:bg-amber-500 flex justify-center items-center text-black font-bold">
              {item.icon}
            </button>
            </Link>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default RightMenu;
