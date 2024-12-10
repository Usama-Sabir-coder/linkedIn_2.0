import React, { useState, useEffect } from "react";
import ProfilePicture from "../ProfileDp/Profilepicture";

const Sidebar = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="hidden md:block w-[20%] h-fit border border-gray-300 bg-white rounded-lg">
      <div className="flex relative flex-col items-center">
        <div className="w-full h-16 overflow-hidden mb-6">
          {user && (
            <img
              src="/banner.jpg"
              alt="Banner"
              className="w-full h-full rounded-t"
            />
          )}
        </div>
        <div className="my-1 absolute top-10 left-[40%]">
          <ProfilePicture src={user ? user.imageUrl : "/banner.jpg"} />
        </div>
        <div className="border-b border-b-gray-300">
          <div className="p-2 mt-5 text-center">
            <h1 className="font-bold hover:underline cursor-pointer">
              {user ? `${user.firstName} ${user.lastName}` : "Usama Sabir"}
            </h1>
            <p className="text-xs">
              @{user ? user.username : "usamasabir@gmail.com"}
            </p>
          </div>
        </div>
      </div>
      <div className="text-xs">
        <div className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer">
          <p>Post Impression</p>
          <p className="text-blue-500 font-bold">88</p>
        </div>
        <div className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer">
          <p>Posts</p>
          <p className="text-blue-500 font-bold">{posts.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
