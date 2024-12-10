import React from "react";
import NavItems from "./NavItems";
import {
  SignedIn,
  SignInButton,
  UserButton,
  SignedOut,
} from "@clerk/clerk-react";

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
        <div className="md:block hidden">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#EDF3F8] w-96 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Search"
          />
        </div>
        <div className="md:block hidden">
          <NavItems />
        </div>
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <button className="border border-slate-700 px-4 py-1 bg-slate-600 rounded-3xl cursor-pointer text-white hover:text-black">
              <SignInButton />
            </button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
