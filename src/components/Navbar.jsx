import React from "react";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-50 shadow-md">
      <div className="flex items-center max-w-6xl justify-between h-14 mx-auto px-4">
        <div>
          <img
            src="/download.jpg"
            alt="Logo"
            width={35}
            height={35}
            className="rounded-sm"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="bg-[#EDF3F8] w-96 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Search"
          />
        </div>
        <div>
          <NavItems />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
