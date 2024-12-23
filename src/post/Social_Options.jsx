import React from "react";

const Social_Options = () => {
  return (
    <div>
      <div className="text-sm mx-2 p-2 flex items-center gap-6 border-b border-gray-300">
        <p className="text-xm text-gray-500 hover:text-blue-500 hover:underline hover:cursor-pointer">
          <i class="fa-regular fa-thumbs-up"></i>
        </p>
        <p className="text-xm text-gray-500 hover:text-blue-500 hover:underline hover:cursor-pointer">
          <i class="fa-regular fa-message"></i>
        </p>
        <p className="text-xm text-gray-500 hover:text-blue-500 hover:underline hover:cursor-pointer">
          <i class="fa-regular fa-paper-plane"></i>
        </p>
        <p className="text-xm text-gray-500 hover:text-blue-500 hover:underline hover:cursor-pointer">
          <i class="fa-solid fa-repeat"></i>
        </p>
      </div>
      <div className="flex items-center m-1 justify-between">
        <p className="m-2 ">
          Comments{" "}
          <i class="fa-regular fa-message ml-2  hover:text-blue-500 hover:underline hover:cursor-pointer"></i>
        </p>
        <p className="m-2 ">
          Shares{" "}
          <i class="fa-regular ml-2 fa-paper-plane  hover:text-blue-500 hover:underline hover:cursor-pointer"></i>
        </p>
      </div>
    </div>
  );
};

export default Social_Options;
