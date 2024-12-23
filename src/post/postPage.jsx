import React from "react";
import PostContent from "../post/PostContent";
import Social_Options from "../post/Social_Options";

const PostPage = () => {
  return (
    <div className="bg-white my-2 mx-2 md:mx-0 rounded-lg border border-gray-300">
      <div className="flex gap-2 p-4">
        <div className="flex items-center justify-between w-full">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/Usama_Sabir.jpg"
                alt=""
                className="rounded-full w-12 h-12 object-cover"
              />
              <div className="flex flex-col">
                <h1 className="text-sm font-bold flex items-center">
                  Usama Sabir
                  <span className="badge badge-black ml-2 text-gray-500">
                    you
                  </span>
                </h1>
              </div>
            </div>
            <p className="text-xs ml-14 text-gray-500">@username</p>
            <p className="text-xs  ml-14 text-gray-500">1hr ago</p>
          </div>
        </div>
      </div>
      <PostContent />
      <Social_Options />
    </div>
  );
};

export default PostPage;
