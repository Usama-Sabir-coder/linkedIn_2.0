import React from "react";

const Home = () => {
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
        <div className="flex items-center bg-[#EDF3F8] rounded-lg w-80 px-4 py-2 border border-gray-300 focus-within:ring-2 focus-within:ring-black gap-2">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none placeholder-gray-500"
            aria-label="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
