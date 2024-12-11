import { useState } from "react";

const PostInput = () => {
  const [open, setOpen] = useState(false);

  const inputHandler = () => {
    setOpen(true);
  };

  return (
    <div className="bg-white p-4 m-2 md:m-0 border border-gray-300 rounded-lg">
      <div className="flex items-center gap-3">
        <img
          src="/Usama_Sabir.jpg"
          alt=""
          className="rounded-full w-12 h-12 object-cover"
        />
        <input
          type="text"
          placeholder="Start a post"
          className=" rounded-full px-4 text-left hover:bg-gray-100 h-12 w-full cursor-pointer"
          onClick={inputHandler}
        />
      </div>
    </div>
  );
};

export default PostInput;
