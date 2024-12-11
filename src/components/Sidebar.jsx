import React, { useState, useEffect } from "react";

const Sidebar = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [avatar, setAvatar] = useState(user?.imageUrl || "/Usama_Sabir.jpg");

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

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="hidden md:block w-[20%] h-fit border border-gray-300 bg-white rounded-lg">
      <div className="flex relative flex-col items-center">
        <div className="w-full h-16 overflow-hidden">
          <img
            src="/download.jpeg"
            alt="Banner"
            width={200}
            height={200}
            className="w-full h-full rounded-t"
          />
        </div>
        <div className="my-1 absolute top-10 left-[40%]">
          <label htmlFor="avatar-upload" className="cursor-pointer">
            <img
              className="rounded-full w-16 h-16 object-cover"
              src={avatar}
              alt="Avatar"
            />
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
        </div>
        <br />
        <div className="border-b border-b-gray-300 ">
          <div className="p-2 mt-5 text-center">
            <h1 className="font-bold hover:underline cursor-pointer">
              {user ? `${user.firstName} ${user.lastName}` : "Usama Sabir"}
            </h1>
            <p className="text-xs">
              @
              {user
                ? user.username
                : "MERN Stack Developer At Knowledge Streams | Flutter Developer | Software Engine"}
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
