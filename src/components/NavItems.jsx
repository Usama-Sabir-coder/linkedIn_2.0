import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    src: "/home",
    icon: <i class="fa-solid fa-house"></i>,
    text: "Home",
  },
  {
    src: "/networks",
    icon: <i class="fa-solid fa-user"></i>,
    text: "My Network",
  },
  {
    src: "/job",
    icon: <i class="fa-solid fa-briefcase"></i>,
    text: "Jobs",
  },
  {
    src: "/message",
    icon: <i class="fa-solid fa-message"></i>,
    text: "Messaging",
  },
  {
    src: "/notification",
    icon: <i class="fa-solid fa-bell"></i>,
    text: "Notification",
  },
];

const NavItems = () => {
  return (
    <div className="flex gap-8">
      {navItems.map((navItem, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer text-[#666666] hover:text-black"
          >
            <span>{navItem.icon}</span>
            <Link to={navItem.src} className="text-xs">
              {navItem.text}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
